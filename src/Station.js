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
        onClick={() => {
          console.log(label);
        }}
        opacity={isUnderConstruction ? '0.5' : '1'}
        fill='#FFFFFF'
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        cx={cx}
        cy={cy}
        r='8.5'
      />
      <text transform={transform} fontFamily="'TrebuchetMS'" fontSize='14'>
        {label}
      </text>
    </>
  );
}
