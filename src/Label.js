import React from 'react';

export default function Label({ label, transform }) {
  return (
    <>
      <text transform={transform} fontFamily="'TrebuchetMS'" fontSize='14'>
        {label}
      </text>
    </>
  );
}
