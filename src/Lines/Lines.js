import React from 'react';
import { Station } from '../Station';
import { connect } from 'react-redux';
import U8Connections from './U8/U8Connections';

const u8Stations = require('./U8/stations.json');

export function Lines({ connections, stations }) {
  const drawnStations = [...u8Stations].map((station) => (
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
      <U8Connections />
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
