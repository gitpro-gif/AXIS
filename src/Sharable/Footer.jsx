import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl text-green-500 font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl text-green-500 font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl text-green-500 font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Job Listings</a></li>
              <li><a href="#" className="hover:text-gray-400">Resume Review</a></li>
              <li><a href="#" className="hover:text-gray-400">Skill Roadmaps</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl text-green-500 font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Column 5 (Social Media) */}
          <div>
            <h3 className="text-2xl text-green-500 font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
