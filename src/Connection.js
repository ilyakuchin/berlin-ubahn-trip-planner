import React from 'react';

export default function Connection({
  x1,
  y1,
  x2,
  y2,
  stationA,
  stationB,
  route,
  stroke,
}) {
  return (
    <>
      <line
        opacity={setOpacity(route, stationA, stationB)}
        fill='none'
        stroke={stroke}
        strokeWidth='8'
        strokeMiterlimit='10'
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
      />
    </>
  );
}

const setOpacity = (route, stationA, stationB) => {
  if (route !== undefined && route.length === 0) {
    return 1;
  } else if (route.indexOf(stationA) !== -1 && route.indexOf(stationB) !== -1) {
    return 1;
  } else {
    return 0.3;
  }
};
