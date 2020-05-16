import { SELECT_STATION } from '../actions/metroMap';
import { buildGraph, dijkstra } from '../helpers/graph';

const u1Stations = require('../../Lines/U1/stations.json');
const u2Stations = require('../../Lines/U2/stations.json');
const u3Stations = require('../../Lines/U3/stations.json');
const u4Stations = require('../../Lines/U4/stations.json');
const u5Stations = require('../../Lines/U5/stations.json');
const u6Stations = require('../../Lines/U6/stations.json');
const u7Stations = require('../../Lines/U7/stations.json');
const u8Stations = require('../../Lines/U8/stations.json');
const u9Stations = require('../../Lines/U9/stations.json');

const u1Connections = require('../../Lines/U1/connections.json');
const u2Connections = require('../../Lines/U2/connections.json');
const u3Connections = require('../../Lines/U3/connections.json');
const u4Connections = require('../../Lines/U4/connections.json');
const u5Connections = require('../../Lines/U5/connections.json');
const u6Connections = require('../../Lines/U6/connections.json');
const u7Connections = require('../../Lines/U7/connections.json');
const u8Connections = require('../../Lines/U8/connections.json');
const u9Connections = require('../../Lines/U9/connections.json');

const interchanges = require('../../Lines/interchangeStations.json');

export default function metroMap(
  state = {
    startStation: '',
    destinationStation: '',
    stations: [
      ...u1Stations,
      ...u2Stations,
      ...u3Stations,
      ...u4Stations,
      ...u5Stations,
      ...u6Stations,
      ...u7Stations,
      ...u8Stations,
      ...u9Stations,
    ],
    connections: [
      ...u1Connections,
      ...u2Connections,
      ...u3Connections,
      ...u4Connections,
      ...u5Connections,
      ...u6Connections,
      ...u7Connections,
      ...u8Connections,
      ...u9Connections,
    ],
    graph: buildGraph(
      [
        u1Stations,
        u2Stations,
        u3Stations,
        u4Stations,
        u5Stations,
        u6Stations,
        u7Stations,
        u8Stations,
        u9Stations,
      ],
      interchanges
    ),
    route: [],
  },
  action
) {
  switch (action.type) {
    case SELECT_STATION:
      if (state.startStation === '') {
        return { ...state, startStation: action.id };
      } else if (state.destinationStation === '') {
        dijkstra(state.startStation, action.id, state.graph);
        return {
          ...state,
          destinationStation: action.id,
          route: dijkstra(state.startStation, action.id, state.graph),
        };
      } else {
        return { ...state, startStation: action.id, destinationStation: '' };
      }
    default:
      return state;
  }
}
