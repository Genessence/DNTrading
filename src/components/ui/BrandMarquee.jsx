import React from 'react';

/*
  BrandMarquee
  - Infinite, seamless marquee for client logos/names
  - Props:
    - items: Array<{ src?: string, name?: string, alt?: string }>
    - background: 'transparent' | 'white' | string (custom color)
    - loopSeconds: number (default 20)
*/
export default function BrandMarquee({ items = [], background = 'transparent', loopSeconds = 20 }) {
  // Duplicate the list to create the seamless loop
  const track = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background }}
      role="region"
      aria-label="Client logos carousel"
    >
      {/* Local keyframes for marquee */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="group relative"
        // Pause on hover/focus using CSS
      >
        <div
          className="flex"
          style={{
            animation: `marquee-scroll ${loopSeconds}s linear infinite`,
            // Pause on hover or when any child receives focus
            animationPlayState: 'running',
          }}
        >
          {/* Single track repeated twice for seamless loop */}
          {[0, 1].map((half) => (
            <ul
              key={half}
              className={`flex items-center shrink-0 gap-6 md:gap-12 ${half === 0 ? 'pr-3 md:pr-6' : 'pl-3 md:pl-6'}`}
              aria-hidden={half === 1 ? true : undefined}
            >
              {items.map((item, idx) => (
                <li
                  key={`${half}-${idx}`}
                  className="flex-none shrink-0"
                >
                  {item.src ? (
                    <a
                      href={item.href || '#'}
                      aria-label={item.alt || item.name || 'Brand'}
                      tabIndex={0}
                      className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5de0e6] rounded whitespace-nowrap px-1"
                    >
                      <img
                        src={item.src}
                        alt={item.alt || item.name || ''}
                        className="h-10 md:h-[60px] max-w-none object-contain"
                        style={{ filter: 'none' }}
                      />
                    </a>
                  ) : (
                    <a
                      href={item.href || '#'}
                      aria-label={item.name}
                      tabIndex={0}
                      className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5de0e6] rounded whitespace-nowrap px-1"
                    >
                      <span className="text-[18px] font-bold text-[#1d2751] whitespace-nowrap">
                        {item.name}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* CSS-only pause on hover/focus */}
        <style>{`
          .group:hover > div { animation-play-state: paused; }
          .group:focus-within > div { animation-play-state: paused; }
        `}</style>
      </div>
    </div>
  );
}


