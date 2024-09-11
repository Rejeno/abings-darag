import React, { useState } from "react";
import { FaBook, FaBoxes, FaEnvelope, FaInfoCircle, FaStar } from "react-icons/fa";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  translateX: number;
  sectionId: string;
}

const Navigation: React.FC = () => {
  const Menus: MenuItem[] = [
    { name: "About", icon: <FaInfoCircle />, translateX: 4, sectionId: "about" },
    { name: "Benefits", icon: <FaStar />, translateX: 80, sectionId: "benefits" },
    { name: "Story", icon: <FaBook />, translateX: 144, sectionId: "story" },
    { name: "Suppliers", icon: <FaBoxes />, translateX: 224, sectionId: "suppliers" },
    { name: "Contact", icon: <FaEnvelope />, translateX: 288, sectionId: "contact" },
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
    <div className="fixed bottom-0 w-full bg-white px-8 py-2 rounded-t-xl shadow-lg z-50 sm:hidden">
      <ul className="relative flex items-center justify-between">
        {/* Active indicator circle */}
        <span
          className={`bg-red-500 border-4 border-gray-200 h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl absolute -top-8 transition-transform duration-300`}
          style={{
            transform: `translateX(${Menus[active].translateX}px)`,
          }}
        >
          {Menus[active].icon}
        </span>

        {/* Menu items */}
        {Menus.map((menu, i) => (
          <li key={i} className="flex flex-col items-center w-full">
            <a
              className="flex flex-col items-center justify-center pt-4 cursor-pointer"
              onClick={() => handleClick(i, menu.sectionId)}
            >
              {/* Icon */}
              <span
                className={`text-2xl transition-opacity duration-300 ${
                  i === active ? "opacity-0" : "text-gray-500"
                }`}
              >
                {menu.icon}
              </span>

              {/* Text that fades in under the circle */}
              <span
                className={`text-sm font-bold transition-opacity duration-300 ${
                  i === active ? "opacity-100 text-green-500" : "opacity-0"
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
