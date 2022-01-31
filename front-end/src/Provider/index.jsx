import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const statesPkg = {
    checkoutCart,
    setCheckoutCart,
    allOrders,
    setAllOrders,
    deliveryDetails,
    setDeliveryDetails,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
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
