import React from 'react';
import { fontFamily, stationsFontSize } from './TextSettings';

export default function Label({ label, transform }) {
  return (
    <>
      <text
        transform={transform}
        fontFamily={fontFamily}
        fontSize={stationsFontSize}
      >
        {label}
      </text>
    </>
  );
}
