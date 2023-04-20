import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Header = () => {
  const { logOut, user } = useContext(UserContext);

  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success('Sign out successful', {autoClose: 2000, theme: "light"})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
      {user && (
        <>
          <span className="text-white">{user.email}</span> <button onClick={handelLogout}>Sign Out</button>
        </>
      )}
      <ToastContainer theme="dark" autoClose={2000}></ToastContainer>
    </nav>
  );
};

export default Header;
