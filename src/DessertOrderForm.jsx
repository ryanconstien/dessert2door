import { useState } from "react";

function DessertOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    dessert: "",
    customization: "",
    address: "",
    deliveryTime: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "1rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Order Your Custom Dessert</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label htmlFor="name">Your Name</label><br />
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dessert">Dessert Type</label><br />
            <input name="dessert" value={formData.dessert} onChange={handleChange} placeholder="e.g., Chocolate Cake" required />
          </div>
          <div>
            <label htmlFor="customization">Customization Notes</label><br />
            <textarea name="customization" value={formData.customization} onChange={handleChange} placeholder="No nuts, gluten-free, extra frosting, etc." />
          </div>
          <div>
            <label htmlFor="address">Delivery Address</label><br />
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="deliveryTime">Preferred Delivery Time</label><br />
            <input type="datetime-local" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} required />
          </div>
          <button type="submit">Submit Order</button>
        </form>
      ) : (
        <div style={{ color: "green", fontWeight: "500" }}>Your dessert order has been submitted! 🍰</div>
      )}
    </div>
  );
}

export default DessertOrderForm;
