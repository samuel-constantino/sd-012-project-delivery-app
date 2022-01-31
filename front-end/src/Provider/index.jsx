import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = ({ name, price }) => {
    setCart((prevCart) => {
      let quantity = 1;
      // Se o produto existir no carrinho, atualize sua quantidade
      if (prevCart[name]) {
        quantity += prevCart[name].quantity;
      }

      // Atualiza preço total
      setTotalPrice((prevTotalPrice) => prevTotalPrice + +price);

      return {
        ...prevCart,
        [name]: { price, quantity },
      };
    });
  };

  const removeToCart = ({ name, price }) => {
    setCart((prevCart) => {
      const quantity = prevCart[name].quantity - 1;

      // Atualiza preço total
      setTotalPrice((prevTotalPrice) => prevTotalPrice - +price);

      if (quantity === 0) {
        delete prevCart[name];
        return prevCart;
      }

      return {
        ...prevCart,
        [name]: { price, quantity },
      };
    });
  };

  return (
    <AppContext.Provider value={ { cart, totalPrice, addToCart, removeToCart } }>
      {children}
    </AppContext.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useCart = () => React.useContext(AppContext);

// Exports
export { Provider };
export { useCart };

// Prop validation
Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.Object),
}.isRequired;
