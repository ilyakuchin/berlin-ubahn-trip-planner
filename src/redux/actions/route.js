export const SET_START_STATION = 'SET_START_STATION';
export const SET_DESTINATION_STATION = 'SET_DESTINATION_STATION';

export function setStartStation(stationName) {
  return { type: SET_START_STATION, stationName };
}

export function setDestinationStation(stationName) {
  return { type: SET_DESTINATION_STATION, stationName };
}
