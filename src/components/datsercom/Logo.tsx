import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-black tracking-tight">
            DAT<span className="text-gradient">SERCOM</span>
          </span>
          <span className="text-[10px] text-slate-400 font-medium tracking-wider">
            DATA • SERVICIO • COMPUTADORA
          </span>
        </div>
      )}
    </div>
  );
};
