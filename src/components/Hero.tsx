
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <header
      className="hero-overlay min-h-screen flex items-center pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-0">
          <div className="flex-1 text-center lg:text-left animate-fade-in mb-0">
            <p
              className="text-white font-bold mb-4 text-2xl sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              #AdoptaUnJunior
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Somos la RevolutionTech
            </h1>
          </div>
         
          <DotLottieReact
            src="/rocket/Rocket.json"
            loop
            autoplay
            className='h-36 w-auto p-0 m-0'
            aria-hidden="true"
          />

          <aside className="flex-1 max-w-md lg:max-w-none animate-scale-in mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-aqua rounded-lg blur opacity-30" aria-hidden="true"></div>
              <article className="relative bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Evento Presencial</h2>
                <p className="text-gray-600 mb-6">
                  Vente al espacio que hemos creado para conectar, compartir y
                  transformar el sector Tech, por solo 6.88€
                </p>
                <dl className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center" aria-hidden="true">
                      <Calendar
                        className="h-5 w-5 text-brand-purple"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <dt className="font-medium">Viernes, 20 de junio</dt>
                      <dd className="text-sm text-gray-500">15:00 - 21:00</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center" aria-hidden="true">
                      <MapPin
                        className="h-5 w-5 text-brand-purple"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <dt>
                        <a
                          href="https://startup.google.com/campus/madrid/?utm_source=gfs-es&utm_medium=website&utm_campaign=google-my-business&utm_content=google-my-business"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-brand-purple transition-colors"
                        >
                          Campus Google, Madrid
                        </a>
                      </dt>
                      <dd className="text-sm text-gray-500">
                        C. de Moreno Nieto, 2.
                      </dd>
                    </div>
                  </div>
                </dl>
                <a
                  href="https://www.eventbrite.es/e/entradas-revolutiontech-by-adoptaunjunior-google-developers-groups-1380246938749?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-gradient-primary text-white font-bold rounded-md hover:opacity-90 transition-opacity focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
                  aria-label="Comprar entrada para el evento RevolutionTech"
                >
                  Comprar entrada
                </a>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Hero;
