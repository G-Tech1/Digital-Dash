import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Digital Dash
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">
                Bandwidth Monitor Tool
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="MyData">
                My Performance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="accounts/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="accounts/login">
                Log In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="accounts/logout">
                Log Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
