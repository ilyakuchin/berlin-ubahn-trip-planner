export const SELECT_STATION = 'SELECT_STATION';

export function selectStation(id) {
  return { type: SELECT_STATION, id };
}
