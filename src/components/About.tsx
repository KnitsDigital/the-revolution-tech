import React from "react";
import { Users, Sparkles, Network, TrendingUp, Cpu } from "lucide-react";

const About = () => {
  const objectives = [
    {
      title: "Networking",
      description:
        "Conectar con profesionales, juniors y seniors, del sector tecnológico.",
      icon: Network,
    },
    {
      title: "Visibilidad",
      description: "Aumenta tú visibilidad siendo parte de la comunidad.",
      icon: TrendingUp,
    },
    {
      title: "Aprendizaje",
      description:
        "Comparte conocimientos y experiencias sobre el sector tecnológico.",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#2B2B2B" }}
          >
            El <span style={{ color: "#2B2B2B" }}>evento</span>
          </h2>
          <p className="text-lg text-gray-600">
            Un evento diseñado para derribar barreras y crear puentes entre
            juniors y profesionales en el mundo tech. Un evento para compartir,
            aprender y crecer juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-brand-purple/5 to-brand-aqua/5 p-6 sm:p-10 rounded-2xl border border-brand-purple/10">
              <h3 className="text-2xl font-bold mb-6">Objetivos</h3>
              <ul className="space-y-6">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-brand-purple text-white rounded-xl flex items-center justify-center">
                      <objective.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        {objective.title}
                      </h4>
                      <p className="text-gray-600">{objective.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 mb-6">
              <strong>RevolutionTech</strong> es un evento organizado por la
              asociación AdoptaUnJunior y patrocinado por{" "}
              <strong>KnitsDigital</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Durante el evento, los participantes tendrán la oportunidad de
              asistir a charlas inspiradoras, participar en talleres prácticos y
              establecer contactos valiosos en un ambiente acogedor y
              profesional.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              El precio de la entrada es de 6,88€ para poder cubrir gastos, pero
              lo que sobre será donado a una protectora de animales que será
              elegida el mismo día del evento
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.eventbrite.es/e/entradas-revolutiontech-by-adoptaunjunior-google-developers-groups-1380246938749?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-primary text-white font-bold rounded-lg shadow hover:shadow-lg transition-all"
                aria-label="Link a comprar entradas"
              >
                ¡Quiero participar!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
