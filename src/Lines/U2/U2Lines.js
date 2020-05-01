import React from 'react';
import Station from '../../Station';
const data = require('./u2Stations.json');

export default function U2Lines() {
  const stations = data.map((station) => (
    <Station
      key={station.label}
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
        stroke='#E02021'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1728.824,278.344 1728.824,958.396 
	1668.721,1018.5 1308.72,1018.805 1308.72,1098.805 1238.01,1169.516 987.695,1169.516 783.5,965.239 431,965.239 324.934,859.173 
	'
      />
      {stations}
    </>
  );
}
