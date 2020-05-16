import {
  pairElementWithArrayElements,
  getAllPairsOfArrayElements,
} from './graph';

describe('Tests for graph functions', () => {
  test('should pair elements', () => {
    expect(pairElementWithArrayElements(1, [2])).toEqual([[1, 2]]);
  });

  test('should pair elements', () => {
    expect(pairElementWithArrayElements(1, [2, 3])).toEqual([
      [1, 2],
      [1, 3],
    ]);
  });

  test('should pair elements', () => {
    expect(pairElementWithArrayElements(1, [2, 3, 4, 5])).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ]);
  });

  test('should get all pairs of array elements', () => {
    expect(getAllPairsOfArrayElements([1, 2, 3, 4])).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 4],
      [3, 1],
      [3, 2],
      [3, 4],
      [4, 1],
      [4, 2],
      [4, 3],
    ]);
  });
});
