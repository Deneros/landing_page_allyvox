'use client';

import { useLayout } from '@/lib/context';
import { translations } from '@/lib/translations';

export function SocialLinks() {
  const { language, theme, textColor } = useLayout();
  const t = translations[language];

  const socialPlatforms = [
    {
      label: 'Facebook',
      url: 'https://facebook.com',
      color: '#1877F2',
      invertOnHover: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com',
      color: '#E4405F',
      invertOnHover: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.83" ry="4.83" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12.06" cy="12.06" r="3.56" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18.41" cy="5.65" r="0.88" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: 'X',
      url: 'https://x.com',
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
      invertOnHover: true,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694H2.882l7.732-8.835L1.227 2.25h6.802l4.608 6.086L18.244 2.25zM17.51 19.389h1.823L5.9 4.153H4.016l13.494 15.236z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/company/voxally',
      color: '#0A66C2',
      invertOnHover: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.433-.668 1.202-1.618 2.923-1.618 2.136 0 3.74 1.393 3.74 4.385v5.596zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.956.769-1.71 1.959-1.71 1.187 0 1.915.754 1.94 1.71 0 .951-.753 1.71-1.984 1.71zm1.575 10.019H3.762V9.678h3.15v9.774zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com',
      color: '#FF0000',
      invertOnHover: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h4 className="font-semibold mb-4 sm:mb-6 text-base" style={{ color: textColor }}>
        {t.footer.followUs}
      </h4>
      <div className="flex flex-col gap-3">
        {socialPlatforms.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-1 transition-all duration-200"
            style={{ color: textColor }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = social.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
            }}
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              {social.icon}
            </div>
            <span className="text-sm font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
