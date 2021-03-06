import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="nav-link text-light" href="/">
        Search
      </a>
      <a className="nav-link text-light" href="/books/saved">
        Saved
      </a>

    </nav>
  );
}

export default Nav;
