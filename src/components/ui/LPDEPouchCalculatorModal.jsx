import React, { useEffect, useRef, useState } from 'react';

// DEFAULT calibration constant (set so 20×20×50 => 24.24 g)
const K_DEFAULT = 0.001212;

// Calibration helper function
function calibrateKFromSample(knownGm, L, W, T) {
  return Number((knownGm / (L * W * T)).toFixed(6));
}

// Core calculation function
function calculatePouch(L, W, T, K = K_DEFAULT) {
  // Basic validation
  L = Number(L); W = Number(W); T = Number(T);
  if (!isFinite(L) || !isFinite(W) || !isFinite(T) || L <= 0 || W <= 0 || T <= 0) {
    return { gmPerPiece: null, pcPerKg: null, devPlus: null, devMinus: null, error: "Invalid input" };
  }

  // Core formula: gmPerPiece = K * L * W * T
  const gmRaw = K * L * W * T;
  
  // Handle edge case: if gmRaw < 0.001, show 4 decimal places
  const gmPerPieceFormatted = gmRaw < 0.001 ? Number(gmRaw.toFixed(4)) : Number(gmRaw.toFixed(2));

  // pieces per kg (rounded to nearest integer)
  const pcPerKg = Math.round(1000 / gmRaw);

  // deviations +/- 5 pieces
  const devPlus = pcPerKg + 5;
  const devMinus = Math.max(0, pcPerKg - 5);

  return { 
    gmPerPiece: gmPerPieceFormatted, 
    pcPerKg, 
    devPlus, 
    devMinus 
  };
}

export default function LPDEPouchCalculatorModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [gmPerPc, setGmPerPc] = useState('');
  const [pcPerKg, setPcPerKg] = useState('');
  const [devPlus, setDevPlus] = useState('');
  const [devMinus, setDevMinus] = useState('');
  const [error, setError] = useState('');

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

  // Real-time calculation on input change
  useEffect(() => {
    if (length && width && thickness) {
      const result = calculatePouch(length, width, thickness);
      if (result.error) {
        setError(result.error);
        setGmPerPc('');
        setPcPerKg('');
        setDevPlus('');
        setDevMinus('');
      } else {
        setError('');
        setGmPerPc(result.gmPerPiece.toString());
        setPcPerKg(result.pcPerKg.toString());
        setDevPlus(result.devPlus.toString());
        setDevMinus(result.devMinus.toString());
      }
    } else {
      setError('');
      setGmPerPc('');
      setPcPerKg('');
      setDevPlus('');
      setDevMinus('');
    }
  }, [length, width, thickness]);

  function canSubmit() {
    return length && width && thickness && !error;
  }

  function onSubmit(e) {
    e.preventDefault();
    // Calculation is already done in useEffect, just prevent default
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
          <h2 id="lpde-title" className="text-2xl font-bold mb-2">LDPE POUCH CALCULATOR</h2>
          <p className="text-white/90 mb-6">Compute weight per piece and pieces per kg<br />"*" indicates required fields</p>

          <form onSubmit={onSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-200 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="block mb-2 font-semibold">Length*</label>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0.01"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
                required
                aria-label="Length input"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Width*</label>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0.01"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter width"
                required
                aria-label="Width input"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Thickness*</label>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0.01"
                className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg"
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
                placeholder="Enter thickness"
                required
                aria-label="Thickness input"
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit()}
              className="w-full border-2 border-white text-white font-bold py-3 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              CALCULATE
            </button>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block mb-2 font-semibold">Weight per piece (gm/pc)</label>
                <input 
                  readOnly 
                  value={gmPerPc || "—"} 
                  className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg" 
                  placeholder="Auto Calculated"
                  aria-label="Weight per piece result"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Pieces per kg (Pc/kg)</label>
                <input 
                  readOnly 
                  value={pcPerKg || "—"} 
                  className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg" 
                  placeholder="Auto Calculated"
                  aria-label="Pieces per kg result"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-2 font-semibold">Deviation (+5)</label>
                  <input 
                    readOnly 
                    value={devPlus || "—"} 
                    className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg" 
                    placeholder="Auto Calculated"
                    aria-label="Deviation plus 5 result"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Deviation (-5)</label>
                  <input 
                    readOnly 
                    value={devMinus || "—"} 
                    className="w-full rounded-sm bg-white text-black px-3 py-3 text-lg" 
                    placeholder="Auto Calculated"
                    aria-label="Deviation minus 5 result"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


