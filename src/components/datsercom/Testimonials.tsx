import React from "react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de TI",
    company: "TechCorp SA",
    text: "Excelente servicio. Resolvieron nuestros problemas de red en tiempo récord. Altamente recomendados.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Propietario",
    company: "Café Digital",
    text: "Profesionales y eficientes. Mi computadora nunca había funcionado mejor.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Freelancer",
    company: "Diseño Creativo",
    text: "El soporte remoto es increíble. Solucionaron mi problema en minutos.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="section bg-slate-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-lg text-slate-300">
            Testimonios reales de clientes satisfechos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card flex flex-col">
              <div className="flex gap-1 text-2xl mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p className="text-lg text-slate-300 italic leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
