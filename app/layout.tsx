'use client';

import { FC } from 'react';
import './globals.css';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <header className="fixed top-0 left-0 w-full bg-white text-black p-4 flex items-center justify-between z-50 shadow-md">
          <div className="flex items-center space-x-4">
            <img src="/images/loggo.png" alt="Abing's Darag Chicken Logo" className="h-12" /> {/* Logo */}
            <div className="hidden md:block text-lg font-bold">Abing's Darag Chicken</div> {/* Show only on medium and larger screens */}
          </div>
          <nav className="flex">
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
              <li><a href="#what-is-darag" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">About</a></li>
              <li><a href="#why-darag" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Benefits</a></li>
              <li><a href="#success-story" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Story</a></li>
              <li><a href="#contact" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">{children}</main> {/* Added padding to avoid content being hidden behind the fixed header */}
        <footer className="bg-red-600 text-white p-4 text-center">
          © 2024 Abing's Darag Chicken
        </footer>
      </body>
    </html>
  );
};

export default Layout;
