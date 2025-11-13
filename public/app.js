document.addEventListener("click", async (e) => {
  // existing sync-btn logic...
  if (e.target.matches(".sync-btn")) {
    const orderId = e.target.getAttribute("data-order-id");

    try {
      const res = await fetch(`/api/erp/sync-order/${orderId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initiatedFrom: "dashboard" })
      });

      const data = await res.json();
      alert(`Order ${orderId} sync result: ${data.status}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to sync order. Check console.");
    }
  }

  // Create demo order
  if (e.target.id === "create-demo-order") {
    try {
      const res = await fetch("/api/shop/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: "Demo Customer",
          total: 42.5,
          items: [
            { sku: "SKU-DEMO", name: "Demo Item", qty: 1, price: 42.5 }
          ]
        })
      });

      const data = await res.json();
      alert(`Created order #${data.order.id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to create order");
    }
  }
});
