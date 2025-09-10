import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Transações", "Relatórios", "Configurações"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-[#00b990]">
            💰 Finance Manager
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`text-sm font-medium transition ${
                  active === link
                    ? "text-[#00b990]"
                    : "text-slate-600 hover:text-[#00b990]"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-[#00b990] hover:bg-[#009e7d] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md">
              + Nova Transação
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}