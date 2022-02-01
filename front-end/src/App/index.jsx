import React from 'react';
import { Provider } from '../Provider';
import AppRoutes from '../Router/AppRoutes';
import './style.css';
import Navbar from '../Components/Navbar';

export default function App() {
  return (
    <Provider>
      <Navbar />
      <AppRoutes />
    </Provider>
  );
}
