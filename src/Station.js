import React from 'react';
import { connect } from 'react-redux';
import { setStartStation, setDestinationStation } from './redux/actions/route';

export function Station({
  cx,
  cy,
  id,
  label,
  transform,
  startStation,
  destinationStation,
  setStartStation,
  setDestinationStation,
}) {
  return (
    <>
      <circle
        onClick={() => logStationId(id)}
        fill={getStationColor(id, startStation, destinationStation)}
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        cx={cx}
        cy={cy}
        r='8.5'
      />
      <text transform={transform} fontFamily="'TrebuchetMS'" fontSize='14'>
        {label}
      </text>
    </>
  );
}

const getStationColor = (id, startStation, destinationStation) =>
  isStationFocused(id, startStation, destinationStation)
    ? '#000000'
    : '#FFFFFF';

const isStationFocused = (id, startStation, destinationStation) =>
  startStation === id || destinationStation === id;

const logStationId = (id) => {
  console.log(id);
};

const mapStateToProps = (state) => {
  return {
    startStation: state.route.startStation,
    destinationStation: state.route.destinationStation,
  };
};

const dispatchToProps = (dipatch) => {
  return {
    setStartStation: (stationName) => dipatch(setStartStation(stationName)),
    setDestinationStation: (stationName) =>
      dipatch(setDestinationStation(stationName)),
  };
};

const ConnectedStation = connect(mapStateToProps, dispatchToProps)(Station);

export default ConnectedStation;
