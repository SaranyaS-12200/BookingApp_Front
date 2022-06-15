
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navContianer'>
      <span className='logo'>réservation-de-résidence</span>
      <div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar

