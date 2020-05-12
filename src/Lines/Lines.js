import React from 'react';
import { Station } from '../Station';
import { connect } from 'react-redux';
import U6Connections from './U6/U6Connections';
import U7Connections from './U7/U7Connections';

const u6Stations = require('./U6/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u6Stations].map((station) => (
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
      <U6Connections />
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
