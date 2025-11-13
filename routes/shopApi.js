const express = require("express");
const router = express.Router();
const orderStore = require("../utils/orderStore");

// GET /api/shop/orders  -> list all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await orderStore.getAllOrders();
    // For a public shop API we might not send internal fields in real life,
    // but here it's fine.
    res.json({ orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load orders" });
  }
});

// POST /api/shop/orders  -> create a new order
router.post("/orders", async (req, res) => {
  try {
    const { customer, total, items } = req.body;
    if (!customer || typeof total !== "number") {
      return res.status(400).json({ message: "customer and total are required" });
    }

    const newOrder = await orderStore.addOrder({
      customer,
      total,
      items: items || []
    });

    res.status(201).json({ order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
});

module.exports = router;
