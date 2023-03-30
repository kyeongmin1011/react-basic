import {Link} from "react-router-dom";

const LinkPage = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs">Blogs</Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default LinkPage