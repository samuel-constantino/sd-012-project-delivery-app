import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const statesPkg = {
    cart,
    setCart,
    allOrders,
    setAllOrders,
    deliveryInfo,
    setDeliveryInfo,
    checkoutCart,
    setCheckoutCart,
    totalPrice,
    setTotalPrice,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppContext.Provider value={ statesPkg }>
      {children}
    </AppContext.Provider>
  );
};

// Simplificação do uso posterior do useContext
const useGlobalState = () => React.useContext(AppContext);

// Exports
export { Provider };
export { useGlobalState };

// Prop validation
Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.Object),
}.isRequired;
