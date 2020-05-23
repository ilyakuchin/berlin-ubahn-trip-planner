import React from 'react';
import Station from '../Station';
import Connection from '../Connection';
import { connect } from 'react-redux';
import Label from '../Label';

export function Lines({ connections, stations, route }) {
  const drawnConnections = [...connections].map((connection) => (
    <Connection
      stroke={connection.color}
      key={connection.id}
      x1={connection.x1}
      y1={connection.y1}
      x2={connection.x2}
      y2={connection.y2}
      stationA={connection.stationA}
      stationB={connection.stationB}
      route={route}
    />
  ));

  const drawnStations = [...stations].map((station) => (
    <>
      <Station
        key={station.id}
        id={station.id}
        cx={station.cx}
        cy={station.cy}
      />
      <Label
        key={station.id}
        label={station.label}
        transform={station.transform}
      />
    </>
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
    stations: state.metroMap.stations,
    connections: state.metroMap.connections,
    route: state.metroMap.route,
  };
};

const ConnectedLines = connect(mapStateToProps)(Lines);

export default ConnectedLines;
