// src/Form.js
import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

function Form() {
  const initialFormData = {
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log('Form data submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormClear = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <div className="form-container">
      <h2>New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className={formData.name ? 'active' : ''}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className={formData.description ? 'active' : ''}>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className={formData.category ? 'active' : ''}>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className={formData.quantity ? 'active' : ''}>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className={formData.price ? 'active' : ''}>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormClear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
