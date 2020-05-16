import Graph from 'graph-data-structure';

export const pairElementWithArrayElements = (sourceElement, destinationArray) =>
  destinationArray.map((element) => [sourceElement, element]);

export const getAllPairsOfArrayElements = (array) => {
  const result = array.flatMap((station, index, array) =>
    pairElementWithArrayElements(station, [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length),
    ])
  );
  return result;
};

const addAllEdges = (edges, graph = Graph()) => {
  if (edges.length === 1) {
    return graph.addEdge(edges[0][0], edges[0][1]);
  } else {
    return addAllEdges(edges.slice(1), graph.addEdge(edges[0][0], edges[0][1]));
  }
};

const addInterchangeEdges = (interchanges, graph = Graph()) => {
  const interchangeStations = interchanges.map(
    (interchange) => interchange.stations
  );
  const pairsOfStations = interchangeStations.flatMap((item) =>
    getAllPairsOfArrayElements(item)
  );
  return addAllEdges(pairsOfStations, graph);
};

const addLineToGraph = (stations, graph) =>
  addAllBidirectionalEdges(stations, addNodes(stations, graph));

const addNodes = (stations, graph = Graph()) =>
  stations.length === 1
    ? graph.addNode(stations[0].id)
    : addNodes(stations.slice(1), graph.addNode(stations[0].id));

const addAllBidirectionalEdges = (stations, graph = Graph()) =>
  stations.length === 2
    ? addBidirectionalEdge(stations[0].id, stations[1].id, graph)
    : addAllBidirectionalEdges(
        stations.slice(1),
        addBidirectionalEdge(stations[0].id, stations[1].id, graph)
      );

const addBidirectionalEdge = (sourceNode, destinationNode, graph = Graph()) =>
  graph
    .addEdge(sourceNode, destinationNode)
    .addEdge(destinationNode, sourceNode);

export const buildGraph = (linesList, interchanges, graph = Graph()) => {
  if (linesList.length === 1) {
    return addInterchangeEdges(
      interchanges,
      addLineToGraph(linesList[0], graph)
    );
  } else {
    return buildGraph(
      linesList.slice(1),
      interchanges,
      addLineToGraph(linesList[0], graph)
    );
  }
};

export const dijkstra = (startStationId, destinationStationId, stationsGraph) =>
  stationsGraph.shortestPath(startStationId, destinationStationId);
