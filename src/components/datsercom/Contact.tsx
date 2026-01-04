import React from "react";

export const Contact: React.FC = () => {
  return (
    <section
      id="contacto"
      className="section bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              ¿Listo para <span className="text-gradient">comenzar?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              Contáctanos hoy y recibe una cotización gratuita para tu proyecto
            </p>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                  <p className="text-slate-300">+1 (809) 480-5488</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-slate-300">datsercom@claro.net.do</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                  <p className="text-slate-300">República Dominicana</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horario</h4>
                  <p className="text-slate-300">Lun - Vie: 8:00 - 20:00</p>
                  <p className="text-slate-300">Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-10 rounded-3xl border border-blue-500/30 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-sm"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Juan Pérez"
                  className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold text-sm"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 809 123 4567"
                  className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 font-semibold text-sm"
                >
                  Servicio
                </label>
                <select
                  id="service"
                  className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option>Selecciona un servicio</option>
                  <option>Reparación de Hardware</option>
                  <option>Soporte de Software</option>
                  <option>Redes y Conectividad</option>
                  <option>Seguridad Informática</option>
                  <option>Soluciones en la Nube</option>
                  <option>Soporte Remoto</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-sm"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe tu problema o necesidad..."
                  className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Enviar Mensaje →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
