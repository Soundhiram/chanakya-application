import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderComponent: React.FC = () => {


  return (
      <div className="container nav_container">
        <Link to="/" className="nav_logo">
          <img src="/assets/img/logo.svg" alt="Navbar Logo" />
        </Link>
        </div>

      
  );
};

export default HeaderComponent;
