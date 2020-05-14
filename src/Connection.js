import React from 'react';
import { connect } from 'react-redux';

export function Connection({
  x1,
  y1,
  x2,
  y2,
  stationA,
  stationB,
  route,
  stroke,
}) {
  const setOpacity = (route, stationA, stationB) => {
    if (route.length === 0) {
      return 1;
    }
    if (route.indexOf(stationA) !== -1 && route.indexOf(stationB) !== -1) {
      return 1;
    }
    return 0.3;
  };

  return (
    <>
      <line
        opacity={setOpacity(route, stationA, stationB)}
        fill='none'
        stroke={stroke}
        strokeWidth='8'
        strokeMiterlimit='10'
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    route: state.route.route,
  };
};

const ConnectedConnection = connect(mapStateToProps)(Connection);

export default ConnectedConnection;
