import React from 'react';

/**
 * Silver iPhone hardware chrome: outer frame, antenna bands, CNC side buttons
 * and the corner-clipped screen container. Children render inside the screen.
 */
export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div 
      style={{
        aspectRatio: '37 / 76',
        height: '575px',
        maxHeight: '84vh',
        borderRadius: '50px',
        boxShadow: '0 0 0.1em 0.25em rgba(100, 92, 78, 0.45), 0 0 0 4px #bbb09c, 0 30px 70px -15px rgba(0, 0, 0, 0.95)',
        fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
      }}
      className="relative z-10 bg-black box-border"
    >
      {/* Antenna bands (top & bottom border cuts) */}
      <div 
        style={{
          position: 'absolute',
          top: '50px',
          right: '-4px',
          bottom: '50px',
          left: '-4px',
          border: '4px solid #8f8472',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Hardware Buttons */}
      <div className="absolute -inset-[4px] pointer-events-none">
        {/* Left side: Action Button + Volume Up + Volume Down */}
        <div className="absolute right-full top-[92px] w-[3px] flex flex-col gap-[12px]">
          {/* Action button */}
          <div 
            style={{
              height: '23px',
              background: '#f2efe9',
              boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px',
              marginBottom: '5px'
            }}
          />
          {/* Vol Up */}
          <div 
            style={{
              height: '46px',
              background: '#f2efe9',
              boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px'
            }}
          />
          {/* Vol Down */}
          <div 
            style={{
              height: '46px',
              background: '#f2efe9',
              boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px'
            }}
          />
        </div>

        {/* Right side: Power Button */}
        <div className="absolute left-full top-[148px] w-[3px] scale-x-[-1]">
          <div 
            style={{
              height: '70px',
              background: '#f2efe9',
              boxShadow: 'inset -2px 0 1px black, inset 0 0 1px #bbb09c, inset 0 2px 1px #ded7cb, inset 0 -2px 1px #ded7cb, inset -1px 3px 1px rgba(0,0,0,0.5), inset -1px -3px 1px rgba(0,0,0,0.5)',
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px'
            }}
          />
        </div>
      </div>

      {/* Screen Container (Guaranteed Hardware-Level Corner Clipping) */}
      <div 
        style={{
          borderRadius: '50px',
          border: '9px solid black',
          fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          maskImage: 'radial-gradient(white, black)',
          WebkitClipPath: 'inset(0 round 41px)',
          clipPath: 'inset(0 round 41px)',
          isolation: 'isolate',
          contain: 'paint',
          transform: 'translateZ(0)',
        }}
        className="absolute inset-0 overflow-hidden bg-[#0f0e0c]"
      >
        {children}
      </div>
    </div>
  );
};
