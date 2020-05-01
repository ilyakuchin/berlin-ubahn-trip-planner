import React from 'react';

import Station from '../Station';
import U1Connections from './U1/U1Connections';
import U2Connections from './U2/U2Connections';
import U3Connections from './U3/U3Connections';
import U4Connections from './U4/U4Connections';
import U5Connections from './U5/U5Connections';
import U6Connections from './U6/U6Connections';
import U7Connections from './U7/U7Connections';
import U8Connections from './U8/U8Connections';
import U9Connections from './U9/U9Connections';

const u1Stations = require('./U1/u1Stations.json');
const u2Stations = require('./U2/u2Stations.json');
const u3Stations = require('./U3/u3Stations.json');
const u4Stations = require('./U4/u4Stations.json');
const u5Stations = require('./U5/u5Stations.json');
const u6Stations = require('./U6/u6Stations.json');
const u7Stations = require('./U7/u7Stations.json');
const u8Stations = require('./U8/u8Stations.json');
const u9Stations = require('./U9/u9Stations.json');

export default function Lines() {
  const stations = [
    ...u1Stations,
    ...u2Stations,
    ...u3Stations,
    ...u4Stations,
    ...u5Stations,
    ...u6Stations,
    ...u7Stations,
    ...u8Stations,
    ...u9Stations,
  ].map((station) => (
    <Station
      key={station.label}
      cx={station.cx}
      cy={station.cy}
      label={station.label}
      transform={station.transform}
    />
  ));

  return (
    <>
      <U1Connections />
      <U2Connections />
      <U3Connections />
      <U4Connections />
      <U5Connections />
      <U6Connections />
      <U7Connections />
      <U8Connections />
      <U9Connections />
      {stations}
    </>
  );
}
