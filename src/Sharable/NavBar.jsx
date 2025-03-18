import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-green-500 text-3xl font-bold font-Inter">
          Tech<span className="font-Inter text-white">Udaan</span>
        </Link>

        
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="hover:text-green-500" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-500" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
