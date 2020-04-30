import React from 'react';
import StationPoint from '../../StationPoint';
const data = require('./u6Stations.json');

export default function U6Lines() {
  const stations = data.map((station) => (
    <StationPoint cx={station.cx} cy={station.cy} label={station.label} />
  ));

  return (
    <>
      <polyline
        fill='none'
        stroke='#7C6CA4'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1536.498,1697.031 1536.498,806.33 
	824.224,94.059 '
      />
      {stations}
    </>
  );
}
