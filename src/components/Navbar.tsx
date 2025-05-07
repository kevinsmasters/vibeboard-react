import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex gap-4 bg-gray-100 p-4">
    <Link to="/">Home</Link>
    <Link to="/board/new">Create New Board</Link>
  </nav>
);

export default Navbar;