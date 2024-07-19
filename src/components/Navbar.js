import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useMainContext } from "../context/MainContext";
import { HomePage } from "../pages/HomePage";
import { HamburgurMenuList } from "./HamburgurMenuList/HamburgurMenuList";
const Navbar = () => {
  const location = useLocation();
  const { setSearchInput } = useMainContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="flex-row nav-name">
          {isOpen ? (
            <MdCancel
              className="hamburgur-icon"
              onClick={() => setIsOpen((prevStatus) => !prevStatus)}
            />
          ) : (
            <FiMenu
              className="hamburgur-icon"
              onClick={() => setIsOpen((prevStatus) => !prevStatus)}
            />
          )}

          <div>
            <Link to="/" className="link link-color" element={<HomePage />}>
              <div
                className="navbar-title"
                style={{
                  color: "var(--light-green-color)",
                  textDecoration: "none",
                }}
              >
                IVideo
              </div>
            </Link>
          </div>
        </div>

        {location.pathname === "/video" && (
          <div className="search-input-container ">
            <div className="search flex-row-only">
              <BsSearch size={27} color="var(--green-color)" />
              <input
                className="search-input"
                type="text"
                placeholder="Explore..."
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        )}
        <Link to="/login" className="flex-col login-nav">
          <FaUserAlt size={27} color="var(--green-color)" />
        </Link>
        {isOpen && (
          <HamburgurMenuList
            className="hamburgur-display"
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};
export default Navbar;
