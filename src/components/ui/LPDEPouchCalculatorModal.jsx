import React, { useEffect, useRef, useState } from 'react';

export default function LPDEPouchCalculatorModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose?.(); }
    function onClick(e) {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) onClose?.();
    }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('mousedown', onClick);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open, onClose]);

  function canSubmit() {
    return length && width && thickness;
  }

  function onSubmit(e) {
    e.preventDefault();
    const L = Number(length);
    const W = Number(width);
    const T = Number(thickness);
    if (!L || !W || !T) return;
    // pieces per kg formula
    const pieces = Math.round(10000000 / (L * W * T * 0.92));
    setResult(String(pieces));
  }

  return (
    <div
      aria-hidden={!open}
      className={[
        'fixed inset-0 z-50 flex items-start justify-center md:items-center',
        'transition-opacity duration-200',
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
      ].join(' ')}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lpde-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Panel */}
      <div
        ref={dialogRef}
        className={[
          'relative mx-4 my-8 w-full max-w-[520px]',
          'bg-[#1d2751] text-white rounded-md shadow-xl',
          'transform transition-transform duration-200',
          open ? 'translate-y-0' : '-translate-y-4',
        ].join(' ')}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 text-white/80 hover:text-white text-xl"
        >
          ×
        </button>
        <div className="p-6">
          <h2 id="lpde-title" className="text-2xl font-bold mb-2">LPDE POUCH CALCULATOR</h2>
          <p className="text-white/90 mb-6">Calculate No. of pc wrt size<br />"*" indicates required fields</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold">Length*</label>
              <input
                type="number"
                inputMode="decimal"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length (mm)"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Width*</label>
              <input
                type="number"
                inputMode="decimal"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter width (mm)"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Thickness*</label>
              <input
                type="number"
                inputMode="decimal"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
                placeholder="Enter thickness (microns)"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit()}
              className="w-full border-2 border-white text-white font-bold py-3 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              SUBMIT
            </button>

            <div>
              <label className="block mb-2 font-semibold">Piece/Kg* (+/- 5 pc)</label>
              <input
                readOnly
                value={result}
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                placeholder="Auto Calculated field"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


