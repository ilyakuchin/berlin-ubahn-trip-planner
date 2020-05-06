import React from 'react';
import U3Connections from './U3/U3Connections';
import { Station } from '../Station';
import { connect } from 'react-redux';

const u3Stations = require('./U3/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u3Stations].map((station) => (
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
      <U3Connections />
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
