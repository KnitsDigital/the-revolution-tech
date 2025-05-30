
import React from 'react';
import { Euro, Heart, TrendingUp } from 'lucide-react';

const Counter = () => {
  const stats = [
    {
      title: 'Recaudado',
      amount: 'Contando....',
      description: 'De la venta de entradas',
      icon: Euro,
      color: 'text-brand-purple'
    },
    {
      title: 'Gastos del evento',
      amount: 'Contando....',
      description: 'Catering y material',
      icon: TrendingUp,
      color: 'text-brand-aqua'
    },
    {
      title: 'Para donación',
      amount: 'Contando....',
      description: 'Destinados a protectora de animales',
      icon: Heart,
      color: 'text-brand-green'
    }
  ];

  return (
    <section id="counter" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="counter-heading">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="counter-heading" 
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: '#2B2B2B' }}
          >
            <span style={{ color: '#2B2B2B' }}>Somos</span> <span style={{ color: '#2B2B2B' }}>transparentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Queremos que sepas exactamente cómo utilizamos el dinero recaudado. Los beneficios finales serán donados íntegramente a una protectora de animales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center card-hover">
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full mb-6 ${stat.color} bg-current/10`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
              <p className={`text-3xl font-bold mb-3 ${stat.color}`}>{stat.amount}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-purple/5 to-brand-green/5 p-8 rounded-2xl border border-brand-purple/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">¿Quieres conseguir tu entrada?</h3>
            <p className="text-gray-600 mb-6">
              Las entradas están disponibles en Eventbrite. Cada compra nos ayuda a hacer este evento posible y a contribuir con nuestra causa solidaria.
            </p>
            <a 
              href="https://www.eventbrite.es/e/entradas-revolutiontech-by-adoptaunjunior-google-developers-groups-1380246938749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white font-bold rounded-lg shadow hover:shadow-lg transition-all"
              aria-label="Comprar entradas en Eventbrite"
            >
              Comprar entradas
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
