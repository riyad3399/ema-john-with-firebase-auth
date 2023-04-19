import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [error, setError] = useState('');

    const handelSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password !== confirm) {
            setError('Your password Not Match')
            return
        }
        else if (password.length < 6) {
            setError('Password Must be 6 characters or longer')
        }
  };

  return (
    <div className="form-container">
      <h2 className="form-title"> Sign up </h2>
      <form onSubmit={handelSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="toggol">
        Already have an Account ? <Link to="/login">Login</Link>
          </p>
          <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
