import React from 'react';
import StationPoint from '../../StationPoint';
const data = require('./u8Stations.json');

export default function U8Lines() {
  const stations = data.map((station) => (
    <StationPoint cx={station.cx} cy={station.cy} label={station.label} />
  ));
  return (
    <>
      <polyline
        fill='none'
        stroke='#035D96'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1775.119,1447.043 1775.119,842.323 
	1083.896,151.103 1083.896,81.103 1183.896,81.103 '
      />
      {stations}
    </>
  );
}
