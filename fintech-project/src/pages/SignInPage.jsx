import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import i10 from '../components/10.png';
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
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <img src={i10} alt="" className="w-50 mt-5" />
      <form
        className="p-5 bg-light rounded shadow-lg needs-validation w-75 h-50 mt-5 m-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            required
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

        <p className="text-center mt-5">
          Not registered? <Link to={'/Register'}>register Now </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
