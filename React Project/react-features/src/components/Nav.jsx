import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/state">State</NavLink>
      <NavLink to="/effects">Effects</NavLink>
      <NavLink to="/forms">Forms</NavLink>
      <NavLink to="/context">Context</NavLink>
      <NavLink to="/hooks">Hooks</NavLink>
      <NavLink to="/performance">Performance</NavLink>
    </nav>
  );
}
