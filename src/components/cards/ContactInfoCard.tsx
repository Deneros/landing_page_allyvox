'use client';

import { useLayout } from '@/lib/context';
import { BRAND_COLOR } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItem {
  type: 'email' | 'phone' | 'address';
  label: string;
  value: string;
}

interface ContactInfoCardProps {
  items: ContactInfoItem[];
}

export function ContactInfoCard({ items }: ContactInfoCardProps) {
  const { textColor, mutedText } = useLayout();

  const iconBg = 'rgba(255,255,255,0.05)';

  const getIcon = (type: ContactInfoItem['type']) => {
    switch (type) {
      case 'email':
        return <Mail size={18} style={{ color: BRAND_COLOR }} />;
      case 'phone':
        return <Phone size={18} style={{ color: BRAND_COLOR }} />;
      case 'address':
        return <MapPin size={18} style={{ color: BRAND_COLOR }} />;
    }
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: iconBg }}
          >
            {getIcon(item.type)}
          </div>
          <div className="space-y-1">
            <p
              className="text-sm font-semibold"
              style={{ color: textColor }}
            >
              {item.label}
            </p>
            <p
              className="text-sm"
              style={{ color: mutedText }}
            >
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
