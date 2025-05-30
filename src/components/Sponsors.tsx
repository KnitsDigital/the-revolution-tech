
import React from 'react';

const Sponsors = () => {
  const organizers = [
    {
      name: 'Adopta Un Junior',
      logo: '/lovable-uploads/b66d3a00-5063-441b-859f-8520bb4682de.png',
      website: 'https://adoptaunjunior.es'
    },
    {
      name: 'GDG',
      logo: '/lovable-uploads/46604e67-a656-4875-9687-7fb9a02dc033.png',
      website: 'https://startup.google.com/campus/'
    }
  ];

  const mainSponsor = {
    name: 'KnitsDigital',
    logo: '/lovable-uploads/da9d48f9-4e70-4114-9da0-f554e61455a1.png',
    website: 'https://knitsdigital.es'
  };

  return (
    <section id="sponsors" className="py-16 bg-gray-50" aria-labelledby="sponsors-heading">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="sponsors-heading" 
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: '#2B2B2B' }}
          >
            <span style={{ color: '#2B2B2B' }}>Patrocinadores</span>
          </h2>
          <p className="text-lg text-gray-600">
            Empresas comprometidas con el desarrollo del talento junior en el sector tecnológico.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-8 text-accessible">Organización</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {organizers.map((organizer, index) => (
                <a 
                  key={index}
                  href={organizer.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 shadow-sm flex items-center justify-center w-64 h-32 transition-all duration-300 hover:shadow-md"
                  aria-label={`Visitar sitio web de ${organizer.name}`}
                >
                  <img 
                    src={organizer.logo} 
                    alt={`Logo de ${organizer.name}`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-8 text-accessible">Patrocinador</h3>
            <div className="flex justify-center">
              <a 
                href={mainSponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-8 shadow-sm flex items-center justify-center w-64 h-32 transition-all duration-300 hover:shadow-md"
                aria-label={`Visitar sitio web de ${mainSponsor.name}`}
              >
                <img 
                  src={mainSponsor.logo} 
                  alt={`Logo de ${mainSponsor.name}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-accessible mb-6">¿Quieres ser parte de este evento como patrocinador?</p>
          <a 
            href="mailto:adoptaunjunior@gmail.com"
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-purple font-medium hover:underline"
            aria-label="Contactar para información sobre patrocinio"
          >
            Contáctanos para más información
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
