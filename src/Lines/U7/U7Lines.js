import React from 'react';
import Station from '../../Station';
const data = require('./u7Stations.json');

export default function U7Lines() {
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
        stroke='#1793C5'
        stroke-width='8'
        stroke-miterlimit='10'
        points='2045.559,1856.452 1912.104,1723 
	1912.104,1314.26 1852,1254.155 1569.359,1254.155 1471.721,1156.516 1361.721,1156.516 1361.721,1208 1229.333,1340.516 
	776.667,1340.516 692,1256 692,694.561 588.387,590.948 208.387,590.948 208.387,640.948 '
      />
      {stations}
    </>
  );
}
