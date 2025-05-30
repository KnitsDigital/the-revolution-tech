
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import Counter from '@/components/Counter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Somos la Revolución Tech</title>
        <meta name="description" content="Un evento diseñado para conectar juniors con profesionales en el mundo tech. Organizado por Adopta Un Junior y patrocinado por KnitsDigital. 20 de junio en Utopicus de Paseo de la Habana, Madrid." />
        <meta name="keywords" content="adopta un junior, evento tech, juniors en tecnología, networking tech, madrid tech event" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evento.adoptaunjunior.org/" />
        <meta property="og:title" content="Somos la Revolución Tech" />
        <meta property="og:description" content="Un evento diseñado para conectar juniors con profesionales en el mundo tech. 20 de junio en Madrid." />
        <meta property="og:image" content="/lovable-uploads/2abec195-8130-4126-8623-a4cba7cfe7b2.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://evento.adoptaunjunior.org/" />
        <meta property="twitter:title" content="Somos la Revolución Tech" />
        <meta property="twitter:description" content="Un evento diseñado para conectar juniors con profesionales en el mundo tech. 20 de junio en Madrid." />
        <meta property="twitter:image" content="/lovable-uploads/2abec195-8130-4126-8623-a4cba7cfe7b2.png" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Somos la Revolución Tech",
              "description": "Un evento diseñado para conectar juniors con profesionales en el mundo tech. Organizado por Adopta Un Junior y patrocinado por KnitsDigital.",
              "image": "/lovable-uploads/2abec195-8130-4126-8623-a4cba7cfe7b2.png",
              "startDate": "2025-06-20T10:00",
              "endDate": "2025-06-20T18:00",
              "location": {
                "@type": "Place",
                "name": "Campus Google",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "C. de Moreno Nieto, 2.",
                  "addressLocality": "Madrid",
                  "addressRegion": "Madrid",
                  "postalCode": "28005",
                  "addressCountry": "ES"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Adopta Un Junior",
                "url": "https://adoptaunjunior.org"
              },
              "sponsor": {
                "@type": "Organization",
                "name": "KnitsDigital",
                "url": "https://knitsdigital.com"
              },
            }
          `}
        </script>

        <link rel="canonical" href="https://evento.adoptaunjunior.org/" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <section className="hero-overlay">
          <div className="relative z-10">
            <Agenda />
            <Speakers />
          </div>
        </section>
        <Sponsors />
        <Counter />
        <Footer />
      </div>
    </>
  );
};

export default Index;
