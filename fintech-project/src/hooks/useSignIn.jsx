import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signIn = async (username, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();

    
    if(!response.ok){
        setLoading(false)
        setError('Incorrect credentials (Check your username and password)');
    }
    if(response.ok){

        //save the user to the local storage
        localStorage.setItem('user', JSON.stringify(json))

        //update the context
        dispatch({type: 'LOGIN',payload: json})

        setLoading(false)

        setError('Authentication successful');

    }
  };
  return {signIn, loading, error}
};
