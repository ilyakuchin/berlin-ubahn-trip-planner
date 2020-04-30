import React from 'react';
import Station from '../../Station';
const data = require('./u1Stations.json');

export default function U1Lines() {
  const stations = data.map((station) => (
    <Station
      cx={station.cx}
      cy={station.cy}
      label={station.label}
      transform={station.transform}
    />
  ));
  return (
    <>
      <polyline
        fill='none'
        stroke='#53A947'
        stroke-width='8'
        stroke-miterlimit='10'
        points='786.015,1143.516 1931.229,1143.516 
	1992.727,1082.02 '
      />
      {stations}
    </>
  );
}
