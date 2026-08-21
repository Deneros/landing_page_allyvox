import type { LandingCopy } from './types';

/**
 * Copy en espanol. Escrito nativo, no traducido.
 * Sin rayas largas en ningun texto visible: se usan comas, puntos o parentesis.
 * TODO(contenido): los logos de la cinta son de integraciones reales, no de
 * clientes. Cuando haya clientes con permiso, esa seccion cambia.
 */
export const es: LandingCopy = {
  hero: {
    badge: 'Voz, WhatsApp y SMS en un solo agente',
    title: { lead: 'Cada llamada perdida', accent: 'es un cliente que se va' },
    description:
      'Un agente de IA atiende tus llamadas y mensajes, califica cada prospecto y agenda la reunión en tu calendario.',
    cta: 'Agendar demo',
    imageAlt: 'Panel de AllyVox con el pipeline de conversaciones',
    floats: {
      live: 'Llamada en curso',
      caption: 'Calificando prospecto',
      metric: '+34%',
      metricLabel: 'reuniones agendadas',
    },
  },

  logos: {
    title: 'Funciona con las herramientas que ya usas',
    items: ['HubSpot', 'Zapier', 'Make', 'n8n', 'Google Calendar', 'WhatsApp', 'Notion', 'Airtable', 'Zoho', 'Google Sheets'],
  },

  features: {
    title: { lead: 'Atiende, califica y agenda', accent: 'sin que intervengas' },
    description:
      'AllyVox responde cada llamada y cada mensaje, puntúa al prospecto y lo mueve por tu pipeline solo.',
    cards: [
      {
        title: 'Agentes de voz',
        description:
          'Contestan y llaman en español e inglés, con voz natural y sin espera. Entrantes y salientes, a cualquier hora.',
        image: '/placeholders/feature-agentes.svg',
        alt: 'Conversación de voz en curso con transcripción en vivo',
      },
      {
        title: 'CRM con pipeline',
        description:
          'Un CRM que la IA mantiene al día. Cada conversación actualiza la etapa, el puntaje y la próxima acción.',
        image: '/placeholders/feature-crm.svg',
        alt: 'Tablero de pipeline con prospectos por etapa',
      },
      {
        title: 'Memoria por cliente',
        description: 'Recuerda el historial, las preferencias y lo último que se habló. Retoma donde quedó.',
        image: '/placeholders/feature-memoria.svg',
        alt: 'Ficha de cliente con historial de conversaciones',
      },
      {
        title: 'Análisis automático',
        description: 'Puntúa cada llamada, detecta por qué se pierde un negocio y resume qué pasó.',
        image: '/placeholders/feature-insights.svg',
        alt: 'Panel de métricas de llamadas',
      },
      {
        title: 'Integraciones',
        description: 'Conecta tu CRM, tu calendario y más de cien herramientas. API pública y webhooks.',
        image: '/placeholders/feature-integraciones.svg',
        alt: 'Aplicaciones conectadas alrededor de AllyVox',
      },
    ],
  },

  capabilities: {
    items: [
      'Respuesta en segundos',
      'Seguimiento automático',
      'Análisis de llamadas',
      'Voz con IA',
      'WhatsApp',
      'SMS',
      'Agenda integrada',
      'Puntuación de prospectos',
    ],
  },

  stats: {
    title: { lead: 'Autónomo de verdad,', accent: 'listo para escalar' },
    description:
      'Responde, califica y agenda por su cuenta, sean diez conversaciones al mes o diez mil.',
    items: [
      { value: '24/7', label: 'Siempre activo. Noches, fines de semana y festivos cubiertos.' },
      { value: '3', label: 'Canales atendidos por un mismo agente: voz, WhatsApp y SMS.' },
    ],
  },

  managed: {
    badge: 'Servicio gestionado',
    title: { lead: 'Tú pones el objetivo,', accent: 'nosotros lo montamos' },
    description:
      'Nuestro equipo diseña tus agentes, conecta tus herramientas y opera tus campañas de principio a fin.',
    cta: 'Hablar con el equipo',
  },

  comparison: {
    title: { lead: 'Por qué elegir', accent: 'AllyVox' },
    versus: 'V/S',
    others: {
      title: 'Otras plataformas',
      items: [
        'Cada conversación empieza desde cero',
        'Un CRM que actualizas a mano',
        'O todo bot, o todo humano',
        'Plataformas cerradas, sin API',
        'Un bot en un canal, silencio en el resto',
        'El mismo tablero para todos',
      ],
    },
    ours: {
      title: 'AllyVox',
      items: [
        'Llamadas, WhatsApp y SMS con un solo agente, 24/7',
        'Una sola memoria: conoce al cliente en todos los canales',
        'El CRM se actualiza solo con cada conversación',
        'Humanos e IA comparten la misma conversación',
        'API pública y webhooks para automatizar el resto',
        'Análisis que defines tú, sobre cada llamada',
      ],
    },
    cta: 'Agendar demo',
  },

  howItWorks: {
    title: { lead: 'Cómo funciona', accent: 'AllyVox' },
    steps: [
      {
        num: '01',
        title: 'Conecta',
        description: 'Vincula tu número, WhatsApp y SMS. Enlaza tu calendario y tu CRM. Sin escribir código.',
        image: '/placeholders/paso-conecta.svg',
        alt: 'Canales y herramientas conectándose a AllyVox',
      },
      {
        num: '02',
        title: 'Deja trabajar a la IA',
        description: 'Responde cada llamada y cada mensaje, califica al prospecto y agenda la reunión.',
        image: '/placeholders/paso-ia.svg',
        alt: 'Conversación de WhatsApp cerrando una cita',
      },
      {
        num: '03',
        title: 'Tú cierras',
        description: 'El pipeline se llena solo. Intervienes cuando el negocio necesita a una persona.',
        image: '/placeholders/paso-cierras.svg',
        alt: 'Prospectos avanzando a la etapa de ganado',
      },
    ],
    ctaPrimary: 'Agendar demo',
    ctaSecondary: 'Ver la demo',
  },

  pricing: {
    title: { lead: 'Precios que acompañan', accent: 'tu crecimiento' },
    description: 'Elige según el volumen de llamadas. Puedes cambiar de plan cuando lo necesites.',
    plans: [
      {
        name: 'Plan Inicial',
        price: '$19',
        period: '/ mes',
        billing: 'facturación mensual',
        description:
          'Nuestro paquete estándar. Proporciona lo mejor de lo que AllyVox puede hacer por tu equipo.',
        cta: 'Comenzar',
        note: '',
        inherits: '',
        features: [
          '5.000 llamadas al mes',
          'Reconocimiento de voz estándar',
          'Soporte de 2 idiomas',
          'Soporte por email',
        ],
        featured: false,
      },
      {
        name: 'Plan Profesional',
        price: '$49',
        period: '/ mes',
        billing: 'facturación mensual',
        description:
          'Nuestro paquete premium. Proporciona funciones avanzadas para equipos en crecimiento.',
        cta: 'Comenzar',
        note: '',
        inherits: '',
        features: [
          '25.000 llamadas al mes',
          'Reconocimiento de voz avanzado',
          'Soporte de 10+ idiomas',
          'Soporte prioritario por email y chat',
        ],
        featured: true,
      },
      {
        name: 'Plan Empresarial',
        price: 'Custom',
        period: '',
        billing: 'a medida',
        description:
          'Soluciones empresariales personalizadas. Contáctanos para precios y funciones a medida.',
        cta: 'Contactar ventas',
        note: '',
        inherits: '',
        features: [
          'Consultas de voz ilimitadas',
          'Entrenamiento de modelo IA personalizado',
          'Todos los idiomas soportados',
          'Gerente de cuenta dedicado',
        ],
        featured: false,
      },
    ],
    addons: {
      title: { lead: 'Amplía cuando', accent: 'haga falta' },
      link: 'Ver todos los complementos',
      items: [
        { title: 'Usuarios extra', description: 'Suma asientos sin cambiar de plan.' },
        { title: 'Llamadas adicionales', description: 'Paquetes extra cuando sube el volumen.' },
        { title: 'Servicio gestionado', description: 'Nuestro equipo opera tus campañas.' },
        { title: 'Integraciones a medida', description: 'Conectamos lo que tu operación necesite.' },
      ],
    },
  },

  demo: {
    badge: 'Demo',
    title: { lead: 'Mira AllyVox', accent: 'por dentro' },
    description:
      'Un recorrido por el panel: cómo se crea un agente, cómo califica y cómo llena tu pipeline.',
    play: 'Ver la demo interactiva',
    imageAlt: 'Panel de AllyVox con métricas por canal',
  },

  faq: {
    title: { lead: 'Antes de que', accent: 'preguntes' },
    items: [
      {
        q: '¿Cómo empiezo?',
        a: 'Agendas una demo, definimos tu caso y dejamos tu primer agente en marcha. Suele tomar días, no semanas.',
      },
      {
        q: '¿Cómo funciona el precio?',
        a: 'Pagas un plan mensual dimensionado al volumen de llamadas que necesitas. Si te quedas corto, añades un paquete adicional o pasas al siguiente plan.',
      },
      {
        q: '¿Hay prueba gratuita?',
        a: 'No hay autoservicio gratuito. Hacemos una demo con tu caso real para que veas al agente trabajando antes de contratar.',
      },
      {
        q: '¿Se conecta con mi CRM?',
        a: 'Sí. Hay conectores para las herramientas más comunes, y API pública con webhooks para todo lo demás.',
      },
      {
        q: '¿En qué idiomas atiende?',
        a: 'Español e inglés de forma nativa, con voces distintas por idioma. El mismo agente cambia según el cliente.',
      },
      {
        q: '¿Puede intervenir una persona?',
        a: 'Sí. Humanos e IA comparten la misma conversación y tu equipo puede tomar el control en cualquier momento.',
      },
    ],
    still: {
      title: '¿Te queda algo por resolver?',
      description: 'Habla con el equipo y lo vemos contigo.',
      cta: 'Contactar',
    },
  },

  finalCta: {
    title: { lead: '¿Listo para dejar de', accent: 'perder llamadas?' },
    description: 'Tu primer agente puede estar atendiendo esta semana.',
    cta: 'Agendar demo',
  },
};
