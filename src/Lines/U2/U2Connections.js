import React from 'react';
import { Connection } from '../Connection';
const u2C = require('./connections.json');

export default function U2Connections() {
  const connections = u2C.map((connection) => (
    <Connection
      stroke={connection.color}
      key={connection.id}
      x1={connection.x1}
      y1={connection.y1}
      x2={connection.x2}
      y2={connection.y2}
      stationA={connection.stationA}
      stationB={connection.stationB}
      route={[]}
    />
  ));
  return (
    <>
      {/* {connections} */}
      <polyline
        fill='none'
        stroke='#E02021'
        stroke-width='8'
        stroke-miterlimit='10'
        points='1728.824,278.344 1728.824,958.396 1668.721,1018.5 1308.72,1018.805 1308.72,1098.805 1238.01,1169.516 987.695,1169.516 783.5,965.239 431,965.239 324.934,859.173'
      />
    </>
  );
}
