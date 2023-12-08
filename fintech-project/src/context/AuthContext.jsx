import { createContext, useReducer,useEffect } from "react";
import axios from 'axios'


export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return { user: action.payload}
    case 'LOGOUT' :
      return {user : null}
    default :
    return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user:null
  })
  
  useEffect(() => {
    //we use the parse because its saved as json in the local storage and we want it as an object 
    //we check for a user if there a user we fire a dispatch action to update the auth context state
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
      dispatch({type: 'LOGIN', payload: user});
    }

    if (user && user.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
     }

  },[])
  

  console.log('Auth Context state:', state);

  return(
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}