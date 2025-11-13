document.addEventListener("click", async (e) => {
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
      } catch (err) {
        console.error(err);
        alert("Failed to sync order. Check console.");
      }
    }
  });
  