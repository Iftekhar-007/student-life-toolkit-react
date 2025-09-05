import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="text-xl">
        Student Toolkit
      </NavLink>
    </div>
  );
};

export default Logo;
