const orderStore = require("./utils/orderStore");
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
  try {
    const orders = await orderStore.getAllOrders();
    res.render("orders", { title: "Order Dashboard", orders });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading orders");
  }
});

app.get("/orders/:id", async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await orderStore.getOrderById(orderId);
    if (!order) {
      return res.status(404).send("Order not found");
    }
    res.render("order-detail", { title: `Order #${order.id}`, order });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading order");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
