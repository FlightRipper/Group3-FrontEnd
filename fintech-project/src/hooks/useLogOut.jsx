import { useAuthContext } from "./useAuthContext"

export const useLogOut = () =>{
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        //remove the user from the storage first
        localStorage.removeItem('user')

        //dispatch the logout action from the auth context
        dispatch({type: 'LOGOUT'})

    }
    return {logout}
}

//if you want to use this hook in a navbar or a page all you have to do is create a function to hadle this action on click and of cousrse
// importing the hook as simple as that it will delete the token from the local storage and you will be logged out because you dont have
// a token in the local storage
// const { logout } = useLogOut()

// const handleClick = () => {
//     logout()
// }