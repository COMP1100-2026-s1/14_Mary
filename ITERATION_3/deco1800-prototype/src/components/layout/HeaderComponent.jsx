import { Link } from "react-router-dom";
import shears from "./favicon.svg";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-gradient" style={{backgroundColor: "#52257b"}}>
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/home">
                <span style={{fontStyle: "italic", fontWeight: "bold"}}>Course Pruner - UQ</span>
                <img src={shears} style={{height: "2rem", paddingLeft: "1rem"}}></img>
            </Link>

            {/* Hamburger */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible nav */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><Link className="nav-link text-light" to="/home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/courses">Courses</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/degrees">Degrees</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link text-light" to="/home">Interviews</Link></li>
                    <li className="nav-item"><Link className="nav-link text-light" to="/home">Reviews</Link></li> */}
                </ul>
            </div>
          </div>
      </nav>
    )    
}

export default Header