import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { LandingCopy, PricingPlan } from '@/lib/copy/landing';
import { Action, Heading, Section } from '../primitives';
import { Rise, RiseGroup, RiseItem } from '../motion';

/**
 * Tres planes, los mismos que muestra /pricing. El destacado se eleva y lleva
 * cabecera tintada y el unico boton solido; los demas usan boton fantasma para
 * que solo haya una llamada dominante por fila.
 *
 * Los importes viven en src/lib/copy/landing/{es,en}.ts y deben coincidir con
 * los de src/lib/translations.ts, que alimenta /pricing.
 */
export function Pricing({ copy }: { copy: LandingCopy['pricing'] }) {
  return (
    <Section id="precios">
      <Rise className="mx-auto max-w-[720px] text-center">
        <Heading title={copy.title} className="text-[clamp(2rem,4.6vw,3.5rem)]" />
        <p className="mx-auto mt-6 max-w-[480px] text-[17px] leading-relaxed text-[var(--text-1)]">
          {copy.description}
        </p>
      </Rise>

      <RiseGroup className="mt-14 grid items-start gap-5 md:grid-cols-3" stagger={0.07}>
        {copy.plans.map((plan) => (
          <RiseItem key={plan.name} className={plan.featured ? 'xl:-mt-6' : ''}>
            <PlanCard plan={plan} />
          </RiseItem>
        ))}
      </RiseGroup>

      <Rise className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading title={copy.addons.title} as="h3" className="text-[clamp(1.5rem,2.8vw,2.15rem)]" />
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--lv-accent-text)] transition-colors hover:text-[var(--lv-accent-fill-hover)]"
          >
            {copy.addons.link}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <RiseGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
          {copy.addons.items.map((addon) => (
            <RiseItem
              key={addon.title}
              className="rounded-[var(--lv-radius-card)] border border-[var(--lv-line-soft)] bg-[var(--lv-card)] p-6"
            >
              <h4 className="text-[16px] font-semibold text-[var(--text-0)]">{addon.title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-1)]">{addon.description}</p>
            </RiseItem>
          ))}
        </RiseGroup>
      </Rise>
    </Section>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[var(--lv-radius-card)] border ${
        plan.featured
          ? 'border-[var(--line-strong)] bg-[var(--lv-card)] shadow-[var(--lv-shadow-feature)]'
          : 'border-[var(--lv-line-soft)] bg-[var(--lv-card)]'
      }`}
    >
      <div
        className="border-b border-[var(--lv-line-soft)] px-7 py-8"
        style={
          plan.featured
            ? {
                background:
                  'linear-gradient(135deg, rgba(169,61,232,0.22), rgba(85,38,180,0.12) 65%, transparent)',
              }
            : undefined
        }
      >
        <p className="text-[14px] font-semibold text-[var(--lv-accent-text)]">{plan.name}</p>
        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="lv-display text-[46px] text-[var(--text-0)]">{plan.price}</span>
          <span className="text-[14px] text-[var(--text-2)]">{plan.period}</span>
        </p>
        <p className="mt-2 text-[13px] text-[var(--text-2)]">{plan.billing}</p>
      </div>

      <div className="flex flex-1 flex-col px-7 py-7">
        <p className="text-[14px] leading-relaxed text-[var(--text-1)]">{plan.description}</p>

        <div className="mt-6">
          <Action
            href="/contact"
            variant={plan.featured ? 'primary' : 'ghost'}
            className="w-full py-3 text-[14px]"
          >
            {plan.cta}
          </Action>
          {plan.note && (
            <p className="mt-3 text-center text-[12px] text-[var(--text-2)]">{plan.note}</p>
          )}
        </div>

        <div className="mt-7 border-t border-[var(--lv-line-soft)] pt-6">
          {plan.inherits && (
            <p className="mb-4 text-[14px] font-semibold text-[var(--text-1)]">{plan.inherits}</p>
          )}
          <ul className="flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lv-accent-text)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span className="text-[14px] leading-relaxed text-[var(--text-1)]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
