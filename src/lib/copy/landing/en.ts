import type { LandingCopy } from './types';

/** Traduccion cuidada del espanol, no literal. Misma regla: cero rayas largas. */
export const en: LandingCopy = {
  hero: {
    badge: 'Voice, WhatsApp and SMS in a single agent',
    title: { lead: 'Every missed call', accent: 'is a customer walking away' },
    description:
      'An AI agent answers your calls and messages, qualifies every lead and books the meeting on your calendar.',
    cta: 'Book a demo',
    imageAlt: 'VoxAlly dashboard showing the conversation pipeline',
    floats: {
      live: 'Call in progress',
      caption: 'Qualifying lead',
      metric: '+34%',
      metricLabel: 'meetings booked',
    },
  },

  logos: {
    title: 'Works with the tools you already use',
    items: ['HubSpot', 'Zapier', 'Make', 'n8n', 'Google Calendar', 'WhatsApp', 'Notion', 'Airtable', 'Zoho', 'Google Sheets'],
  },

  features: {
    title: { lead: 'It answers, qualifies and books', accent: 'without you' },
    description:
      'VoxAlly picks up every call and every message, scores the lead and moves it through your pipeline on its own.',
    cards: [
      {
        title: 'Voice agents',
        description:
          'They answer and place calls in Spanish and English, with a natural voice and no hold time. Inbound and outbound, any hour.',
      },
      {
        title: 'CRM with pipeline',
        description:
          'A CRM the AI keeps current. Every conversation updates the stage, the score and the next action.',
      },
      {
        title: 'Per-customer memory',
        description: 'It remembers history, preferences and what was last discussed. It picks up where it left off.',
      },
      {
        title: 'Automatic analysis',
        description: 'It scores every call, spots why a deal is lost and sums up what happened.',
      },
      {
        title: 'Integrations',
        description: 'Connect your CRM, your calendar and over a hundred tools. Public API and webhooks.',
      },
    ],
  },

  capabilities: {
    items: [
      'Replies in seconds',
      'Automatic follow-up',
      'Call analysis',
      'AI voice',
      'WhatsApp',
      'SMS',
      'Built-in scheduling',
      'Lead scoring',
    ],
  },

  stats: {
    title: { lead: 'Genuinely autonomous,', accent: 'built to scale' },
    description: 'It answers, qualifies and books on its own, whether that is ten conversations a month or ten thousand.',
    items: [
      { value: '24/7', label: 'Always on. Nights, weekends and holidays covered.' },
      { value: '3', label: 'Channels handled by one agent: voice, WhatsApp and SMS.' },
    ],
  },

  managed: {
    badge: 'Managed service',
    title: { lead: 'You set the goal,', accent: 'we build it' },
    description:
      'Our team designs your agents, connects your tools and runs your campaigns end to end.',
    cta: 'Talk to the team',
  },

  comparison: {
    title: { lead: 'Why choose', accent: 'VoxAlly' },
    versus: 'V/S',
    others: {
      title: 'Other platforms',
      items: [
        'Every conversation starts from scratch',
        'A CRM you update by hand',
        'All bot or all human, nothing between',
        'Closed platforms with no API',
        'A bot on one channel, silence on the rest',
        'The same dashboard for everyone',
      ],
    },
    ours: {
      title: 'VoxAlly',
      items: [
        'Calls, WhatsApp and SMS from a single agent, 24/7',
        'One memory: it knows the customer across every channel',
        'The CRM updates itself with every conversation',
        'Humans and AI share the same conversation',
        'Public API and webhooks to automate the rest',
        'Analysis you define, on every call',
      ],
    },
    cta: 'Book a demo',
  },

  howItWorks: {
    title: { lead: 'How', accent: 'VoxAlly works' },
    steps: [
      {
        num: '01',
        title: 'Connect',
        description: 'Link your number, WhatsApp and SMS. Hook up your calendar and CRM. No code required.',
        image: '/product/paso-conecta.webp',
        alt: 'Channels and tools connecting to VoxAlly',
      },
      {
        num: '02',
        title: 'Let the AI work',
        description: 'It answers every call and message, qualifies the lead and books the meeting.',
        image: '/product/paso-ia.webp',
        alt: 'WhatsApp conversation closing an appointment',
      },
      {
        num: '03',
        title: 'You close',
        description: 'Your pipeline fills itself. You step in when the deal needs a person.',
        image: '/product/paso-cierras.webp',
        alt: 'Leads advancing to the won stage',
      },
    ],
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'Watch the demo',
  },

  pricing: {
    title: { lead: 'Pricing that follows', accent: 'your growth' },
    description: 'Pick the plan that matches your call volume. You can move up whenever you need to.',
    plans: [
      {
        name: 'Starter plan',
        price: '$19',
        period: '/ month',
        billing: 'billed monthly',
        description:
          'Our standard package. Provides the best of what VoxAlly can do for your team.',
        cta: 'Get started',
        note: '',
        inherits: '',
        features: [
          '5,000 calls per month',
          'Standard voice recognition',
          '2 languages supported',
          'Email support',
        ],
        featured: false,
      },
      {
        name: 'Professional plan',
        price: '$49',
        period: '/ month',
        billing: 'billed monthly',
        description:
          'Our premium package. Provides advanced features for growing teams.',
        cta: 'Get started',
        note: '',
        inherits: '',
        features: [
          '25,000 calls per month',
          'Advanced voice recognition',
          '10+ languages supported',
          'Priority email and chat support',
        ],
        featured: true,
      },
      {
        name: 'Enterprise plan',
        price: 'Custom',
        period: '',
        billing: 'tailored',
        description:
          'Custom enterprise solutions. Contact us for tailored pricing and features.',
        cta: 'Contact sales',
        note: '',
        inherits: '',
        features: [
          'Unlimited voice queries',
          'Custom AI model training',
          'All languages supported',
          'Dedicated account manager',
        ],
        featured: false,
      },
    ],
    addons: {
      title: { lead: 'Scale up when', accent: 'you need to' },
      link: 'See all add-ons',
      items: [
        { title: 'Extra users', description: 'Add seats without changing plan.' },
        { title: 'Extra calls', description: 'Additional packs when volume climbs.' },
        { title: 'Managed service', description: 'Our team runs your campaigns.' },
        { title: 'Custom integrations', description: 'We connect whatever your operation needs.' },
      ],
    },
  },

  demo: {
    badge: 'Demo',
    title: { lead: 'See VoxAlly', accent: 'from the inside' },
    description: 'A walkthrough of the dashboard: how an agent is built, how it qualifies and how it fills your pipeline.',
    play: 'Watch the interactive demo',
    imageAlt: 'VoxAlly dashboard with per-channel metrics',
  },

  faq: {
    title: { lead: 'Before you', accent: 'ask' },
    items: [
      {
        q: 'How do I get started?',
        a: 'You book a demo, we scope your case and put your first agent live. It usually takes days, not weeks.',
      },
      {
        q: 'How does pricing work?',
        a: 'You pay a monthly plan sized to the call volume you need. If you run short, you add an extra pack or move up a plan.',
      },
      {
        q: 'Is there a free trial?',
        a: 'There is no free self-service tier. We run a demo on your real case so you see the agent working before you commit.',
      },
      {
        q: 'Does it connect to my CRM?',
        a: 'Yes. There are connectors for the most common tools, plus a public API and webhooks for everything else.',
      },
      {
        q: 'Which languages does it handle?',
        a: 'Spanish and English natively, with a different voice per language. The same agent switches based on the customer.',
      },
      {
        q: 'Can a person step in?',
        a: 'Yes. Humans and AI share the same conversation and your team can take over at any point.',
      },
    ],
    still: {
      title: 'Still something unresolved?',
      description: 'Talk to the team and we will work through it with you.',
      cta: 'Get in touch',
    },
  },

  finalCta: {
    title: { lead: 'Ready to stop', accent: 'losing calls?' },
    description: 'Your first agent could be answering this week.',
    cta: 'Book a demo',
  },
};
