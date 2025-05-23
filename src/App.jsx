import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import AdminPage from "./components/AdminPage";
import ProductForm from "./components/ProductForm"; // Import ProductForm for add/edit
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CheckoutForm from "./components/CheckoutPage"; // Import CheckoutForm
import Design from "./components/Design"; // Import the Design component
import { AuthProvider } from "./services/AuthContext";
import { CartProvider } from "./services/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/checkout" element={<CheckoutForm />} /> {/* Checkout Route */}
              <Route path="/design" element={<Design />} /> {/* Design Route */}

              {/* Admin Page (Protected Route) */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute role="ADMIN">
                    <AdminPage />
                  </ProtectedRoute>
                }
              />

              {/* Product Add/Edit Page */}
              <Route
                path="/add-product"
                element={
                  <ProtectedRoute role="ADMIN">
                    <ProductForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit-product/:id"
                element={
                  <ProtectedRoute role="ADMIN">
                    <ProductForm />
                  </ProtectedRoute>
                }
              />

              {/* Redirect unknown routes to Home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;