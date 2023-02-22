import ironhackLogoXs from "../images/ironhack-logo-xs.png";
import menuTopXs from "../images/menu-top-xs.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={ironhackLogoXs} alt="Ironhack logo" />
      <img src={menuTopXs} alt="menu Top" />
    </div>
  );
};

export default Navbar;
