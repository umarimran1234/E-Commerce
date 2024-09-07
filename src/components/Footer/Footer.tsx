import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-8">
          {/* First Section - About Us */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 leading-relaxed">
              We are a leading company providing top-notch services and
              solutions to help you grow your business. Our expertise in various
              domains ensures you always stay ahead of the curve.
            </p>
          </div>

          {/* List Section 1 - Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 2 - Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 3 - Support */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* List Section 4 - Legal */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Last Section - Available Here */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Available Here</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-3xl text-gray-400 hover:text-white">
                <FaGooglePlay />
              </a>
              <a href="#" className="text-3xl text-gray-400 hover:text-white">
                <FaApple />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Codesphare Innovations. All rights
            reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
