import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do AppContext
const AppContext = createContext();

// Criação do Provider
const Provider = ({ children }) => {
  const [globalState, setGlobalState] = useState(null);

  return (
    <AppContext.Provider value={ { globalState, setGlobalState } }>
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
