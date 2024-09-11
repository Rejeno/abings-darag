import React, { useState } from "react";
import { FaBook, FaBoxes, FaEnvelope, FaInfoCircle, FaStar } from "react-icons/fa";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  sectionId: string;
}

const Navigation: React.FC = () => {
  const Menus: MenuItem[] = [
    { name: "About", icon: <FaInfoCircle />, sectionId: "about" },
    { name: "Benefits", icon: <FaStar />, sectionId: "benefits" },
    { name: "Story", icon: <FaBook />, sectionId: "story" },
    { name: "Suppliers", icon: <FaBoxes />, sectionId: "suppliers" },
    { name: "Contact", icon: <FaEnvelope />, sectionId: "contact" },
  ];

  const [active, setActive] = useState<number>(0);

  const handleClick = (index: number, sectionId: string) => {
    setActive(index);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-white px-2 py-2 rounded-t-xl shadow-lg z-50 sm:hidden">
      <ul className="flex items-center justify-between">
        {/* Menu items */}
        {Menus.map((menu, i) => (
          <li key={i} className="flex flex-col items-center w-full">
            <a
              className="flex flex-col items-center justify-center pb-2 pt-2 cursor-pointer" // Removed top padding and added bottom padding
              onClick={() => handleClick(i, menu.sectionId)}
            >
              {/* Icon */}
              <span
                className={`text-xl p-1 transition-all duration-300 ${
                  i === active
                    ? "text-red-500 glow" // Active state with glow effect
                    : "text-gray-500"
                }`}
              >
                {menu.icon}
              </span>

              {/* Always visible text */}
              <span
                className={`text-xs font-semibold mt-1 transition-all duration-300 ${
                  i === active ? "text-green-500" : "text-gray-500"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
