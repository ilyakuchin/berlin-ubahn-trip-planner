import React from 'react';
import { connect } from 'react-redux';
import { selectStation } from './redux/actions/metroMap';

export function Station({
  cx,
  cy,
  id,
  startStation,
  destinationStation,
  connectedSelectStation,
}) {
  return (
    <>
      <circle
        onClick={() => {
          connectedSelectStation(id);
        }}
        onTouchStart={() => {
          connectedSelectStation(id);
        }}
        fill={getStationColor(id, startStation, destinationStation)}
        stroke='#000000'
        strokeWidth='2'
        strokeMiterlimit='10'
        cx={cx}
        cy={cy}
        r='8.5'
      />
    </>
  );
}

const getStationColor = (id, startStation, destinationStation) =>
  isStationFocused(id, startStation, destinationStation)
    ? '#000000'
    : '#FFFFFF';

const isStationFocused = (id, startStation, destinationStation) =>
  startStation === id || destinationStation === id;

const mapStateToProps = (state) => {
  return {
    startStation: state.metroMap.startStation,
    destinationStation: state.metroMap.destinationStation,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    connectedSelectStation: (id) => dispatch(selectStation(id)),
  };
};

const ConnectedStation = connect(mapStateToProps, dispatchToProps)(Station);

export default ConnectedStation;
