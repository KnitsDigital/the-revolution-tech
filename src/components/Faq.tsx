
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: '¿Quiénes pueden asistir al evento?',
      answer: 'El evento está abierto a juniors del sector tecnológico, estudiantes de últimos cursos de carreras relacionadas con la tecnología, profesionales interesados en mentoría y empresas que buscan talento junior.'
    },
    {
      question: '¿El evento es presencial o virtual?',
      answer: 'El evento es completamente presencial y tendrá lugar en Utopicus de Paseo de la Habana, Madrid.'
    },
    {
      question: '¿Qué incluye la entrada al evento?',
      answer: 'Dependiendo del tipo de entrada elegida (Estándar o Premium), tendrás acceso a todas las charlas, material del evento, coffee breaks y, en el caso de la entrada Premium, también almuerzo networking y certificado de participación.'
    },
    {
      question: '¿Habrá oportunidad de networking?',
      answer: 'Sí, el evento está diseñado para fomentar el networking. Habrá espacios específicos para ello, incluyendo un almuerzo networking para los asistentes con entrada Premium.'
    },
    {
      question: '¿Necesito llevar mi portátil?',
      answer: 'Para los talleres prácticos se recomienda traer portátil, pero no es imprescindible para el resto de actividades. Te informaremos con más detalle tras tu registro.'
    },
    {
      question: '¿Puedo conseguir una factura por mi entrada?',
      answer: 'Sí, tras realizar el pago, puedes solicitar tu factura enviando un correo a info@adoptaunjunior.org con tus datos fiscales.'
    },
    {
      question: '¿Qué política de cancelación tiene el evento?',
      answer: 'Se admiten cancelaciones con devolución completa hasta 7 días antes del evento. Después de esa fecha, no se realizarán devoluciones pero sí se permite la transferencia del ticket a otra persona.'
    },
    {
      question: '¿Cómo puedo contactar con los organizadores?',
      answer: 'Puedes contactarnos a través del formulario en esta página o enviando un email directamente a info@adoptaunjunior.org.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="faq-heading" 
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Respuestas a las dudas más comunes sobre el evento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 hover:no-underline hover:bg-gray-50 rounded-t-xl">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="mb-4 text-gray-700">¿No encuentras respuesta a tu pregunta?</p>
            <a
              href="#contact"
              className="inline-flex items-center font-medium text-brand-purple hover:underline"
              aria-label="Ir a la sección de contacto"
            >
              Contacta con nosotros
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
