import hamburgerLogo from "../../public/studept-logo.jpg";

export default function MainNav(props) {
  return (
    <nav className="navbar">
      <div>
        <img src={hamburgerLogo} alt="Hamburger Logo" />
        <span className="navbar--menu">Menu</span>
      </div>
      {/* <span className="lt-bold">Navbar</span> */}
    </nav>
  );
}
