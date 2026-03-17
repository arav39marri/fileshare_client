import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 md:order-2">
          <Link to="/privacy-policy" className="text-sm leading-6 text-gray-400 hover:text-white font-body transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm leading-6 text-gray-400 hover:text-white font-body transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/about" className="text-sm leading-6 text-gray-400 hover:text-white font-body transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm leading-6 text-gray-400 hover:text-white font-body transition-colors">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 font-body">
            &copy; {new Date().getFullYear()} FileShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
