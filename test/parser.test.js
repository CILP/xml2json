const xmlParser = require('../src/parser');

describe('Xml parser', () => {

  it('flat xml', (done) => {

    const xml = '<payment><amount>10.00</amount><from>Evan</from><to>PayStand</to></payment>';
    const result = xmlParser.parse(xml);

    expect(result).toMatchObject({
      payment: {
        amount: '10.00',
        from: 'Evan',
        to: 'PayStand'
      }
    });
    done();
  });

  it('nested xml /a', (done) => {
    const xml = '<shipment><item>some item</item><from>Evan</from><to>PayStand</to><address><street>100 Enterprise Way</street><city>Scotts Valley</city><zip>95066</zip></address></shipment>';
    const result = xmlParser.parse(xml);

    expect(result).toMatchObject({
      shipment: {
        item: "some item",
        from: "Evan",
        to: "PayStand",
        address: {
          street: "100 Enterprise Way",
          city: "Scotts Valley",
          zip: "95066"
        }
      }
    });

    done();
  });

  it('nested xml /b', (done) => {
    const xml = '<payment><amount>10.00</amount><a><b><c>Value C</c></b></a><mayor>false</mayor><from>Evan</from><to>PayStand</to></payment>';
    const result = xmlParser.parse(xml);

    expect(result).toMatchObject({
      payment: {
        a: {
          b: {
            c: 'Value C'
          }
        },
        amount: '10.00',
        from: 'Evan',
        to: 'PayStand'
      }
    });

    done();
  });

  it('no xml', (done) => {
    const xml = '';
    const result = xmlParser.parse(xml);

    expect(result).toMatchObject({});
    done();
  });

  it('xml not a string', (done) => {
    const xml = [];

    expect(() => {
      const result = xmlParser.parse(xml);
    }).toThrow();
    done();
  });
});