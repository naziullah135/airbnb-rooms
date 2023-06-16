import React from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/placeholder.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <img width={102} height={32} src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-center btn btn-ghost btn-circle">
        <div className="form-control">
          <div className="inline-flex align-middle ">
            <button>
              <div>Start your search</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "12px",
                    width: "12px",
                    stroke: "currentcolor",
                    overflow: "visible",
                  }}
                >
                  <path
                    fill="none"
                    d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-end ali">
        <div className="dropdown flex  dropdown-end">
          <div className="align-middle">Airbnb your home</div>
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} alt="avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
