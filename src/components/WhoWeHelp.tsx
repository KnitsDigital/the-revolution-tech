import { Globe, Instagram, WholeWord } from 'lucide-react';

const WhoWeHelp = () => {
  return (
    <div className="text-center">
      <article
        className="bg-gradient-to-br from-brand-purple/5 to-brand-green/5 p-8 rounded-2xl border border-brand-purple/10 max-w-2xl mx-auto"
        aria-labelledby="adayra-title"
      >
        <h3 className="text-xl font-bold mb-4" id="adayra-title">
          ¿Quieres conocer a quienes hemos ayudado?
        </h3>
        <p className="text-gray-600 mb-6">
          ADAYRA es una protectora en Madrid donde cada perrete recibe cariño,
          cuidados y una nueva oportunidad. Puedes ayudar adoptando, apadrinando
          o colaborando como voluntario. ¡Únete y cambia vidas peludas con
          nosotros!
        </p>
        <figure>
          <video
            className="inline-flex items-center px-8 py-3 "
            controls
            aria-label="Video de los perros ayudados por ADAYRA"
            width="40%"
          >
            <source src="/ADAYRA.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video. Puedes
            <a href="/ADAYRA.mp4">descargar el video aquí</a>.
          </video>
          <figcaption className="sr-only">
            Video mostrando a los perros ayudados por ADAYRA.
          </figcaption>
        </figure>
        <nav
          aria-label="Redes sociales de ADAYRA"
          className="mt-6 flex justify-center space-x-6"
        >
          <a
            href="https://adayra.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de ADAYRA"
            className="hover:text-brand-purple text-brand-purple/90 focus:outline-none transition-colors focus:ring-2 focus:ring-brand-green rounded"
          >
             <Globe className="w-6 h-6" role='img'/>
          </a>
		  <a
              href="https://www.instagram.com/adayra_adopciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple text-brand-purple/90 focus:outline-none transition-colors focus:ring-2 focus:ring-brand-green rounded"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" role='img'/>
            </a>
         
        </nav>
      </article>
    </div>
  );
};
export default WhoWeHelp;
