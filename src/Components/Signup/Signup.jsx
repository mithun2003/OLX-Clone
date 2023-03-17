import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
import "./Signup.css";
import { getFirestore, collection, addDoc } from 'firebase/firestore'

// import Firebase from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
export default function Signup() {
  //   const history = useHistory();
  //   let [name, setName] = useState("");
  //   let [email, setEmail] = useState("");
  //   let [phone, setPhone] = useState("");
  //   let [password, setPassword] = useState("");
  //   let [loading,setLoading]=useState(false)
  //   const handleSubmit = (e) => {
  //     setLoading(true)
  //     e.preventDefault();
  //     Firebase.auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((result) => {
  //         result.user.updateProfile({ displayName: name }).then(() => {
  //           Firebase.firestore().collection("users").doc(result.user.uid).set({
  //             id: result.user.uid,
  //             name: name,
  //             phone: phone,
  //           });
  //         });
  //       })
  //       .then(() => {
  //         history.push("/login");
  //       });
  //   };
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { Firebase } = useContext(FirebaseContext);
  const auth = getAuth(Firebase);
  const firestore = getFirestore(Firebase)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loading)
    if (nameRef.current.value.trim() === "") {
      nameRef.current.classList.add("error-input");
    } else {
      nameRef.current.classList.remove("error-input");
    }
    if (
      emailRef.current.value.trim() === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailRef.current.value
      )
    ) {
      emailRef.current.classList.add("error-input");
    } else {
      emailRef.current.classList.remove("error-input");
    }
    if (phoneRef.current.value.trim() === "") {
      phoneRef.current.classList.add("error-input");
    } else {
      phoneRef.current.classList.remove("error-input");
    }
    if (
      passwordRef.current.value.trim() === "" ||
      passwordRef.current.value.trim().length < 5
    ) {
      passwordRef.current.classList.add("error-input");
    } else {
      passwordRef.current.classList.remove("error-input");
    }
    if (
      nameRef.current.classList.contains("error-input") ||
      emailRef.current.classList.contains("error-input") ||
      phoneRef.current.classList.contains("error-input") ||
      passwordRef.current.classList.contains("error-input")
    ) {
      return;
    }
    console.log(loading)
    if(!loading){
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log('success')
        updateProfile(result.user, {displayName: name})
        .then(() => {
          console.log("User profile updated")
          addDoc(collection(firestore, 'users'), {
            id: result.user.uid,
            name,
            phone
          })
          .then(() => {
            setLoading(false)
            navigate('/login')
          })
        })
     })
     .catch(error => {
      console.log(error.code)
      if(error.code.toString() == 'auth/email-already-in-use'){
        setLoading(false)
        emailRef.current.classList.add('error-input')
      }
     })
    }
  };
  return (
    <>
      <div>
        <div className="signupParentDiv">
          <img width="200px" height="200px" src={Logo} alt=""></img>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              ref={nameRef}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              ref={emailRef}
            />
            <br />
            <label>Phone</label>
            <br />
            <input
              className="input"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your number"
              ref={phoneRef}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password"
              ref={passwordRef}
            />
            <br />
            <br />
            <button className="signup1">
              {loading ? "Loading..." : "Signup"}
            </button>
          </form>
          <button className="login1">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </>
  );
}
