import React from "react";
import { Logo } from "./Logo";

const stats = [
  { number: "1000+", label: "Clientes Satisfechos" },
  { number: "5000+", label: "Reparaciones Exitosas" },
  { number: "24/7", label: "Soporte Disponible" },
  { number: "15+", label: "Años de Experiencia" },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden"
    >
      <div className="bg-grid"></div>

      {/* Gradient Orbs */}
      <div
        className="gradient-orb w-96 h-96 -top-48 -right-48"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="gradient-orb w-72 h-72 -bottom-36 -left-36"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
        }}
      ></div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-glow"></span>
              Servicio Profesional Certificado
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-fadeInUp">
              Expertos en{" "}
              <span className="text-gradient">Soluciones Tecnológicas</span>
            </h1>

            <p
              className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              Reparación, mantenimiento y soporte técnico especializado para tu
              computadora. Servicio rápido, confiable y profesional con más de
              15 años de experiencia.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <a href="#contacto" className="btn btn-primary">
                <span>Solicitar Servicio</span>
                <span>→</span>
              </a>
              <a href="#servicios" className="btn btn-outline">
                <span>Ver Servicios</span>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full aspect-square">
              <div className="absolute top-[10%] right-[10%] z-20 bg-slate-800 border border-blue-500/30 rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-float">
                <span className="text-3xl">⚡</span>
                <p className="font-semibold text-sm">Servicio Rápido</p>
              </div>

              <div
                className="absolute bottom-[20%] left-[5%] z-20 bg-slate-800 border border-blue-500/30 rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-3xl">✓</span>
                <p className="font-semibold text-sm">Garantizado</p>
              </div>

              <div
                className="absolute top-[40%] right-[-10%] z-20 bg-slate-800 border border-blue-500/30 rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-float"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-3xl">24/7</span>
                <p className="font-semibold text-sm">Soporte</p>
              </div>

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-float"
                style={{ boxShadow: "0 0 100px rgba(59, 130, 246, 0.5)" }}
              >
                <div className="scale-[2.5]">
                  <Logo showText={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
