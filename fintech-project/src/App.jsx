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
  
  
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/howitworks" element={<HowItWorksPage />}></Route>
        <Route path="/admin" element={<AdminSignIn />}></Route>
        <Route path="/admin/home" element={{user} ? <AdminHome /> : <Navigate to={'/'} />}></Route>
        <Route path="/Register" element={!user ? <RegisterPage /> : <Navigate to='/' />}></Route>
        <Route path="/SignIn" element={!user ? <SigninPage /> : <Navigate to='/' />}></Route>
        <Route path="/" element={{user} ? <HomePage /> : <Navigate to='/signin' /> }></Route>
      <Route path="/Donation" element={{user} ? <DonationPage /> : <Navigate to='/' /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
