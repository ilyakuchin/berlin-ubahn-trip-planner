import React from 'react';

export default function Station({
  cx,
  cy,
  isUnderConstruction,
  label,
  transform,
}) {
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
      <text transform={transform} font-family="'TrebuchetMS'" font-size='14'>
        {label}
      </text>
    </>
  );
}
