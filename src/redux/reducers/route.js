import { SET_START_STATION, SET_DESTINATION_STATION } from '../actions/route';
const u4Stations = require('../../Lines/U4/u4Stations.json');
const u4Connections = require('../../Lines/U4/u4Connections.json');

const planRoute = (startStation, destinationStation, stations) => {
  const startObject = stations.find((i) => i.id === startStation);
  const destinationObject = stations.find((i) => i.id === destinationStation);

  let currentStation = Object.assign({}, startObject);
  let route = [currentStation.id];
  let isRouteFound = false;
  while (currentStation.previousStation && !isRouteFound) {
    currentStation = Object.assign(
      {},
      stations.find((i) => i.id === currentStation.previousStation)
    );
    route.push(currentStation.id);
    if (currentStation.id === destinationObject.id) {
      isRouteFound = true;
      return { destinationStation, route };
    }
  }
  if (!currentStation.previousStation) {
    currentStation = Object.assign({}, startObject);
    route = [currentStation.id];
    while (currentStation.nextStation && !isRouteFound) {
      currentStation = Object.assign(
        {},
        stations.find((i) => i.id === currentStation.nextStation)
      );
      route.push(currentStation.id);
      if (currentStation.id === destinationObject.id) {
        isRouteFound = true;
        return { destinationStation, route };
      }
    }
  }
  return { destinationStation, route: [] };
};

export default function route(
  state = {
    startStation: '',
    destinationStation: '',
    stations: u4Stations,
    connections: u4Connections,
    route: [],
  },
  action
) {
  switch (action.type) {
    case SET_START_STATION:
      return {
        ...state,
        startStation: action.stationName,
        route: [],
        destinationStation: '',
      };
    case SET_DESTINATION_STATION: {
      const res = planRoute(
        state.startStation,
        action.stationName,
        state.stations,
        state.connections
      );
      return {
        ...state,
        destinationStation: res.destinationStation,
        route: res.route,
      };
    }

    default:
      return state;
  }
}
