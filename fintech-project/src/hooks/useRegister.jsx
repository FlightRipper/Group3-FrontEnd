import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (username, email, password, userType) => {
    setLoading(true);
    setError(null);

    const response = await fetch('http://localhost:5000/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, userType }),
    });
    const json = await response.json();

    
    if(!response.ok){
        setLoading(false)
        setError('Registration failed');
    }
    if(response.ok){

        //save the user to the local storage
        localStorage.setItem('user', JSON.stringify(json))

        //update the context
        dispatch({type: 'LOGIN',payload: json})

        setLoading(false)

        setError('Registration successful')
    }
  };
  return {register, loading, error}
};
