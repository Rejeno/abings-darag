'use client';

import Image from 'next/image';
import { FC } from 'react';
import './globals.css';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <header className="fixed top-0 left-0 w-full bg-white text-black p-4 flex items-center justify-between z-50 shadow-md">
          <div className="flex items-center space-x-4">
          <Image src="/images/loggo.png" alt="Abing's Darag Chicken Logo" width={48} height={48} /> {/* Logo */}
            <div className="text-lg font-bold hidden md:block">Abing&apos;s Darag Chicken</div> {/* Hide on small screens */}
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#what-is-darag" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">About</a></li>
              <li><a href="#why-darag" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Benefits</a></li>
              <li><a href="#success-story" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Story</a></li>
              <li><a href="#suppliers" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Suppliers</a></li>
              <li><a href="#contact" className="hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">{children}</main> {/* Added padding to avoid content being hidden behind the fixed header */}
        <footer className="bg-red-600 text-white p-4 text-center">
          © 2024 Abing&apos;s Darag Chicken
        </footer>
      </body>
    </html>
  );
};

export default Layout;
