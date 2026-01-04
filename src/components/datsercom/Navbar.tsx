import React from "react";
import { Logo } from "./Logo";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg py-4"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-slate-300 hover:text-white font-medium transition-colors relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#servicios"
              className="text-slate-300 hover:text-white font-medium transition-colors relative group"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#nosotros"
              className="text-slate-300 hover:text-white font-medium transition-colors relative group"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#testimonios"
              className="text-slate-300 hover:text-white font-medium transition-colors relative group"
            >
              Testimonios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contacto" className="btn btn-primary">
              Contactar
            </a>
          </div>

          <button className="md:hidden flex flex-col gap-1 p-2">
            <span className="w-6 h-0.5 bg-white rounded transition-all"></span>
            <span className="w-6 h-0.5 bg-white rounded transition-all"></span>
            <span className="w-6 h-0.5 bg-white rounded transition-all"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
