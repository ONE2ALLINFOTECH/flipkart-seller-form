import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    gstNumber: "",
    address: "",
    productImage: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "productImage") {
      setFormData({ ...formData, productImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    try {
      const res = await axios.post("https://flipkart-seller-form.onrender.com/api/seller", data);
      alert("Seller Registered Successfully!");
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="shopName" placeholder="Shop Name" onChange={handleChange} required />
      <input name="gstNumber" placeholder="GST Number" onChange={handleChange} required />
      <textarea name="address" placeholder="Address" onChange={handleChange} required />
      <input type="file" name="productImage" onChange={handleChange} required />
      <button type="submit">Register as Seller</button>
    </form>
  );
}

export default App;
