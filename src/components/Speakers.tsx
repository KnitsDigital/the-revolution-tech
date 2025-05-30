
import React from 'react';
import { Linkedin } from 'lucide-react';

const Speakers = () => {
  const speakersRow1 = [
    {
      name: 'Antonio Leiva',
      title: 'Google Developer Expert in Android',
      image: '/lovable-uploads/0d0725da-2f54-48a6-855d-f14ae11d0be0.png',
      linkedin: 'https://www.linkedin.com/in/antonio-devexpert/'
    },
    {
      name: 'Elena Guidi',
      title: 'Senior Software Engineer',
      image: '/lovable-uploads/e5c1b0c0-899b-4801-980a-0a6b8882b3d6.png',
      linkedin: 'https://www.linkedin.com/in/elena-guidi-dev/'
    },
    {
      name: 'Irene Morgado',
      title: 'People, Culture & Brand for tech companies',
      image: '/lovable-uploads/96266f1b-8bb0-4e40-9b5c-7664e1802cb2.png',
      linkedin: 'https://www.linkedin.com/in/irenemmorgado/'
    },
    {
      name: 'Lourdes Martínez',
      title: 'Digital Transformation Business Development',
      image: '/lovable-uploads/36c6f7a7-e826-4dda-89fc-19bf816d1403.png',
      linkedin: 'https://www.linkedin.com/in/lourdesmartinez/'
    }
  ];

  const speakersRow2 = [
    {
      name: 'Mánu Fosela',
      title: 'Head of Engineering at Geniova',
      image: '/lovable-uploads/c1891a86-73aa-4d98-a53d-765f6333b47b.png',
      linkedin: 'https://www.linkedin.com/in/manufosela/'
    },
    {
      name: 'Marisa Martín',
      title: 'Engineering Manager (Sol. Architect)',
      image: '/lovable-uploads/096dab66-37a2-42bf-9c34-61784626780e.png',
      linkedin: 'https://www.linkedin.com/in/marisa-martin-serrano/'
    },
    {
      name: 'Mia Salazar',
      title: 'Front-end developer & cookie monster',
      image: '/lovable-uploads/d6636136-fb44-4605-bfa0-49532027ef48.png',
      linkedin: 'https://www.linkedin.com/in/miasalazar/'
    },
    {
      name: 'Nico Patarino',
      title: 'Staff Software Engineer Conference Speaker',
      image: '/lovable-uploads/7d406506-ecc6-4957-a3a6-24e063b86b09.png',
      linkedin: 'https://www.linkedin.com/in/npatarino/'
    }
  ];

  const SpeakerCard = ({ speaker }) => (
    <article className="flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <img
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1 text-gray-900">{speaker.name}</h3>
      <p className="text-sm text-[#2B2B2B] font-bold mb-3 min-h-[2.5rem] flex items-center">{speaker.title}</p>
      <a 
        href={speaker.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 bg-brand-purple hover:bg-brand-purple-dark rounded-full transition-colors duration-200 focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
        aria-label={`Ver perfil de LinkedIn de ${speaker.name}`}
      >
        <Linkedin className="w-4 h-4 text-white" aria-hidden="true" />
      </a>
    </article>
  );

  return (
    <section id="speakers" className="py-16 sm:py-24" aria-labelledby="speakers-heading">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="speakers-heading" 
            className="text-4xl font-bold mb-6 text-[#2B2B2B]"
          >
           Ponentes
          </h2>
          <p className="text-lg text-[#2B2B2B]">
            Nos acompaña este buenísimo cartel de profesionales que compartirán su conocimiento y experiencia contigo.
          </p>
        </div>

        <div className="space-y-12" role="group" aria-labelledby="speakers-heading">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakersRow1.map((speaker, index) => (
              <SpeakerCard key={`row1-${index}`} speaker={speaker} />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakersRow2.map((speaker, index) => (
              <SpeakerCard key={`row2-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
