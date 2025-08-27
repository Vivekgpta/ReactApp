import  { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

function Login() {
  let {auth,login,logout}=useContext(AuthContext)
  return (<div className="page-container">
    <h1>Login Page</h1>
    <h3>Login Status:{auth?"You are Logged In":"You are Logged Out"}</h3>
    <button onClick={login} disabled={auth}>LOGIN</button>
    <button onClick={logout} disabled={!auth}>LOGOUT</button>
    </div>
  )
}

export default Login