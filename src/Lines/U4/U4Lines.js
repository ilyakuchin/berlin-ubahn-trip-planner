import React from 'react';
import Station from '../../Station';
const data = require('./u4Stations.json');

export default function U4Lines() {
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
        stroke='#F5D021'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1097.695,1182.516 1037.695,1182.516 
	1037.695,1447.031 '
      />
      {stations}
    </>
  );
}
