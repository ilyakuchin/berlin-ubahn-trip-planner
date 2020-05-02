import React from 'react';

export default function Connection({ x1, y1, x2, y2 }) {
  return (
    <>
      <line
        opacity='1'
        fill='none'
        stroke='#F5D021'
        strokeWidth='8'
        strokeMiterlimit='10'
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
      />
    </>
  );
}
