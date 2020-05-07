import React from 'react';
import { Station } from '../Station';
import { connect } from 'react-redux';
import U5Connections from './U5/U5Connections';

const u5Stations = require('./U5/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u5Stations].map((station) => (
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
      <U5Connections />
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
