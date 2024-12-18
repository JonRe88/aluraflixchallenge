import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Aluraflix Logo" className="h-10" />
              <Video className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AluraFlix</span>
            </Link>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Made by Jony Reyes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}