import React, { useState } from "react";
import { Link } from "react-router-dom";

function Design() {
  const [productType, setProductType] = useState("T-shirt");
  const [designFile, setDesignFile] = useState(null);
  const [designPreview, setDesignPreview] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDesignFile(file);
      setDesignPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="design-page">
      {/* Header Section */}
      <div className="design-header">
        <h2>Design Your Custom Product</h2>
        <p>Create something unique or upload your own design. It’s easy and fun!</p>
      </div>

      {/* Product Selection */}
      <div className="product-selection">
        <label htmlFor="product-type">Select Product:</label>
        <select
          id="product-type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="T-shirt">T-shirt</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Cap">Cap</option>
          <option value="Bag">Bag</option>
          <option value="Decorative Tag">Decorative Tag</option>
        </select>
      </div>

      {/* Design Area */}
      <div className="design-area">
        <h3>Create or Upload Your Design</h3>
        <div className="design-options">
          <div className="design-tool">
            <p>Use our design tool to create something unique:</p>
            <a
              href="https://www.canva.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Open Design Tool
            </a>
          </div>
          <div className="upload-design">
            <p>Or upload your own design:</p>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            {designPreview && (
              <div className="design-preview">
                <img src={designPreview} alt="Design Preview" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Customization Options */}
      <div className="customization-options">
        <h3>Customize Your Product</h3>
        <div className="options">
          <div className="color-picker">
            <label htmlFor="color">Choose Color:</label>
            <input type="color" id="color" defaultValue="#ffffff" />
          </div>
          <div className="size-selector">
            <label htmlFor="size">Select Size:</label>
            <select id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save and Order Options */}
      <div className="order-options">
        <button className="btn">Save Design</button>
        <Link to="/order-sample" className="btn">Order Sample</Link>
        <Link to="/checkout" className="btn">Place Order</Link>
      </div>
    </div>
  );
}

export default Design;