const express = require("express");
const router = express.Router();

// Mock shop order list (B2C e-commerce)
router.get("/orders", (req, res) => {
  const orders = [
    { id: 101, customer: "Alice", total: 120.5 },
    { id: 102, customer: "Bob", total: 75.0 }
  ];
  res.json({ orders });
});

module.exports = router;
