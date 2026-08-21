import type { LandingCopy } from '@/lib/copy/landing';
import { BrandLogo, INTEGRATION_MARKS } from '@/components/ui/BrandMarks';
import { Marquee } from '../Marquee';
import { Rise } from '../motion';

/**
 * Cinta de logos bajo el hero.
 *
 * TODO(logos): el sitio de referencia pone aqui logos de clientes. Estos son de
 * integraciones, que si podemos afirmar. Cuando haya clientes que autoricen su
 * marca, se cambia la fuente de datos y el titular, y el layout no se toca.
 */
export function LogoWall({ copy }: { copy: LandingCopy['logos'] }) {
  return (
    <section className="border-y border-[var(--lv-line-soft)] bg-[var(--surface-1)]/40 py-14">
      <Rise>
        <p className="px-6 text-center text-[15px] text-[var(--text-2)]">{copy.title}</p>
      </Rise>

      <Marquee duration={44} className="mt-9">
        {INTEGRATION_MARKS.map((mark, i) => (
          <span key={`${mark.slug}-${i}`} className="flex items-center">
            <BrandLogo mark={mark} />
            <span aria-hidden className="mx-10 h-8 w-px bg-[var(--lv-line-soft)] md:mx-14" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
