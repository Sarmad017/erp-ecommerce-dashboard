// Very simplified SOAP/ERP client mock

function buildSoapEnvelope(orderId) {
    // XML payload
    return `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                        xmlns:erp="http://example.com/erp">
        <soapenv:Header/>
        <soapenv:Body>
          <erp:SyncOrderRequest>
            <erp:OrderId>${orderId}</erp:OrderId>
          </erp:SyncOrderRequest>
        </soapenv:Body>
      </soapenv:Envelope>
    `.trim();
  }
  
  // Simulate sending XML to ERP SOAP endpoint
  async function sendSoapToErp(xmlBody) {
    console.log("Sending XML to ERP SOAP endpoint...");
    console.log(xmlBody);
  
    // In reality you'd use axios/fetch to POST this XML somewhere
    // For now we just return a mock response
    const mockedResponse = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                        xmlns:erp="http://example.com/erp">
        <soapenv:Body>
          <erp:SyncOrderResponse>
            <erp:Status>SUCCESS</erp:Status>
            <erp:Message>Order synced to ERP.</erp:Message>
          </erp:SyncOrderResponse>
        </soapenv:Body>
      </soapenv:Envelope>
    `.trim();
  
    return mockedResponse;
  }
  
  module.exports = { buildSoapEnvelope, sendSoapToErp };
  