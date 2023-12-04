import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import SigninPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminHome from './pages/admin/AdminHome';
import HowItWorksPage from './pages/HowItWorksPage';
import DonationPage from './pages/DonationPage';
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:5000/');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/howitworks" element={<HowItWorksPage />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/SignIn" element={<SigninPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Donation" element={<DonationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
