import React from "react";
import { Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom Discord icon component
  const DiscordIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );

  // Custom Bluesky icon component
  const BlueskyIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.296 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  );

  // Custom X (Twitter) icon component
  const XIcon = () => (
    <img
      src="/lovable-uploads/d92beb02-c4ee-4bdd-9554-889408a1c168.png"
      alt="X (Twitter)"
      className="w-6 h-6"
    />
  );

  return (
    <footer
      className="bg-brand-purple text-white py-12"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        {/* Main Footer Content */}
        <article className="flex justify-between items-start flex-wrap gap-6 mb-8">
          {/* Logo Section */}
          <section className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/c9eab7fb-2f56-4107-b1d8-72be5ca7794c.png"
                alt="Logo de Adopta Un Junior en blanco"
                className="h-16 w-auto"
              />
            </div>
          </section>

          {/* Evento */}
          <section className="text-right">
            <h3 className="font-semibold text-white text-xl tracking-wider uppercase mb-4">
              Evento
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#agenda"
                  className="text-white/80 text-lg hover:text-white transition-colors"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-white/80 text-lg hover:text-white transition-colors"
                >
                  Ponentes
                </a>
              </li>
            </ul>
          </section>
        </article>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Social Media Icons */}
          <section className="flex justify-center space-x-6 mb-6">
            <a
              href="https://linkedin.com/in/adoptaunjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" role='img'/>
            </a>
            <a
              href="https://youtube.com/adoptaunjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" role='img'/>
            </a>
            <a
              href="https://twitter.com/adoptaunjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://bsky.app/profile/adoptaunjunior.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Bluesky"
            >
              <BlueskyIcon />
            </a>
            <a
              href="https://instagram.com/adoptaunjunior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" role='img'/>
            </a>
          </section>

          {/* Bottom Text */}
          <section className="text-center">
            <p className="text-white/80 text-sm mb-2">
              Evento diseñado por y para juniors que están revolucionando el
              mundo tech.
            </p>
            <p className="text-white/60 text-xs">
              © {currentYear} AdoptaUnJunior. Todos los derechos reservados.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
