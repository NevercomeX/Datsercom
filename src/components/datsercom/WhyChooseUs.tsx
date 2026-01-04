import React from "react";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Somos tu socio confiable en soluciones tecnológicas
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-3xl">
                  🏆
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Técnicos Certificados
                  </h4>
                  <p className="text-slate-300">
                    Personal altamente calificado con certificaciones
                    internacionales
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Servicio Rápido</h4>
                  <p className="text-slate-300">
                    Diagnóstico y reparación en el menor tiempo posible
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-3xl">
                  💎
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Garantía Extendida</h4>
                  <p className="text-slate-300">
                    Todos nuestros servicios incluyen garantía de satisfacción
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-3xl">
                  💰
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Precios Competitivos
                  </h4>
                  <p className="text-slate-300">
                    Calidad profesional a precios justos y transparentes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-blue-500/10 border-b border-blue-500/30 p-6 flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <span className="font-semibold text-lg">Rendimiento</span>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <div className="flex justify-between mb-3 text-sm font-semibold">
                    <span className="text-slate-300">
                      Satisfacción del Cliente
                    </span>
                    <span className="text-blue-300">98%</span>
                  </div>
                  <div className="h-2 bg-blue-500/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{
                        width: "98%",
                        animation: "progressAnimation 1.5s ease-out",
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3 text-sm font-semibold">
                    <span className="text-slate-300">Tiempo de Respuesta</span>
                    <span className="text-blue-300">95%</span>
                  </div>
                  <div className="h-2 bg-blue-500/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{
                        width: "95%",
                        animation: "progressAnimation 1.5s ease-out",
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3 text-sm font-semibold">
                    <span className="text-slate-300">
                      Éxito en Reparaciones
                    </span>
                    <span className="text-blue-300">99%</span>
                  </div>
                  <div className="h-2 bg-blue-500/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{
                        width: "99%",
                        animation: "progressAnimation 1.5s ease-out",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
