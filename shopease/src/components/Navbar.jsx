import { Link } from "react-router-dom";

function Navbar() {
  return (
     <nav className="bg-red-500 flex gap-12 items-center p-4 text-white justify-end">
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/featured">Featured</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navbar;