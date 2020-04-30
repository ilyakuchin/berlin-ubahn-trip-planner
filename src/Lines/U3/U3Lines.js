import React from 'react';
import Station from '../../Station';
const data = require('./u3Stations.json');

export default function U3Lines() {
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
        stroke='#339393'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1097.695,1156.516 947.695,1156.516 
	378.844,1725.365 '
      />
      {stations}
    </>
  );
}
