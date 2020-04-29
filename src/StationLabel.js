import React from 'react';

export default function StationLabel({ transform, label }) {
  return (
    <text transform={transform} font-family="'TrebuchetMS-Bold'" font-size='14'>
      {label}
    </text>
  );
}
