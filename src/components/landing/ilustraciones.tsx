import { Check, Phone, Sparkles } from 'lucide-react';
import { INTEGRATION_MARKS } from '@/components/ui/BrandMarks';

/**
 * Ilustraciones de producto.
 *
 * No son capturas. Cada funcionalidad se dibuja con los tokens de la marca,
 * porque las tres ultimas (memoria, analisis, integraciones) no tienen una
 * pantalla que las represente: capturar una tabla para ilustrar "memoria" no
 * explica nada. Al ser HTML se ven nitidas a cualquier resolucion, siguen el
 * tema y no pesan nada.
 *
 * Las cifras y los nombres son de ejemplo y estan escogidos para que se lean
 * como una operacion normal, no como una cuenta recien creada.
 */

const CHIP = 'rounded-full border border-[var(--lv-line)] bg-[var(--lv-card)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-1)] shadow-[0_6px_16px_-8px_rgba(23,16,46,.28)]';
const TARJETA = 'rounded-xl border border-[var(--lv-line)] bg-[var(--lv-card)] shadow-[0_10px_30px_-18px_rgba(23,16,46,.35)]';

function Lienzo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(160deg,#fbfaff,#f3f0fc)]">
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-48 w-48 rounded-full opacity-70 blur-3xl"
        style={{ background: 'var(--lv-halo)' }}
      />
      {children}
    </div>
  );
}

