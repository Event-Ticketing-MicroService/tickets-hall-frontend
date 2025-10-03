import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../../assets/logo/LOGOr.png"; // for light mode
import LogoDark from "../../../assets/logo/LOGON.png"; // for dark mode

export default function Logo() {
  return (
    <div>
      <Link to="/">
        {/* Light mode logo */}
        <img
          src={LogoLight}
          alt="Logo Light"
          width="60"
          height="30"
          className="block dark:hidden"
        />
        {/* Dark mode logo */}
        <img
          src={LogoDark}
          alt="Logo Dark"
          width="60"
          height="30"
          className="hidden dark:block"
        />
      </Link>
    </div>
  );
}
