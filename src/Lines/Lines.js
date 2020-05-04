import React from 'react';

import { Station } from '../Station';
import { connect } from 'react-redux';
import { Connection } from './Connection';

const u1Connections = require('./U1/connections.json');
const u1Stations = require('./U1/stations.json');

export function Lines({ connections, stations }) {
  const drawnConnections = [...u1Connections].map((connection) => (
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

  const drawnStations = [
    ...u1Stations,
  ].map((station) => (
    <Station
      key={station.id}
      id={station.id}
      cx={station.cx}
      cy={station.cy}
      label={station.label}
      transform={station.transform}
    />
  ));

  return (
    <>
      {drawnConnections}
      {drawnStations}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    stations: state.route.stations,
    connections: state.route.connections,
  };
};

const ConnectedLines = connect(mapStateToProps)(Lines);

export default ConnectedLines;
