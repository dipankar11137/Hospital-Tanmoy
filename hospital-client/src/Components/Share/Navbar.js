import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`https://boxberry.onrender.com/carBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [booking]);

  const handleBook = () => {
    navigate("/myOrders");
  };

  const menuItems = (
    <>
      <li className=" hover:text-orange-600">
        <Link to="/appointment">Book A Appointment</Link>
      </li>
      {user && (
        <li className=" hover:text-orange-600">
          <Link to="/myBooking">My Booking</Link>
        </li>
      )}
      <li className=" hover:text-orange-600">
        <Link to="/about">About</Link>
      </li>

      {user?.email === 'toymur15-14707@diu.edu.bd' && (
        <li className=" hover:text-orange-600">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="  navbar   text-black ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold lg:text-3xl  sm:text-sm text-amber-500"
        >
          <img className="h-12 mr-2" src="" alt="" />
          Logo/name
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:pr-36 ml-40">
        <ul className="menu menu-horizontal p-0 font-semibold">{menuItems}</ul>
      </div>
      {/* Image */}
      <div className="navbar-end">
        {user ? (
          <button className=" font-semibold mr-10 text-orange-600" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <ul className="mr-8">
            <li>
              <Link className="text-lg" to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
