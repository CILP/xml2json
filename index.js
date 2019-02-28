const xmlParser = require('./src/parser');
const xml = '<shipment><item>some item</item><from>Evan</from><to>PayStand</to><address><street>100 Enterprise Way</street><city>Scotts Valley</city><zip>95066</zip></address></shipment>';

console.log(xmlParser.parse(xml));