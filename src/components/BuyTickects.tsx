const BuyTickects = () => { 

	return (
		<article className="text-center">
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
        </article>
	)
}

export default BuyTickects;