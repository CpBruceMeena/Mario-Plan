const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case "LOGIN_ERROR":
      console.log('login failed');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return{
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signout Success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log("Signup success")
      return{
        ...state,
        authError: null
      }
    case 'SIGNUP_FAILED':
      console.log('Signup failed')
      return{
        ...state,
        authError: action.err.message
      }
    default:
      return state;
    }
}

export default authReducer
