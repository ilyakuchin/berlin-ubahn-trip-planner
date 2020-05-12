import React from 'react';
import { Station } from '../Station';
import { connect } from 'react-redux';
import U9Connections from './U9/U9Connections';

const u9Stations = require('./U9/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u9Stations].map((station) => (
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
      <U9Connections />
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
