import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import ProductListing from './ProductListing';
import Header from './Header';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from "./CustomTheme";
import Cart from "./Cart";
import User from "./User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContext from "./DataContext";
import { useState } from 'react'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

function App() {
  const data = [{ /* your data here */ }];
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(item);

  };

  const updateCart = (item) => {
    // setCartItems([...cartItems, item]);
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex] = item;
    setCartItems(updatedCartItems);
  };

  return (
    <DataContext.Provider value={{ cartItems, addToCart, updateCart }}>
      <ChakraProvider theme={customTheme}>
        <Router>
          <div className="App">
            <Header />
            <Routes >
              <Route exact path="/" element={<ProductListing />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/user" element={<User />} />
              {/* <ProductListing />
            </Route> */}
              {/* <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/user">
              <User />
            </Route> */}
              {/* <Route exact path="/another">
              <AnotherComponent />
            </Route> */}
            </Routes >
          </div>
        </Router>
      </ChakraProvider>
    </DataContext.Provider>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* <Box bg='gray.100' p='4'> */ }