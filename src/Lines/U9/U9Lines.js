import React from 'react';
import Station from '../../Station';
const data = require('./u9Stations.json');

export default function U9Lines() {
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
        stroke='#EC651A'
        stroke-width='8'
        stroke-miterlimit='10'
        points='854.695,1733.486 854.695,1078.516 
1004.953,928.258 1004.953,546.819 1239.175,312.597 '
      />
      {stations}
    </>
  );
}
