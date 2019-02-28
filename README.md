# xml2json
XML to JSON 

## Install dependcies (for test)
`$ yarn` or `$ npm install`

## Run parser
In order to run an example:
`$ yarn start`
or
`$ npm start`

## Test parser
`$ yarn test`
or 
`$ npm run test`

## Example
```js
  const xmlParser = require('./src/parser');
  const xml = '<person><name>Carlos</name><lastname>Linares</lastname></person>';

  xmlParser.parse(xml);
```

## Output
```js
{
  person: {
    name: 'Carlos',
    lastname: 'Linares'
  }
}
```