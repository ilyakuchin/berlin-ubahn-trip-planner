import React from 'react';
import StationPoint from '../../StationPoint';
const data = require('./u4Stations.json');

export default function U4Lines() {
  const stations = data.map((station) => (
    <StationPoint cx={station.cx} cy={station.cy} label={station.label} />
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
