import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/public/assets/2ncode-favicon.png" alt="2NCODE Logo" className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-white">2NCODE</span>
            </div>
            <p className="text-gray-400 italic">
            Creativity is the driving force behind innovation.
            That's why we embrace innovation to shape the future of digital transformation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                 IT Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

                <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                  <a href="mailto:contact@éncode.com" className="hover:text-indigo-400">
                    contact@2ncode.com
                  </a>
                  </li>
                  <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                  <a href="tel:+212 06 84 19 00 01" className="hover:text-indigo-400">
                   +212 06 84 19 00 01
                  </a>
                  </li>
                  <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-indigo-400" />
                  <a href="https://maps.google.com/?q=32.2903633117676,-9.23853302001953" target="_blank">
                     <span>Marrakech-Safi, Safi</span>
                  </a>
                  </li>
                </ul>
                <div className="mt-5 flex space-x-4">
                  <a href="https://www.linkedin.com/company/2ncode" className="text-indigo-400 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform transform hover:scale-125 bg-transparent border border-indigo-400 rounded-md p-1" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none"/>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.878 2.072-1.268 3.5-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
                  </svg>
                  </a>
                  <a href="https://www.twitter.com" className="text-indigo-400 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform transform hover:scale-125 bg-transparent border border-indigo-400 rounded-md p-1" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none"/>
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.128 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.835-.414.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z"/>
                  </svg>
                  </a>
                  <a href="https://www.facebook.com" className="text-indigo-400 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform transform hover:scale-125 bg-transparent border border-indigo-400 rounded-md p-1" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none"/>
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
                  </svg>
                  </a>
                  <a href="https://github.com/2NCODE" className="text-indigo-400 hover:text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform transform hover:scale-125 bg-transparent border border-indigo-400 rounded-md p-1" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none"/>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.585 8.2-6.082 8.2-11.384 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  </a>
                </div>
                </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-2 text-center">
          <p>&copy; {new Date().getFullYear()} 2NCODE. All rights reserved.</p>
          <div className="flex justify-center mt-2">
        <div className="flex justify-end mt-2">
            <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none fixed bottom-8 right-8"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            </button>
        </div>
            </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
