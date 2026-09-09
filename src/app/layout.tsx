import type { Metadata } from 'next';
import { Raleway, Montserrat, Source_Serif_4 } from 'next/font/google';
import { AppShell } from '@/components/layout/AppShell';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Solo la italica: se usa unicamente en la palabra de enfasis de cada titular.
const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  display: 'swap',
});

// TODO(dominio): cambiar metadataBase por el dominio real antes de publicar.
export const metadata: Metadata = {
  metadataBase: new URL('https://voxally.com'),
  title: {
    default: 'VoxAlly | Agentes de voz con IA que atienden cada llamada',
    template: '%s | VoxAlly',
  },
  description:
    'VoxAlly atiende tus llamadas, WhatsApp y SMS con agentes de IA, califica cada prospecto y agenda la reunión en tu calendario. Con CRM y analítica integrados.',
  applicationName: 'VoxAlly',
  openGraph: {
    type: 'website',
    siteName: 'VoxAlly',
    locale: 'es_ES',
    title: 'VoxAlly | Agentes de voz con IA que atienden cada llamada',
    description:
      'Voz, WhatsApp y SMS atendidos por un solo agente de IA, con CRM y analítica integrados.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoxAlly | Agentes de voz con IA que atienden cada llamada',
    description:
      'Voz, WhatsApp y SMS atendidos por un solo agente de IA, con CRM y analítica integrados.',
  },
  // TODO(og): anadir una imagen og de 1200x630 en /public y referenciarla aqui.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${raleway.variable} ${montserrat.variable} ${sourceSerif.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
