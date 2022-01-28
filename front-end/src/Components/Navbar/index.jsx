import React from 'react';

export default function Navbar() {
  return (
      <nav>
        <p
        data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </p>

        <div
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </div>
      
        <p
        data-testid="customer_products__element-navbar-user-full-name"
        value={user}
        >
          {user}
        </p>

        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={}
        >
          Sair
        </button>
     </nav>
  );
}