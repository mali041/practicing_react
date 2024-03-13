import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company</p>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                exact
                className="hover:text-gray-400"
                activeClassName="text-gray-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-400"
                activeClassName="text-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-400"
                activeClassName="text-gray-400"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
