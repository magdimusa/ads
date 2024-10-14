import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, Switch } from "@mui/material";
import { Search, Phone, AccessTime } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <a href="#">Asosiy</a>
          </li>
          <li className="navbar__menu-item">
            <a href="#">Xizmatlar</a>
            <ul className="navbar__dropdown">{/* Dropdown items here */}</ul>
          </li>
          <li className="navbar__menu-item">
            <NavLink to={"about"}>Biz haqimizda</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to={"/contact"}>Kontakt</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink>Vakansiya</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink>Sharhlar</NavLink>
          </li>
        </ul>

        <div className="navbar__search">
          <input
            type="text"
            placeholder="LED ekranlarda reklama"
            className="navbar__search-input"
          />
          <button className="navbar__search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="navbar__info">
          <div className="navbar__time">
            <i className="fa fa-clock-o"></i> 9:00-17:00 du-ju
          </div>
          <div className="navbar__phone">
            <i className="fa fa-phone"></i> +998 55 201 90 10
          </div>
        </div>

        <div className="navbar__icons">
          <button className="navbar__toggle-theme">
            <i className="fa fa-sun-o"></i>
          </button>
          <button className="navbar__favorites">
            <i className="fa fa-heart-o"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
