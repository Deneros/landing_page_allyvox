'use client';

import { useState } from 'react';

/**
 * Logos de integraciones servidos por Simple Icons, en monocromo claro para
 * que el muro se lea como un sistema y no como marcas peleando por atencion.
 *
 * Solo se listan slugs verificados contra el CDN. Simple Icons retira marcas
 * cada cierto tiempo por politica de marca registrada (Salesforce, Pipedrive
 * y Slack ya no estan), asi que cada logo se oculta solo si falla la carga
 * en vez de dejar un icono roto en la cinta.
 */
const LOGO_COLOR = 'c9c2e8';

export interface BrandMark {
  slug: string;
  name: string;
}

export const INTEGRATION_MARKS: BrandMark[] = [
  { slug: 'hubspot', name: 'HubSpot' },
  { slug: 'zapier', name: 'Zapier' },
  { slug: 'make', name: 'Make' },
  { slug: 'n8n', name: 'n8n' },
  { slug: 'googlecalendar', name: 'Google Calendar' },
  { slug: 'googlesheets', name: 'Google Sheets' },
  { slug: 'whatsapp', name: 'WhatsApp' },
  { slug: 'notion', name: 'Notion' },
  { slug: 'airtable', name: 'Airtable' },
  { slug: 'zoho', name: 'Zoho' },
];

export function BrandLogo({ mark, hidden = false }: { mark: BrandMark; hidden?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG externo de tamano fijo; el optimizador de Next no aporta nada.
    <img
      src={`https://cdn.simpleicons.org/${mark.slug}/${LOGO_COLOR}`}
      alt={hidden ? '' : mark.name}
      aria-hidden={hidden || undefined}
      width={32}
      height={32}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-8 w-8 shrink-0 opacity-55 transition-opacity duration-300 hover:opacity-100"
    />
  );
}
