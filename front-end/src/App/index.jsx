import React from 'react';
import { Provider } from '../Provider';
import AppRoutes from '../Router/AppRoutes';
import './style.css';

export default function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}
