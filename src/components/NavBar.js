import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "selected nav-link" : "not nav-link"}
                       aria-current="page"
                       to="/blogs">Blogs</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar