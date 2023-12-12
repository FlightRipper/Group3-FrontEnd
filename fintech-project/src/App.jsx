import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import SigninPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import HowItWorksPage from './pages/HowItWorksPage';
import Navbar from './components/Navbar.jsx';
import { useState, useEffect } from 'react';
import SpinnerLoading from './components/SpinnerLoading.jsx';
import CampaignsPage from './pages/CampaignsPage.jsx';
import DonationPage from './pages/DonationPage';
import Footer from './components/Footer.jsx';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import StartCampaignPage from './pages/StartCampaignPage.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

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
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/donation"
            element={user ? <DonationPage /> : <Navigate to={'/'} />}
          />
          <Route path="/howitworks" element={<HowItWorksPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path='/StartCampaign' element={<MantineProvider>
            <Notifications />
            <StartCampaignPage />
            </MantineProvider>
          } />
        </Route>
        <Route
          path="/admin"
          element={!user ? <AdminSignIn /> : <Navigate to={'/'} />}
        />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
