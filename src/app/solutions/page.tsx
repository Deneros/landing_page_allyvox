'use client';

import { translations } from '@/lib/translations';
import { images } from '@/lib/images';
import { useLayout } from '@/lib/context';
import { CapabilityCard } from '@/components/cards/CapabilityCard';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { CTAButton } from '@/components/ui/CTAButton';
import { DotPattern } from '@/components/ui/DotPattern';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function SolutionsPage() {
  const { language, bgColor, altBgColor, textColor, mutedText } = useLayout();
  const t = translations[language];

  const industries = [
    {
      id: 'healthcare',
      icon: '🏥',
      image: images.healthcare,
      title: language === 'en' ? 'Healthcare' : 'Salud',
      heading: language === 'en'
        ? 'Appointments scheduled, patients reminded, records secure'
        : 'Citas programadas, pacientes recordados, registros seguros',
      description: language === 'en'
        ? 'Your voice agent handles the calls that matter. Scheduling, confirmations, and follow-ups happen automatically while you focus on care. HIPAA compliance built in, no exceptions.'
        : 'Tu agente de voz maneja las llamadas que importan. La programación, confirmaciones y seguimientos suceden automáticamente mientras te enfocas en la atención. Cumplimiento HIPAA integrado, sin excepciones.',
      features: [
        {
          title: language === 'en' ? 'Appointment scheduling' : 'Programación de citas',
          description: language === 'en'
            ? 'Patients book visits through natural conversation, reducing no-shows and freeing your staff.'
            : 'Los pacientes reservan visitas a través de conversación natural, reduciendo ausencias y liberando tu personal.',
        },
        {
          title: language === 'en' ? 'Patient reminders' : 'Recordatorios de pacientes',
          description: language === 'en'
            ? 'Automated calls confirm appointments days in advance, keeping your calendar full and patients prepared.'
            : 'Las llamadas automatizadas confirman citas días antes, manteniendo tu calendario lleno y pacientes preparados.',
        },
        {
          title: language === 'en' ? 'Secure call handling' : 'Manejo seguro de llamadas',
          description: language === 'en'
            ? 'Every conversation meets HIPAA standards. Patient data stays protected. Trust is earned through compliance.'
            : 'Cada conversación cumple con estándares HIPAA. Los datos de los pacientes se mantienen protegidos. La confianza se gana mediante cumplimiento.',
        },
      ],
    },
    {
      id: 'realestate',
      icon: '🏠',
      image: images.realEstate,
      title: language === 'en' ? 'Real Estate' : 'Bienes Raíces',
      heading: language === 'en'
        ? 'Leads qualified, tours booked, deals moving forward'
        : 'Leads calificados, tours reservados, tratos avanzando',
      description: language === 'en'
        ? 'Your voice agent captures leads the moment they call. Property questions get answered instantly, showings get scheduled, and your pipeline stays full without you lifting a finger.'
        : 'Tu agente de voz captura leads en el momento que llaman. Las preguntas sobre propiedades se responden al instante, las visitas se programan, y tu pipeline se mantiene lleno sin que levantes un dedo.',
      features: [
        {
          title: language === 'en' ? 'Lead qualification' : 'Calificación de leads',
          description: language === 'en'
            ? 'Ask the right questions, filter serious buyers, and pass hot leads directly to your agents. No tire-kickers.'
            : 'Haz las preguntas correctas, filtra compradores serios y pasa leads calientes directamente a tus agentes. Sin curiosos.',
        },
        {
          title: language === 'en' ? 'Showing coordination' : 'Coordinación de visitas',
          description: language === 'en'
            ? 'Book property tours based on agent availability. Reminders sent, no-shows reduced. Your calendar stays optimized.'
            : 'Reserva tours de propiedades basados en disponibilidad del agente. Recordatorios enviados, ausencias reducidas. Tu calendario se mantiene optimizado.',
        },
        {
          title: language === 'en' ? 'Follow-up automation' : 'Automatización de seguimiento',
          description: language === 'en'
            ? 'Check in with prospects at the right time. Answer questions. Keep deals warm. Never let a potential sale go cold.'
            : 'Verifica con prospectos en el momento correcto. Responde preguntas. Mantén tratos calientes. Nunca dejes que una venta potencial se enfríe.',
        },
      ],
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      image: images.ecommerce,
      title: language === 'en' ? 'E-commerce' : 'E-commerce',
      heading: language === 'en'
        ? 'Orders placed, returns handled, customers supported'
        : 'Pedidos realizados, devoluciones manejadas, clientes atendidos',
      description: language === 'en'
        ? 'Your voice agent turns calls into conversions. Order tracking, product questions, and returns get resolved instantly. Customer satisfaction goes up, support costs go down.'
        : 'Tu agente de voz convierte llamadas en conversiones. Seguimiento de pedidos, preguntas sobre productos y devoluciones se resuelven al instante. La satisfacción del cliente aumenta, los costos de soporte disminuyen.',
      features: [
        {
          title: language === 'en' ? 'Order management' : 'Gestión de pedidos',
          description: language === 'en'
            ? 'Customers place orders, check status, and modify shipments through natural conversation. No app required.'
            : 'Los clientes realizan pedidos, verifican estado y modifican envíos a través de conversación natural. No se requiere app.',
        },
        {
          title: language === 'en' ? 'Product inquiries' : 'Consultas de productos',
          description: language === 'en'
            ? 'Answer questions about availability, specs, and shipping instantly. Convert curious browsers into buyers.'
            : 'Responde preguntas sobre disponibilidad, especificaciones y envío al instante. Convierte navegadores curiosos en compradores.',
        },
        {
          title: language === 'en' ? 'Returns and exchanges' : 'Devoluciones e intercambios',
          description: language === 'en'
            ? 'Process returns, issue refunds, and arrange exchanges automatically. Keep customers happy without lifting a finger.'
            : 'Procesa devoluciones, emite reembolsos y organiza intercambios automáticamente. Mantén a los clientes felices sin levantar un dedo.',
        },
      ],
    },
    {
      id: 'finance',
      icon: '💼',
      image: images.finance,
      title: language === 'en' ? 'Finance' : 'Finanzas',
      heading: language === 'en'
        ? 'Inquiries answered, documents collected, compliance maintained'
        : 'Consultas respondidas, documentos recolectados, cumplimiento mantenido',
      description: language === 'en'
        ? 'Your voice agent handles sensitive financial calls with precision. Account inquiries, document collection, and fraud detection happen securely. Regulations met, trust maintained.'
        : 'Tu agente de voz maneja llamadas financieras sensibles con precisión. Consultas de cuentas, recolección de documentos y detección de fraude suceden de forma segura. Regulaciones cumplidas, confianza mantenida.',
      features: [
        {
          title: language === 'en' ? 'Account inquiries' : 'Consultas de cuenta',
          description: language === 'en'
            ? 'Customers check balances, review transactions, and get account information through secure voice authentication.'
            : 'Los clientes verifican saldos, revisan transacciones y obtienen información de cuenta a través de autenticación de voz segura.',
        },
        {
          title: language === 'en' ? 'Document collection' : 'Recolección de documentos',
          description: language === 'en'
            ? 'Request and receive required documents from customers. Follow up automatically. Onboarding accelerated, compliance maintained.'
            : 'Solicita y recibe documentos requeridos de clientes. Haz seguimiento automáticamente. Onboarding acelerado, cumplimiento mantenido.',
        },
        {
          title: language === 'en' ? 'Fraud prevention' : 'Prevención de fraude',
          description: language === 'en'
            ? 'Verify identity through voice biometrics. Flag suspicious activity. Protect customers and your institution.'
            : 'Verifica identidad a través de biometría de voz. Marca actividad sospechosa. Protege a los clientes y tu institución.',
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <section className="relative isolate w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <DotPattern color="#302289" accentColor="#9138d5" spacing={18} opacity={0.55} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h1
              className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight"
              style={{
                fontSize: '72px',
                lineHeight: '1.2',
                letterSpacing: '-0.72px',
              }}
            >
              {t.solutionsPage.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p
              className="text-xl mb-8"
              style={{
                fontSize: '18px',
                color: mutedText,
              }}
            >
              {t.solutionsPage.heroDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        className="relative isolate py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundColor: altBgColor,
        }}
      >
        <DotPattern color="#9138d5" accentColor="#2e8dff" spacing={20} opacity={0.4} />
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  fontSize: '48px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.48px',
                  color: textColor,
                }}
              >
                {language === 'en' ? 'Built to handle what matters' : 'Construido para manejar lo que importa'}
              </h2>
              <p
                className="text-lg"
                style={{
                  fontSize: '18px',
                  color: mutedText,
                }}
              >
                {language === 'en'
                  ? 'Your voice agent adapts to your business. Natural language, real conversations, actual results.'
                  : 'Tu agente de voz se adapta a tu negocio. Lenguaje natural, conversaciones reales, resultados reales.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal variant="fade-up" delay={0}>
              <CapabilityCard
                icon="🎯"
                title={language === 'en' ? 'Context-aware responses' : 'Respuestas conscientes del contexto'}
                description={language === 'en'
                  ? 'Understands what customers mean, not just what they say. Every conversation flows naturally.'
                  : 'Entiende lo que los clientes quieren decir, no solo lo que dicen. Cada conversación fluye naturalmente.'}
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <CapabilityCard
                icon="🔄"
                title={language === 'en' ? 'Real-time integration' : 'Integración en tiempo real'}
                description={language === 'en'
                  ? 'Connects to your systems instantly. No delays, no friction, just seamless workflows.'
                  : 'Se conecta a tus sistemas al instante. Sin retrasos, sin fricción, solo flujos de trabajo fluidos.'}
              />
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <CapabilityCard
                icon="📊"
                title={language === 'en' ? 'Actionable insights' : 'Conocimientos accionables'}
                description={language === 'en'
                  ? 'Every call tracked, every pattern identified. You see what works and what needs fixing.'
                  : 'Cada llamada rastreada, cada patrón identificado. Ves lo que funciona y lo que necesita arreglarse.'}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        className="py-32 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  fontSize: '48px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.48px',
                  color: textColor,
                }}
              >
                {language === 'en' ? 'Built for your industry' : 'Construido para tu industria'}
              </h2>
              <p
                className="text-lg"
                style={{
                  fontSize: '18px',
                  color: mutedText,
                }}
              >
                {language === 'en'
                  ? 'Voice agents that understand the specific needs of your business. No generic solutions, just targeted results.'
                  : 'Agentes de voz que entienden las necesidades específicas de tu negocio. Sin soluciones genéricas, solo resultados dirigidos.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.id} variant="fade-up" delay={index * 100}>
                <IndustryCard industry={industry} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative isolate py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundColor: altBgColor,
        }}
      >
        <DotPattern color="#302289" accentColor="#76f6f5" spacing={16} opacity={0.65} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{
                fontSize: '48px',
                lineHeight: '1.2',
                letterSpacing: '-0.48px',
                color: textColor,
              }}
            >
              {language === 'en' ? 'See it in action' : 'Véalo en acción'}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <p
              className="text-lg mb-8"
              style={{
                fontSize: '18px',
                color: mutedText,
              }}
            >
              {language === 'en'
                ? 'Start your free trial today. No credit card required. See results in 24 hours.'
                : 'Comienza tu prueba gratuita hoy. No se requiere tarjeta de crédito. Ve resultados en 24 horas.'}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="sm:px-10 sm:py-3.5 glow-hover">
                {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
