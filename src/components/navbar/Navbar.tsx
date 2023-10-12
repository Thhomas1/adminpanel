import "./navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notification.svg" alt="" /> 
        </div>
        <div className="user"></div>
        <img src=".settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}
// 20:51

export default Navbar;