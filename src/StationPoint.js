import React from 'react';

export default function StationPoint({ cx, cy, isUnderConstruction, label }) {
  return (
    <>
      <circle
        opacity={isUnderConstruction ? '0.5' : '1'}
        fill='#FFFFFF'
        stroke='#000000'
        stroke-width='2'
        stroke-miterlimit='10'
        cx={cx}
        cy={cy}
        r='8.5'
      />
    </>
  );
}
