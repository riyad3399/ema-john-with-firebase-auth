import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [error, setError] = useState('');

  const { signInUser } = useContext(UserContext);
  

  const handelLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast('Login successful')
        setError('')
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
        setSuccess('')
    })

  }


  return (
    <div className="form-container">
      <h2 className="form-title"> Login </h2>
      <form onSubmit={handelLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="toggol">
        New to Ema-jhon? <Link to="/signup">Create New Account</Link>
      </p>
      <p>{error}</p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
