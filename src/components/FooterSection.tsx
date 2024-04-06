import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Gourmet Delights</h3>
          <p className="text-gray-400">
            Serving the finest cuisine since 2010.
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            123 Main Street <br />
            Cityville, State 12345 <br />
            Phone: (123) 456-7890 <br />
            Email: info@restaurant.com
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Gourmet Delights. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
