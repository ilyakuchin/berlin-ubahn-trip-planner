import React from 'react';
import Station from '../../Station';
import Connection from '../Connection';
import { connect } from 'react-redux';

export function U4Connections({ stations, connections }) {
  const u4stations = stations.map((station) => (
    <Station
      key={station.id}
      id={station.id}
      cx={station.cx}
      cy={station.cy}
      label={station.label}
      transform={station.transform}
    />
  ));

  const u4connections = connections.map((connection) => (
    <Connection
      key={connection.id}
      x1={connection.x1}
      y1={connection.y1}
      x2={connection.x2}
      y2={connection.y2}
      stationA={connection.stationA}
      stationB={connection.stationB}
    />
  ));
  return (
    <>
      {u4connections}
      {u4stations}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    stations: state.route.stations,
    connections: state.route.connections,
  };
};

const ConnectedU4Connections = connect(mapStateToProps)(U4Connections);

export default ConnectedU4Connections;
