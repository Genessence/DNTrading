import React, { useEffect, useRef } from 'react';

const Section = ({ title, items }) => (
  <div className="min-w-[220px]">
    <h3 className="text-white font-bold uppercase text-[24px] leading-[1.5] mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item}>
          <a href="#" className="text-white/95 hover:text-white text-[16px] leading-[1.5]">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function SuppliesDropdown({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (ref.current && !ref.current.contains(e.target)) {
        onClose?.();
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={[
        'fixed left-0 right-0 top-[64px] md:top-[64px] z-40',
        'transform transition-transform duration-200 ease-in-out',
        open ? 'translate-y-0' : '-translate-y-4 pointer-events-none opacity-0',
      ].join(' ')}
    >
      <div
        ref={ref}
        className="w-full bg-[#002ea0] border-t-4"
        style={{ borderTopColor: '#5de0e6' }}
      >
        {/* Desktop grid */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-[1200px] px-5 py-5">
            <h2 className="text-white font-bold uppercase text-[24px] leading-[1.5] mb-6">All Supplies</h2>
            <div className="grid grid-cols-4 gap-x-10">
              <Section
                title="Boxes & Containers"
                items={['Boxes', 'Bins & Containers', 'Tubes', 'Trays', 'Custom Corrugated Design']}
              />
              <Section
                title="Bags"
                items={['Flat Bags', 'Gusseted Bags', 'Reclosable Bags', 'Autobag® Bags', 'Bubble Bags', 'Foam Bags', 'Other Bags']}
              />
              <Section
                title="Protective Packaging"
                items={['Paper Packaging', 'Air Pillows', 'Bubble Wrap', 'Foam', 'Pads & Sheets']}
              />
              <Section
                title="Tapes & Adhesives"
                items={[
                  'Carton Sealing Tape',
                  'Water Activated Tape',
                  'Cloth & Duct Tape',
                  'Filament Tape',
                  'Paper Masking Tape',
                  'Other Tapes',
                ]}
              />
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden px-5 py-5">
          <h2 className="text-white font-bold uppercase text-[24px] leading-[1.5] mb-4">All Supplies</h2>
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-semibold uppercase">Boxes & Containers</summary>
            <ul className="mt-3 space-y-2">
              {['Boxes', 'Bins & Containers', 'Tubes', 'Trays', 'Custom Corrugated Design'].map((x) => (
                <li key={x}><a className="text-white/90" href="#">{x}</a></li>
              ))}
            </ul>
          </details>
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-semibold uppercase">Bags</summary>
            <ul className="mt-3 space-y-2">
              {['Flat Bags', 'Gusseted Bags', 'Reclosable Bags', 'Autobag® Bags', 'Bubble Bags', 'Foam Bags', 'Other Bags'].map((x) => (
                <li key={x}><a className="text-white/90" href="#">{x}</a></li>
              ))}
            </ul>
          </details>
          <details className="border-b border-white/20 py-3">
            <summary className="text-white font-semibold uppercase">Protective Packaging</summary>
            <ul className="mt-3 space-y-2">
              {['Paper Packaging', 'Air Pillows', 'Bubble Wrap', 'Foam', 'Pads & Sheets'].map((x) => (
                <li key={x}><a className="text-white/90" href="#">{x}</a></li>
              ))}
            </ul>
          </details>
          <details className="py-3">
            <summary className="text-white font-semibold uppercase">Tapes & Adhesives</summary>
            <ul className="mt-3 space-y-2">
              {[
                'Carton Sealing Tape',
                'Water Activated Tape',
                'Cloth & Duct Tape',
                'Filament Tape',
                'Paper Masking Tape',
                'Other Tapes',
              ].map((x) => (
                <li key={x}><a className="text-white/90" href="#">{x}</a></li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}


