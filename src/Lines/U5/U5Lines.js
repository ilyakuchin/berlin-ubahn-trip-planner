import React from 'react';
import StationPoint from '../../StationPoint';
const data = require('./u5Stations.json');

export default function U5Lines() {
  const stations = data.map((station) => (
    <StationPoint cx={station.cx} cy={station.cy} label={station.label} />
  ));

  return (
    <>
      <polyline
        fill='none'
        stroke='#89592D'
        stroke-width='8'
        stroke-miterlimit='10'
        points='2745.74,689.551 2422.316,1012.974 
	2392.316,1012.974 2338.911,959.567 2000.246,959.567 1858.824,818.146 1728.824,818.146 '
      />
      <polyline
        fill='none'
        stroke='#89592D'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1455.102,875.743 1335.721,875.743 
	1335.721,776.054 '
      />
      <polyline
        opacity='0.5'
        fill='none'
        stroke='#89592D'
        stroke-width='8'
        stroke-miterlimit='10'
        enable-background='new    '
        points='
	1455.102,875.743 1672,875.743 1730.213,817.496 '
      />
      {stations}
    </>
  );
}
