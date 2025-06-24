import React from "react";
import { Euro, Heart, TrendingUp } from "lucide-react";
import WhoWeHelp from "./WhoWeHelp";

const Counter = () => {
  const stats = [
    {
      title: "Recaudado",
      amount: "390 €",
      description: "De la venta de entradas",
      icon: Euro,
      color: "text-brand-purple",
    },
    {
      title: "Gastos del evento",
      amount: "174,72 €",
      description: "Catering y material",
      icon: TrendingUp,
      color: "text-brand-aqua",
    },
    {
      title: "Para donación",
      amount: "215,98 €",
      description: "Destinados a protectora de animales",
      icon: Heart,
      color: "text-brand-green",
    },
  ];

  return (
    <section
      id="counter"
      className="py-16 sm:py-24 bg-gray-50"
      aria-labelledby="counter-heading"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="counter-heading"
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#2B2B2B" }}
          >
            <span style={{ color: "#2B2B2B" }}>Somos</span>{" "}
            <span style={{ color: "#2B2B2B" }}>transparentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Queremos que sepas exactamente cómo utilizamos el dinero recaudado.
            Los beneficios finales serán donados íntegramente a una protectora
            de animales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm text-center card-hover"
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-full mb-6 ${stat.color} bg-current/10`}
              >
                <stat.icon
                  className={`h-8 w-8 ${stat.color}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
              <p className={`text-3xl font-bold mb-3 ${stat.color}`}>
                {stat.amount}
              </p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <WhoWeHelp />
      </div>
    </section>
  );
};

export default Counter;
