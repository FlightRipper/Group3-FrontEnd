import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import SigninPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import HowItWorksPage from './pages/HowItWorksPage';
import DonationPage from './pages/DonationPage';
import { useState, useEffect } from 'react';
import SpinnerLoading from './components/SpinnerLoading.jsx';
import io from 'socket.io-client';
import CampaignsPage from './pages/CampaignsPage.jsx';

const socket = io('http://localhost:5000');

function App() {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // we used useState here because if we use the user in the routes without reserving the promise it will get a null reading so thats why i used the use effect
  // to solve this resolve the promise and got a good reading of the object
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => resolve());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <SpinnerLoading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/howitworks" element={<HowItWorksPage />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route
          path="/admin/home"
          element={
            user && !user.hasOwnProperty('userType') ? (
              <AdminDashboard />
            ) : (
              <Navigate to={'/'} />
            )
          }
        />
        <Route
          path="/Register"
          element={!user ? <RegisterPage /> : <Navigate to={'/'} />}
        />
        <Route
          path="/SignIn"
          element={!user ? <SigninPage /> : <Navigate to={'/'} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Donation"
          element={
            user &&
            (user.userType === 'projectOwner' || user.userType === 'donor') ? (
              <DonationPage />
            ) : (
              <Navigate to={'/'} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
