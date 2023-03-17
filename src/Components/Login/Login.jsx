import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import Logo from "../../olx-logo.png";
// import  firebase  from "../../firebase/config";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import RoundLoading from "../Loading/RoundLoading";

function Login() {
const emailRef = useRef()
const passwordRef = useRef()
const [loading,setLoading]=useState(false)
const navigate=useNavigate()
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { Firebase } = useContext(FirebaseContext);
const auth = getAuth(Firebase)
const handleLogin =(e) =>{
  e.preventDefault()
  if(emailRef.current.value.trim() === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value))){
    emailRef.current.classList.add('error-input')
  }else{
    emailRef.current.classList.remove('error-input')
  }
  if(passwordRef.current.value.trim() === ''){
    passwordRef.current.classList.add('error-input')
  }else{
    passwordRef.current.classList.remove('error-input')
  }
  if(emailRef.current.classList.contains('error-input') || passwordRef.current.classList.contains('error-input')){
    return
  }
  if(!loading){
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      alert(error.message)
    })
  }
}

  return (<>
  {loading && <RoundLoading/> }
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            ref={emailRef}

          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            ref={passwordRef}

           
          />
          <br />
          <br />
          <button className="login">{loading ? 'Loading...' : 'Login'}</button>
        </form>
        <button className="signup">       
            <Link to="/signup">Signup</Link>
        </button>
 
      </div> 
    </div>
    </>
  );
}

export default Login;
