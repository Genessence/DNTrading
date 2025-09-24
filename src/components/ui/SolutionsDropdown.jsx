import React, { useEffect, useRef } from 'react';

const Heading = ({ children }) => (
  <h3 className="text-white font-bold uppercase text-[24px] leading-[1.5] mb-4">{children}</h3>
);

const List = ({ items, highlight }) => (
  <ul className="space-y-2" role="list">
    {items.map((item) => (
      <li key={item}>
        <a
          href="#"
          className={[
            'text-[16px] leading-[1.5] focus:outline-none focus:ring-2 focus:ring-[#5de0e6] rounded-sm',
            item === highlight ? 'text-white text-[20px]' : 'text-white/95 hover:text-white',
          ].join(' ')}
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default function SolutionsDropdown({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    }
    function onKey(e) {
      if (!open) return;
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={[
        'fixed left-0 right-0 top-[64px] md:top-[64px] z-40',
        'transform transition-all duration-200 ease-in-out',
        open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none',
      ].join(' ')}
      role="dialog"
      aria-modal="false"
    >
      <div
        ref={ref}
        className="w-full bg-[#002ea0] border-t-4"
        style={{ borderTopColor: '#5de0e6' }}
      >
        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-[1200px] px-5 py-5">
            <div className="grid grid-cols-4 gap-x-10">
              <div>
                <Heading>All Solutions</Heading>
              </div>

              <div>
                <Heading>Industries</Heading>
                <List
                  items={[
                    'Consumer Goods',
                    'Industrial Products',
                    'Retail and Wholesale',
                    'E-Commerce',
                    'Logistics',
                    'Medical and Life Sciences',
                    'Food and Beverage',
                    'Automotive',
                  ]}
                  highlight="Automotive"
                />
              </div>

              <div>
                <Heading>Custom Packaging Solutions</Heading>
                <List items={[
                  'Custom Boxes',
                  'Custom Inserts',
                  'Custom Bags',
                  'Custom Tapes',
                ]} />
              </div>

              <div>
                <Heading>Sustainable Packaging</Heading>
                <p className="text-white text-[16px] leading-[1.5]">
                  100% Industrial Biodegradable compostable pouches/bags
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden px-5 py-5">
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-bold uppercase text-[20px]">All Solutions</summary>
          </details>
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-bold uppercase text-[20px]">Industries</summary>
            <List
              items={[
                'Consumer Goods',
                'Industrial Products',
                'Retail and Wholesale',
                'E-Commerce',
                'Logistics',
                'Medical and Life Sciences',
                'Food and Beverage',
                'Automotive',
              ]}
              highlight="Automotive"
            />
          </details>
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-bold uppercase text-[20px]">Custom Packaging Solutions</summary>
            <List items={[
              'Custom Boxes',
              'Custom Inserts',
              'Custom Bags',
              'Custom Tapes',
            ]} />
          </details>
          <details className="py-3">
            <summary className="text-white font-bold uppercase text-[20px]">Sustainable Packaging</summary>
            <p className="text-white text-[16px] leading-[1.5] mt-3">
              100% Industrial Biodegradable compostable pouches/bags
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}