/** Agentes de voz: canales arriba, conversacion y una llamada viva encima. */
export function IlustracionAgentes() {
  return (
    <Lienzo>
      <div className="absolute left-1/2 top-5 flex -translate-x-1/2 gap-1.5">
        {[
          { t: 'Llamada', on: false },
          { t: 'WhatsApp', on: true },
          { t: 'SMS', on: false },
          { t: 'IA', on: false },
        ].map((c) => (
          <span
            key={c.t}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${
              c.on
                ? 'bg-[var(--lv-accent-fill)] text-white'
                : 'border border-[var(--lv-line)] bg-[var(--lv-card)] text-[var(--text-2)]'
            }`}
          >
            {c.t}
          </span>
        ))}
      </div>

      <div className={`absolute left-[14%] right-[6%] top-[24%] ${TARJETA} p-4`}>
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--lv-accent-deep)] text-[11px] font-bold text-white">
            LM
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[var(--text-0)]">Laura Méndez</p>
            <p className="truncate text-[11px] text-[var(--text-2)]">WhatsApp · +57 310 555 0142</p>
          </div>
          <span className="ml-auto shrink-0 rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-semibold text-[var(--lv-accent-text)]">
            Responde en ~4 s
          </span>
        </div>

        <p className="mt-4 max-w-[78%] rounded-2xl rounded-tl-md bg-[var(--surface-1)] px-3 py-2 text-[12px] leading-snug text-[var(--text-1)]">
          ¿Tienen disponibilidad esta semana para una demo?
        </p>
        <p className="ml-auto mt-2 max-w-[82%] rounded-2xl rounded-tr-md bg-[var(--lv-accent-fill)] px-3 py-2 text-[12px] leading-snug text-white">
          Claro, Laura. El jueves a las 11:00 o el viernes a las 15:30, ¿cuál le sirve?
        </p>
      </div>

      <div className={`absolute bottom-[12%] left-[4%] ${TARJETA} w-[190px] rotate-[-4deg] p-3`}>
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--lv-accent-fill)]">
            <Phone className="h-3 w-3 text-white" aria-hidden />
          </span>
          <span className="text-[12px] font-semibold text-[var(--text-0)]">Llamada en vivo</span>
          <span className="ml-auto flex items-center gap-1 text-[9px] font-bold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> EN VIVO
          </span>
        </div>
        <div className="mt-2.5 flex h-6 items-end gap-[3px]">
          {[5, 11, 7, 16, 9, 20, 12, 8, 15, 6, 13, 9].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-[var(--lv-accent-fill)]" style={{ height: h }} />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-2)]">
          <span>Calificando prospecto</span>
          <span className="font-semibold text-[var(--text-1)]">02:47</span>
        </div>
      </div>
    </Lienzo>
  );
}

const COLUMNAS = [
  { t: 'Nuevo', n: 7, color: 'bg-slate-400', filas: [
    { n: 'Jorge Palma', q: '"Vi su anuncio, ¿qué planes tienen?"', c: 'WhatsApp · hace 6 min' },
    { n: 'Rita Duarte', q: 'Llamada perdida — seguimiento enviado', c: 'Llamada · hace 18 min' },
  ] },
  { t: 'Calificado', n: 9, color: 'bg-amber-400', filas: [
    { n: 'Ana Solís', q: 'Presupuesto aprobado, enviar propuesta', c: 'WhatsApp · hace 1 h' },
    { n: 'Elena Ortiz', q: '"¿Me llaman después de las 6?"', c: 'Llamada · hace 2 h' },
  ] },
  { t: 'Agendado', n: 5, color: 'bg-[var(--lv-accent-fill)]', filas: [
    { n: 'Marco Trejo', q: 'Demo agendada — viernes 15:30', c: 'SMS · hace 2 h' },
    { n: 'Carla Vega', q: 'Recordatorio confirmado', c: 'WhatsApp · hace 3 h' },
  ] },
];

/** CRM: tablero con una tarjeta en movimiento y su hueco de destino. */
export function IlustracionCrm() {
  return (
    <Lienzo>
      <div className="absolute left-[5%] right-[3%] top-5 flex items-center gap-2">
        <span className="text-[13px] font-semibold text-[var(--text-0)]">Salesflow</span>
        <span className="rounded-full bg-[var(--surface-2)] px-2 py-0.5 text-[10px] font-semibold text-[var(--lv-accent-text)]">
          24 prospectos
        </span>
      </div>

      <div className="absolute left-[5%] right-[-4%] top-[16%] flex gap-2.5">
        {COLUMNAS.map((col) => (
          <div key={col.t} className="w-[31%] shrink-0">
            <div className="mb-2 flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
              <span className="text-[11px] font-semibold text-[var(--text-1)]">{col.t}</span>
              <span className="ml-auto text-[10px] text-[var(--text-2)]">{col.n}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.filas.map((f) => (
                <div key={f.n} className={`${TARJETA} p-2.5`}>
                  <p className="text-[11px] font-semibold text-[var(--text-0)]">{f.n}</p>
                  <p className="mt-1 text-[10px] leading-snug text-[var(--text-2)]">{f.q}</p>
                  <p className="mt-1.5 text-[9px] font-medium text-[var(--lv-accent-text)]">{f.c}</p>
                </div>
              ))}
              {col.t === 'Calificado' && (
                <div className="h-[52px] rounded-xl border-2 border-dashed border-[var(--line-strong)] bg-[var(--surface-2)]" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={`absolute bottom-[16%] left-[38%] w-[168px] rotate-[3deg] ${TARJETA} border-[var(--lv-accent-fill)] p-2.5`}>
        <div className="flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--lv-accent-deep)] text-[8px] font-bold text-white">
            DR
          </span>
          <span className="text-[11px] font-semibold text-[var(--text-0)]">Diego Ríos</span>
          <span className="ml-auto rounded-full bg-[var(--lv-accent-fill)] px-1.5 py-0.5 text-[8px] font-bold text-white">
            Moviendo
          </span>
        </div>
        <p className="mt-1 text-[10px] text-[var(--text-2)]">La IA lo pasó a Agendado</p>
      </div>
    </Lienzo>
  );
}

/** Memoria: el cliente en el centro y lo que la IA recuerda alrededor. */
export function IlustracionMemoria() {
  return (
    <Lienzo>
      <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--surface-2)]" />
      <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--surface-3)]" />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--lv-accent-deep)] text-[15px] font-bold text-white shadow-[0_12px_30px_-12px_rgba(85,38,180,.7)]">
          LM
        </span>
        <span className="text-[13px] font-semibold text-[var(--text-0)]">Laura Méndez</span>
        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          <Check className="h-2.5 w-2.5" aria-hidden /> Historial completo
        </span>
      </div>

      <span className={`absolute left-[4%] top-[22%] ${CHIP}`}>Presupuesto · $12K</span>
      <span className={`absolute right-[6%] top-[14%] ${CHIP}`}>Prefiere los jueves</span>
      <span className={`absolute bottom-[20%] left-[8%] ${CHIP}`}>Todos los canales</span>
      <span className={`absolute bottom-[13%] right-[7%] ${CHIP}`}>3 llamadas previas</span>
    </Lienzo>
  );
}

const NODOS_IZQ = ['Informes', 'KPIs', 'Sentimiento'];
const NODOS_DER = ['Puntuación', 'Gráficas', 'Disposiciones'];

/** Analisis: un documento en el centro del que salen las salidas del agente. */
export function IlustracionAnalisis() {
  return (
    <Lienzo>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 260" fill="none" aria-hidden>
        {[70, 130, 190].map((y, i) => (
          <path key={`i${i}`} d={`M92 ${y} C120 ${y}, 128 130, 138 130`} stroke="var(--lv-line)" strokeWidth="1.5" />
        ))}
        {[70, 130, 190].map((y, i) => (
          <path key={`d${i}`} d={`M182 130 C192 130, 200 ${y}, 228 ${y}`} stroke="var(--lv-line)" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 grid h-[74px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-[var(--lv-accent-fill)] bg-[var(--lv-card)] shadow-[0_14px_34px_-16px_rgba(85,38,180,.5)]">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--lv-accent-fill)]">
          <Sparkles className="h-4 w-4 text-white" aria-hidden />
        </span>
      </div>

      {NODOS_IZQ.map((t, i) => (
        <span key={t} className={`absolute left-[4%] ${CHIP}`} style={{ top: `${19 + i * 23}%` }}>
          {t}
        </span>
      ))}
      {NODOS_DER.map((t, i) => (
        <span key={t} className={`absolute right-[4%] ${CHIP}`} style={{ top: `${19 + i * 23}%` }}>
          {t}
        </span>
      ))}
    </Lienzo>
  );
}

const ORBITA = [
  { i: 0, x: '50%', y: '6%' },
  { i: 1, x: '86%', y: '26%' },
  { i: 6, x: '86%', y: '66%' },
  { i: 4, x: '50%', y: '86%' },
  { i: 3, x: '12%', y: '66%' },
  { i: 2, x: '12%', y: '26%' },
];

/** Integraciones: la marca en el centro y las herramientas en orbita. */
export function IlustracionIntegraciones() {
  return (
    <Lienzo>
      <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--lv-line)]" />
      <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--surface-2)]" />

      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-[var(--lv-accent-deep)] text-[17px] font-bold text-white shadow-[0_14px_36px_-14px_rgba(85,38,180,.75)]">
        V
      </span>

      {ORBITA.map(({ i, x, y }) => {
        const marca = INTEGRATION_MARKS[i % INTEGRATION_MARKS.length];
        return (
          <span
            key={marca.slug}
            className="absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-[var(--lv-line)] bg-[var(--lv-card)] shadow-[0_10px_26px_-14px_rgba(23,16,46,.45)]"
            style={{ left: x, top: y }}
            title={marca.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${marca.slug}`}
              alt={marca.name}
              width={20}
              height={20}
              loading="lazy"
              className="h-5 w-5"
            />
          </span>
        );
      })}
    </Lienzo>
  );
}
