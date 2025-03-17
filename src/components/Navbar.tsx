import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/assets/Logo.png" alt="Logo" className="h-10 w-32" />
            </div>
          
            <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600">Process</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-lg">
              Get Started
            </button>
            </div>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
                  <h2 className="text-2xl mb-6 text-gray-800 font-semibold">Get started with us</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Message sent successfully');
                      setIsOpen(false);
                    }}
                  >
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Joe Smith"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="joe@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="Inquiry about services"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        placeholder="I would like to know more about your services..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition-colors shadow-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Process</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
