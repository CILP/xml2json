function parse(xml) {
  const json = {};

  if (typeof xml !== 'string') {
    throw 'Xml must be a string';
  }

  const nodes = getNodes(xml);
  const nodeValue = nodes.map(node => node.split('>'));

  let jsonReference = json;
  const stack = [];

  nodeValue.forEach(([tag, value]) => {
    if (!value) {
      // it's a start node or it's a close node
      
      if (tag[0] === '/') {
        // it's a close node don't add to json

        const lastTag = stack.pop();
        if (tag === `/${lastTag}`) {
          // move one level up in json
          // jsonReference = json[stack[stack.length - 1]];
          
          let tmp = json;
          stack.forEach(tag => {
            jsonReference = tmp[tag];
            tmp = tmp[tag];
          });
        }
      } else {
        // start tag
        // add it to json
        jsonReference[tag] = {};
        jsonReference = jsonReference[tag];

        // add open tag to stack
        stack.push(tag);
      }
    } else {
      // flat node
      // Maybe JSON.parse()?
      jsonReference[tag] = value;

      // add open tag to stack
      stack.push(tag);
    }
  });
  return json;
}

function getNodes(xml) {
  return xml.split('<').filter(x => x);
}

module.exports = { parse };