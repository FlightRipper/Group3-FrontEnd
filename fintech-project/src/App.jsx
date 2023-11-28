import './App.css';
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import SigninPage from './pages/SignInPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { useState } from 'react';
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:5000/');


function App() {

  const Layout = () => {
    return (
      <>
      <Navbar />
      <Outlet />
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<RegisterPage />}></Route>
        <Route path='/SignIn' element={<SigninPage />}></Route>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
