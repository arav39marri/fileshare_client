import { Link, NavLink } from "react-router-dom";

export default function Header({ theme, onToggleTheme }) {
  return (
    <div className="header">
      <Link to="/" className="brand">
        <strong>FileShare</strong>
        
      </Link>

      <div className="nav">
        <NavLink to="/">Upload</NavLink>
        <NavLink to="/download">Download</NavLink>
        <button className="button secondary" onClick={onToggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
