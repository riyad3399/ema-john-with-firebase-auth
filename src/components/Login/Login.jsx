import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const { signInUser } = useContext(UserContext);

  const handelLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Login successful",{autoClose: 2000, theme: "dark"});
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

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
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
        </div>
        <p onClick={() => setShow(!show)}>
          {show ? <span>Show password</span> : <span>Hide password</span>}
        </p>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="toggol">
        New to Ema-jhon? <Link to="/signup">Create New Account</Link>
      </p>
      <p>{error}</p>
      <ToastContainer theme="dark" autoClose={ 2000} />
    </div>
  );
};

export default Login;
