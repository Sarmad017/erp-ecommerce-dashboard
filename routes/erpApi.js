const express = require("express");
const router = express.Router();
const { buildSoapEnvelope, sendSoapToErp } = require("../soap/erpSoapClient");

// REST-style endpoint our frontend calls
router.post("/sync-order/:id", async (req, res) => {
  const orderId = req.params.id;

  // Build fake XML payload to simulate SOAP ERP call
  const xmlBody = buildSoapEnvelope(orderId);

  try {
    const soapResponse = await sendSoapToErp(xmlBody); // mocked
    res.json({ status: "OK", erpResponse: soapResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "ERROR", message: "ERP sync failed" });
  }
});

module.exports = router;
