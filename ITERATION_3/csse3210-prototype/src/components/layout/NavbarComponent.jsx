

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    {/* Logo + Home Button Here */}
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        Website Name Here
                    </a>

                    {/* Rest of the buttons here; Placed inside a collapsible section */}
                    {/* Collapse-Open Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Contents of the collapsed section */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Page 1</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Page 2</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>

                </div>        
            </nav>
        </>
    )
}

export default Navbar