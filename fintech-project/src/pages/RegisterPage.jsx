import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i10 from '../components/10.png';
import NavbarWhite from '../components/NavbarWhite';
import './custom.css';

const RegisterPage = () => {
  const Navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values
    const username = event.target.elements.usernameInput.value;
    const password = event.target.elements.passwordInput.value;
    const userType = event.target.elements.userType.value;
    const email = event.target.elements.emailInput.value;

    // Check if any required field is empty
    if (!username || !password || !userType || !email) {
      setMessage('Please enter all the required fields');
      return;
    }

    if (!username) {
      setMessage('Enter a valid username');
      return;
    }
    if (!password) {
      setMessage('Enter a valid password');
      return;
    }
    if (!email) {
      setMessage('Enter a valid email');
      return;
    }
    if (!userType) {
      setMessage('Please specify the user type');
      return;
    }

    const userData = {
      username,
      password,
      userType,
      email,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/users/register',
        userData
      );
      console.log(response);
      event.target.reset();
      //set the token to the headers
      axios.defaults.headers.common['Authorization'] = response.data.token;

      if (
        response.data.token === axios.defaults.headers.common['Authorization']
      ) {
        // Navigate to the new page
        Navigate('/');
        setMessage('Registration successful');
      } else {
        setMessage('Registration failed');
      }
      console.log(axios.defaults.headers.common['Authorization']);
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong please check all the inputs');
    }
  };

  return (
    <div className="bg-light">
      <NavbarWhite />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img src={i10} alt="" className="w-50 mt-5" />
        <form
          className="p-5 bg-light rounded shadow-lg needs-validation w-75 h-50 bg-white rounded mt-2 mb-5"
          onSubmit={handleSubmit}
        >
          <div className='d-flex justify-content-center align-items-center'>
          <h1 className="custom-h1-style">
            Register
          </h1>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label mt-3 custom-label-headers-for-inputs">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              required
              placeholder='Please enter a username'

            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label custom-label-headers-for-inputs" >
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="emailInput"
              required
              placeholder='Please enter your email'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label custom-label-headers-for-inputs">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              required
              placeholder='Please enter your password'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userType" className="form-label custom-label-headers-for-inputs">
              User Type
            </label>
            <select id="userType" className="form-select custom-form-select-register" required>
              <option selected>What are you aiming to?</option>
              <option value="projectOwner">A Project Owner (Can create campaings to gather donations)</option>
              <option value="donor">A Donor (Can Explore campaings and donate securely)</option>
            </select>
          </div>
          {message && (
            <div
              className={
                message.includes('success')
                  ? 'form-group text-success'
                  : 'form-group text-danger'
              }
            >
              <span>{message}</span>
            </div>
          )}
          <div class="d-flex justify-content-center mt-5">
            <button type="submit" class="btn btn-primary w-50 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
