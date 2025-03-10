import React, { useState } from "react";
import { Link } from "react-router-dom";

function Design() {
  const [designFile, setDesignFile] = useState(null);
  const [designPreview, setDesignPreview] = useState(null);
  const [colors, setColors] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sizes, setSizes] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDesignFile(file);
      setDesignPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Design File:", designFile);
    console.log("Colors:", colors);
    console.log("Quantity:", quantity);
    console.log("Sizes:", sizes);
  };

  return (
    <div className="design-page">
      {/* Header Section */}
      <div className="design-header">
        <h2>Design Your Custom Product</h2>
        <p>Upload your design and provide details to place your order.</p>
      </div>

      {/* Design Upload Section */}
      <div className="design-area">
        <h3>Create or Upload Your Design</h3>
        <div className="design-options">
          {/* Link to Canva */}
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

          {/* Upload Design */}
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

      {/* Order Details Form */}
      <form className="order-details" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="colors">Colors:</label>
          <input
            type="text"
            id="colors"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            placeholder="Enter colors (e.g., Red, Blue)"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sizes">Sizes:</label>
          <input
            type="text"
            id="sizes"
            value={sizes}
            onChange={(e) => setSizes(e.target.value)}
            placeholder="Enter sizes (e.g., S, M, L)"
            required
          />
        </div>

        {/* Save and Order Options */}
        <div className="order-options">
          <button type="submit" className="btn">
            Save Design
          </button>
          <Link to="/order-sample" className="btn">
            Order Sample
          </Link>
          <Link to="/checkout" className="btn">
            Place Order
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Design;
