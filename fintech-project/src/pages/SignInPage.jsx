import { useState } from 'react';
import { Link } from 'react-router-dom';
import i10 from '../components/10.png';
import NavbarWhite from '../components/NavbarWhite';
import './custom.css';
import { useSignIn } from '../hooks/useSignIn';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error, loading } = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values from the signIn hook
    await signIn(username, password);
  };
  return (
    <div className="bg-light">
      <NavbarWhite />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img src={i10} alt="" className="w-50 mt-5" />
        <form
          className="p-5 bg-light rounded shadow-lg needs-validation w-75 h-50 bg-white rounded mt-2 mb-3"
          onSubmit={handleSubmit}
        >
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="custom-h1-style">Sign In</h1>
          </div>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label mt-3 custom-label-headers-for-inputs"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Please enter a username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label custom-label-headers-for-inputs"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              required
              placeholder="Please enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          <div id="passwordHelpBlock" className="form-text opacity-50 w-100 d-none">
            Your password must be 8-20 characters long, contain letters and
            numbers and special characters, and must not contain spaces, or
            emojis.
          </div>
          </div>
          {error && (
            <div
              className={
                error.includes('success')
                  ? 'form-group text-success'
                  : 'form-group text-danger'
              }
            >
              <span>{error}</span>
            </div>
          )}
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn btn-primary w-50"
              disabled={loading}
            >
              Submit
            </button>
          </div>
          <div className='d-flex justify-content-center mt-5 w-100'>
          <h6>Not Registered?<Link to={'/register'} > Register Now</Link></h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
