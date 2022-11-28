import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import Single from './pages/Single';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:itemId" element={<Single />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* <Route path='*' element={<Navigate to='/not-found'/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
