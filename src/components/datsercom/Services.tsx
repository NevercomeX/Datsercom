import React from "react";

const services = [
  {
    icon: "🔧",
    title: "Reparación de Hardware",
    description:
      "Diagnóstico y reparación de componentes físicos de tu computadora con técnicos certificados.",
    features: [
      "Cambio de componentes",
      "Limpieza profunda",
      "Actualización de hardware",
    ],
  },
  {
    icon: "💻",
    title: "Soporte de Software",
    description:
      "Instalación, configuración y optimización de sistemas operativos y aplicaciones.",
    features: [
      "Instalación de OS",
      "Eliminación de virus",
      "Optimización de rendimiento",
    ],
  },
  {
    icon: "🌐",
    title: "Redes y Conectividad",
    description:
      "Configuración de redes empresariales y domésticas para máxima eficiencia.",
    features: ["Configuración WiFi", "Redes corporativas", "Seguridad de red"],
  },
  {
    icon: "🛡️",
    title: "Seguridad Informática",
    description:
      "Protección integral contra amenazas cibernéticas y recuperación de datos.",
    features: [
      "Antivirus empresarial",
      "Backup automático",
      "Recuperación de datos",
    ],
  },
  {
    icon: "☁️",
    title: "Soluciones en la Nube",
    description: "Migración y gestión de servicios cloud para tu negocio.",
    features: [
      "Migración cloud",
      "Almacenamiento seguro",
      "Sincronización multi-dispositivo",
    ],
  },
  {
    icon: "📞",
    title: "Soporte Remoto",
    description:
      "Asistencia técnica a distancia para resolver problemas rápidamente.",
    features: [
      "Soporte 24/7",
      "Resolución inmediata",
      "Sin necesidad de visitas",
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="section bg-slate-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg text-slate-300">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="text-blue-500 font-bold text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto bg-transparent border border-blue-500/30 text-blue-300 py-3 px-6 rounded-lg font-semibold transition-all hover:bg-blue-500/10 hover:border-blue-500 hover:text-white group-hover:translate-x-1">
                Más información →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
