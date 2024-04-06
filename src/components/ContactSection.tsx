// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-8 font-display">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <form className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 font-body"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:ml-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 font-display">
              Contact Information
            </h3>
            <p className="mb-4 font-body">
              123 Main Street
              <br />
              Cityville, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@restaurant.com
            </p>
            <h3 className="text-2xl font-semibold mb-4 font-display">
              Opening Hours
            </h3>
            <p className="font-body">
              Monday - Friday: 11 AM - 10 PM
              <br />
              Saturday: 12 PM - 11 PM
              <br />
              Sunday: 12 PM - 9 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
