export default function Navbar({ links }) {
  return (
    <div className="wholeheader">
    <div className="headertitle">
      <h1 className="fancy">Michael Reickerd</h1>
      <nav className="navbar">
        <ul className="navbar-nav">{links.map((link) => link)}</ul>
      </nav>
    </div>
    <img className="headergraphic" src="public/giphy.gif" alt="room graphic" />
    </div>
  );
}
