import React from 'react';
import BurgerBuilder from '../BurgerBuilder';
import OrderPage from '../OrderPage';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BurgerBuilder/>
      <OrderPage/>
    </div>
  );
}

export default App;
