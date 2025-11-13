const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const shopApiRouter = require("./routes/shopApi");
const erpApiRouter = require("./routes/erpApi");

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, "views")
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes for APIs (JSON / XML simulation)
app.use("/api/shop", shopApiRouter);
app.use("/api/erp", erpApiRouter);

// Server-side rendered pages
app.get("/", async (req, res) => {
  // In real life you'd fetch orders from ERP or shop API
  const mockOrders = [
    { id: 101, customer: "Alice", total: 120.5, status: "Pending" },
    { id: 102, customer: "Bob", total: 75.0, status: "Synced" }
  ];

  res.render("orders", { title: "Order Dashboard", orders: mockOrders });
});

app.get("/orders/:id", async (req, res) => {
  const orderId = req.params.id;
  // Mock order detail
  const order = {
    id: orderId,
    customer: "Alice",
    total: 120.5,
    items: [
      { sku: "SKU-001", name: "T-Shirt", qty: 2, price: 20 },
      { sku: "SKU-002", name: "Jeans", qty: 1, price: 80.5 }
    ],
    status: "Pending"
  };

  res.render("order-detail", { title: `Order #${order.id}`, order });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
