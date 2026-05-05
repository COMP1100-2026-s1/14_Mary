import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">UQ Course Information Pad</Link>

            {/* Hamburger */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible nav */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/home">Templates</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/home">Applicants</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/home">Interviews</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/home">Reviews</Link></li>
                </ul>
            </div>
          </div>
      </nav>
    )    
}

export default Header