import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../../../../assets/logo/LOGOr.png"; // for light mode
import LogoDark from "../../../../assets/logo/LOGON.png"; // for dark mode

export default function Logo({ width, height }) {
  return (
    <div>
      <Link to="/">
        {/* Light mode logo */}
        <img
          src={LogoLight}
          alt="Logo Light"
          width={width}
          height={height}
          className="block dark:hidden"
        />
        {/* Dark mode logo */}
        <img
          src={LogoDark}
          alt="Logo Dark"
          width={width}
          height={height}
          className="hidden dark:block"
        />
      </Link>
    </div>
  );
}
