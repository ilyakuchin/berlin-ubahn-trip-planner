import React from 'react';

import Legend from './Legend';
import Lines from './Lines';

export default function Map() {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='2900px'
      height='1900px'
      viewBox='0 0 2900 1900'
      enableBackground='new 0 0 2900 1900'
    >
      <Lines />
      <Legend />
    </svg>
  );
}
