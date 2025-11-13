// utils/orderStore.js
const fs = require("fs").promises;
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "orders.json");

async function readOrdersFile() {
  const content = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(content);
}

async function writeOrdersFile(orders) {
  await fs.writeFile(dataPath, JSON.stringify(orders, null, 2), "utf-8");
}

async function getAllOrders() {
  return readOrdersFile();
}

async function getOrderById(id) {
  const orders = await readOrdersFile();
  return orders.find((o) => o.id === Number(id)) || null;
}

async function addOrder(order) {
  const orders = await readOrdersFile();
  const maxId = orders.reduce((max, o) => Math.max(max, o.id), 0);
  const newOrder = { id: maxId + 1, status: "Pending", ...order };
  orders.push(newOrder);
  await writeOrdersFile(orders);
  return newOrder;
}

async function updateOrderStatus(id, status) {
  const orders = await readOrdersFile();
  const idx = orders.findIndex((o) => o.id === Number(id));
  if (idx === -1) return null;
  orders[idx].status = status;
  await writeOrdersFile(orders);
  return orders[idx];
}

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder,
  updateOrderStatus
};
