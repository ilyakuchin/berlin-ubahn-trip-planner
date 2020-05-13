import React from 'react';
import { Station } from '../Station';
import { Connection } from '../Lines/Connection';
import { connect } from 'react-redux';

import U9Connections from './U9/U9Connections';
import U2Connections from './U2/U2Connections';
const u2Connections = require('./U2/connections.json');

const u1Stations = require('./U1/stations.json');
const u2Stations = require('./U2/stations.json');
const u3Stations = require('./U3/stations.json');
const u4Stations = require('./U4/stations.json');
const u5Stations = require('./U5/stations.json');
const u6Stations = require('./U6/stations.json');
const u7Stations = require('./U7/stations.json');
const u8Stations = require('./U8/stations.json');
const u9Stations = require('./U9/stations.json');

export function Lines({ connections, stations }) {
  const drawnConnections = [...u2Connections].map((connection) => (
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

  const drawnStations = [...u2Stations].map((station) => (
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
