'use client';

import { useLayout } from '@/lib/context';
import { BRAND_COLOR } from '@/lib/constants';
import { Check, Minus } from 'lucide-react';

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

export interface ComparisonTableProps {
  rows: ComparisonRow[];
  starterPrice: string;
  professionalPrice: string;
  enterprisePrice: string;
  starterLabel: string;
  professionalLabel: string;
  enterpriseLabel: string;
  periodLabel?: string;
}

export function ComparisonTable({
  rows,
  starterPrice,
  professionalPrice,
  enterprisePrice,
  starterLabel,
  professionalLabel,
  enterpriseLabel,
  periodLabel,
}: ComparisonTableProps) {
  const { textColor, mutedText, borderColor } = useLayout();

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={18} style={{ color: BRAND_COLOR }} />
      ) : (
        <Minus size={18} style={{ color: `${textColor}66` }} />
      );
    }
    return (
      <span className="text-sm font-medium" style={{ color: textColor }}>
        {value}
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        {/* Header */}
        <thead>
          <tr style={{ borderBottom: `1px solid ${borderColor}` }}>
            <th className="w-[300px] py-5 text-left"></th>
            <th className="py-5 text-center min-w-[150px]">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium" style={{ color: mutedText }}>
                  {starterLabel}
                </span>
                <span className="text-3xl font-bold" style={{ color: textColor }}>
                  {starterPrice}
                </span>
                {periodLabel && (
                  <span className="text-xs" style={{ color: `${textColor}66` }}>
                    {periodLabel}
                  </span>
                )}
              </div>
            </th>
            <th
              className="py-5 text-center min-w-[150px]"
              style={{ backgroundColor: `${BRAND_COLOR}33` }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium" style={{ color: mutedText }}>
                  {professionalLabel}
                </span>
                <span className="text-3xl font-bold" style={{ color: textColor }}>
                  {professionalPrice}
                </span>
                {periodLabel && (
                  <span className="text-xs" style={{ color: `${textColor}66` }}>
                    {periodLabel}
                  </span>
                )}
              </div>
            </th>
            <th className="py-5 text-center min-w-[150px]">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium" style={{ color: mutedText }}>
                  {enterpriseLabel}
                </span>
                <span className="text-3xl font-bold" style={{ color: textColor }}>
                  {enterprisePrice}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        {/* Body */}
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <td className="py-4 pr-4">
                <span className="text-sm" style={{ color: mutedText }}>
                  {row.feature}
                </span>
              </td>
              <td className="py-4 text-center">
                <div className="flex justify-center">
                  {renderValue(row.starter)}
                </div>
              </td>
              <td
                className="py-4 text-center"
                style={{ backgroundColor: `${BRAND_COLOR}33` }}
              >
                <div className="flex justify-center">
                  {renderValue(row.professional)}
                </div>
              </td>
              <td className="py-4 text-center">
                <div className="flex justify-center">
                  {renderValue(row.enterprise)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
