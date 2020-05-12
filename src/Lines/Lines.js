import React from 'react';
import { Station } from '../Station';
import { connect } from 'react-redux';
import U7Connections from './U7/U7Connections';

const u7Stations = require('./U7/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u7Stations].map((station) => (
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
      <U7Connections />
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
