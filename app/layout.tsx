'use client';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { FC } from 'react';
import './globals.css';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gray-100 font-sans flex flex-col">
        <header className="fixed top-0 left-0 w-full bg-white text-black p-2 md:p-4 flex items-center justify-between z-50 shadow-md">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Image
              src="/images/loggo.png"
              alt="Abing's Darag Chicken Logo"
              width={40} // Reduced size for mobile
              height={40} // Reduced size for mobile
            />
            {/* Ensure company name is always visible */}
            <div className="text-sm md:text-lg font-bold pl-4">
              Abing&apos;s Darag Chicken
            </div>
          </div>
          {/* Navigation menu hidden on mobile devices */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2 md:space-x-4">
              <li>
                <a
                  href="#about"
                  className="text-xs md:text-base hover:bg-red-600 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-lg transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-xs md:text-base hover:bg-red-600 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-lg transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-xs md:text-base hover:bg-red-600 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-lg transition-colors"
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  href="#suppliers"
                  className="text-xs md:text-base hover:bg-red-600 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-lg transition-colors"
                >
                  Suppliers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs md:text-base hover:bg-red-600 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-lg transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow pt-20 md:pt-16">{children}</main>
        <Navigation />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
