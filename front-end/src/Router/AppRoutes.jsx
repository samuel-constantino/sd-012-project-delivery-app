import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Common
import Login from '../Pages/CommonPages/Login';
import Signup from '../Pages/CommonPages/Signup';
import NotFound from '../Pages/NotFound';

// Customers
import Checkout from '../Pages/CustomerPages/Checkout';
import CustomerOrderDetails from '../Pages/CustomerPages/CustomerOrderDetails';
import CustomerOrders from '../Pages/CustomerPages/CustomerOrders';
import Products from '../Pages/CustomerPages/Products';

// Sellers
import SellerOrderDetails from '../Pages/SellerPages/SellerOrderDetails';
import SellerOrders from '../Pages/SellerPages/SellerOrders';

// Admin
import Dashboard from '../Pages/AdminPages/Dashboard';

export default function AppRoutes() {
  return (

    <BrowserRouter>
      <Routes>

        {/* Common */}
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Signup /> } />

        {/* Customer */}
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
        <Route exact path="/customer/orders" element={ <CustomerOrders /> } />

        {/* Seller */}
        <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />

        {/* Admin */}
        <Route exact path="/admin/manage" element={ <Dashboard /> } />

        {/* Default */}
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="*" element={ <NotFound /> } />

      </Routes>
    </BrowserRouter>
  );
}
