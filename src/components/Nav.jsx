import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/create">Create</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
}
