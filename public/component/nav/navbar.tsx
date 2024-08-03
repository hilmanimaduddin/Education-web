export default function Navbar() {
  function toggleNavbar() {
    const navbar: any = document.querySelector(".navbar-collapse");
    navbar.classList.toggle("show");
    navbar.classList.toggle("transition");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Go Green!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon">
            <img src="./img/svg/nav.svg" alt="nav" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="program">
                Program
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about-me">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
