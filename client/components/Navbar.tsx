import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand">HorseRaceS</div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="player">
                <div className="nav-link">Player</div>
              </Link>
              <Link to="horse">
                <div className="nav-link">Horse</div>
              </Link>
              <Link to="race">
               <div className="nav-link">Race</div>
              </Link>
              <Link to="bet">
               <div className="nav-link">Bet</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;