import React from 'react';
import Station from '../../Station';
import Connection from './Connection';
const u4Stations = require('./u4Stations.json');
const u4Connections = require('./u4Connections.json');

export default function U4Connections() {
  const stations = [...u4Stations].map((station) => (
    <Station
      key={station.label}
      cx={station.cx}
      cy={station.cy}
      label={station.label}
      transform={station.transform}
    />
  ));

  const connections = u4Connections.map((connection) => (
    <Connection
      key={connection.id}
      x1={connection.x1}
      y1={connection.y1}
      x2={connection.x2}
      y2={connection.y2}
    />
  ));
  return (
    <>
      {connections}
      {stations}
    </>
  );
}
