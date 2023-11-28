import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import i10 from '../components/10.png';
import NavbarWhite from '../components/NavbarWhite';
import './custom.css';

const SignInPage = () => {
  const Navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values
    const username = event.target.elements.usernameInput.value;
    const password = event.target.elements.passwordInput.value;

    // Check if any required field is empty
    if (!username || !password) {
      setMessage('Please enter a valid username and password');
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

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/users/login',
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
        setMessage('Login successful');
      } else {
        setMessage('Login failed');
      }
      console.log(axios.defaults.headers.common['Authorization']);
    } catch (error) {
      console.log('Error', error.message);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="bg-light">
      <NavbarWhite />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img src={i10} alt="" className="w-50 mt-5" />
        <form
          className="p-5 bg-light rounded shadow-lg needs-validation w-75 h-50 form-custom-style bg-white mt-2 mb-5"
          onSubmit={handleSubmit}
        >
          <div className='d-flex justify-content-center align-items-center w-100'>
          <h1 className="custom-h1-style">
            Sign In
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
              placeholder='please enter you username'
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
              placeholder='please enter your password'
            />
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
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary w-50 m-5">
              Submit
            </button>
          </div>

          <p className="text-center mt-2">
            Not Registered? <Link to={'/Register'}>Register Now </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
