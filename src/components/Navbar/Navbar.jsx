import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const hmLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png";

  return (
    <header className="header">
      <div className="header__logo">
        <img src={hmLogo} alt="H&M Logo" />
      </div>
      <nav className="header__navigation">
        <ul className="header__menu">
          <li className="header__menu-item">
            <a href="https://www2.hm.com/">Home</a>
          </li>
          <li className="header__menu-item">
            <a href="https://www2.hm.com/en_in/customer-service/shopping-at-hm/store-locator">
              Stores
            </a>
          </li>
          <li className="header__menu-item">
            <a href="https://www2.hm.com/en_in/customer-service.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
