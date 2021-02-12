const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Weirdo Cafe</h1>
			<ul className="links">
				<li><a href="/">Home</a></li>
				<li><a href="/create">Create</a></li>
			</ul>
			{/* <div className="links">
				<a href="/">Home</a>
				<a href="/create">Create</a>
			</div> */}

		</nav>
	);
}

export default Navbar;