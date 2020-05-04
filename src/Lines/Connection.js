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
  let opacity = 0.3;
  if (route.length === 0) {
    opacity = 1;
  } else if (route.indexOf(stationA) !== -1 && route.indexOf(stationB) !== -1) {
    opacity = 1;
  }
  return (
    <>
      <line
        opacity={opacity}
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
