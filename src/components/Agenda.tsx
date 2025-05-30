import React from "react";

const Agenda = () => {
  const schedule = [
    {
      time: "15:00 - 15:30",
      title: "Recepción y abrazos",
    },
    {
      time: "15:30 - 16:00",
      title: "Presentación y bienvenida",
      speaker: "Oli y Laura (AdoptaUnJunior) y GDG",
      description:
        "Charla inaugural sobre la importancia de integrar perfiles juniors en el ecosistema tech.",
    },
    {
      time: "16:00 - 17:00",
      title:
        "Talento diverso, empresas que crecen: lo que buscan las empresas hoy",
      speaker: "Mánu Fosela e Irene Morgado",
      description:
        "¿Quieres saber qué buscan realmente las empresas, más allá del cv?",
    },
    {
      time: "17:00 - 17:15",
      title: "Descanso",
    },
    {
      time: "17:15 - 18:15",
      title:
        "¿Preparados para las pruebas técnicas? Claves para destacar y para seleccionar",
      speaker: "Nico Patarino y Antonio Leiva",
      description:
        "¿Te enfrentas a pruebas técnicas en procesos de selección o eres de quienes las diseñan y aplican en tu empresa?",
    },
    {
      time: "18:15 - 18:30",
      title: "Descanso",
    },
    {
      time: "18:30 - 20:00",
      title: "⁠Adopta un sueño: Acompaña o despega",
      speaker: "Mia Salazar, Elena Guidi, Marisa Martín y Lourdes Martínez",
      description:
        "Este taller es una invitación para empresas, profesionales senior y juniors a descubrir el valor de impulsar y acompañar al talento emergente.",
    },
    {
      time: "20:00 - cierre",
      title: "Beer-working y networking final",
    },
  ];

  return (
    <section id="agenda" className="py-16" aria-labelledby="agenda-heading">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="agenda-heading"
            className="text-4xl font-bold mb-6 text-[#2B2B2B]"
          >
            Agenda del evento
          </h2>
          <p className="text-lg text-[#2b2b2b]">
            Una tarde completa de charlas interesantes y divertidas para que
            vivamos una gran experiencia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="timeline" role="list">
            {schedule.map((item, index) => (
              <li key={index} className="timeline-item" role="listitem">
                <article className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm p-6 card-hover">
                  <time className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm font-medium rounded-full mb-3">
                    {item.time}
                  </time>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.speaker && (
                    <p className="text-sm text-brand-purple mb-2">
                      <strong>Ponentes:</strong> {item.speaker}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-gray-600">{item.description}</p>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
