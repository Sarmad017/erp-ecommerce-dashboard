const express = require("express");
const router = express.Router();
const { buildSoapEnvelope, sendSoapToErp } = require("../soap/erpSoapClient");
const orderStore = require("../utils/orderStore");

// REST-style endpoint our frontend calls
router.post("/sync-order/:id", async (req, res) => {
  const orderId = req.params.id;

  const xmlBody = buildSoapEnvelope(orderId);

  try {
    const soapResponse = await sendSoapToErp(xmlBody);

    // Update local order status in our "DB"
    const updatedOrder = await orderStore.updateOrderStatus(orderId, "Synced");

    res.json({
      status: "OK",
      erpResponse: soapResponse,
      updatedOrder
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "ERROR", message: "ERP sync failed" });
  }
});

module.exports = router;
