import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/signup" element={ <Signup /> } />

        {/* Customer */}
        <Route exact path="/checkout" element={ <Checkout /> } />
        <Route exact path="/order-details/:id" element={ <CustomerOrderDetails /> } />
        <Route exact path="/orders" element={ <CustomerOrders /> } />
        <Route exact path="/customer/products" element={ <Products /> } />

        {/* Seller */}
        <Route exact path="/s/order-details/:id" element={ <SellerOrderDetails /> } />
        <Route exact path="/s/orders" element={ <SellerOrders /> } />

        {/* Admin */}
        <Route exact path="/dashboard" element={ <Dashboard /> } />

        {/* Default */}
        {/* <Navigate replace to="/products" /> */}
        {/* <Route element={ <Navigate replace to="/products" /> } /> */}
        <Route element={ <NotFound /> } />

      </Routes>
    </BrowserRouter>
  );
}
