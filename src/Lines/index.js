import React from 'react';
import { Station } from '../Station';
import { Connection } from '../Connection';
import { connect } from 'react-redux';

const u1Stations = require('./U1/stations.json');
const u2Stations = require('./U2/stations.json');
const u3Stations = require('./U3/stations.json');
const u4Stations = require('./U4/stations.json');
const u5Stations = require('./U5/stations.json');
const u6Stations = require('./U6/stations.json');
const u7Stations = require('./U7/stations.json');
const u8Stations = require('./U8/stations.json');
const u9Stations = require('./U9/stations.json');

const u1Connections = require('./U1/connections.json');
const u2Connections = require('./U2/connections.json');
const u3Connections = require('./U3/connections.json');
const u4Connections = require('./U4/connections.json');
const u5Connections = require('./U5/connections.json');
const u6Connections = require('./U6/connections.json');
const u7Connections = require('./U7/connections.json');
const u8Connections = require('./U8/connections.json');
const u9Connections = require('./U9/connections.json');

export function Lines({ connections, stations }) {
  const drawnConnections = [
    ...u1Connections,
    ...u2Connections,
    ...u3Connections,
    ...u4Connections,
    ...u5Connections,
    ...u6Connections,
    ...u7Connections,
    ...u8Connections,
    ...u9Connections,
  ].map((connection) => (
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
    ...u2Stations,
    ...u3Stations,
    ...u4Stations,
    ...u5Stations,
    ...u6Stations,
    ...u7Stations,
    ...u8Stations,
    ...u9Stations,
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
