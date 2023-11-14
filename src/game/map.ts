import { Cargo } from "./Cargo";
import { Empty } from "./Empty";
import { Floor } from "./Floor";
import { Wall } from "./Wall";

export type Block = Empty | Floor | Cargo | Wall;

export type Map = Block[][];
let _rawMap: number[][];
let _map: Map;

export function initMap(rawMap: number[][]): Map {
  _rawMap = rawMap;
  const len = rawMap.length;
  const initialMap = [];
  for (let i = 0; i < len; i++) {
    initialMap.push([]);
  }

  const map: Block[][] = initialMap;

  for (let i = 0; i < rawMap.length; i++) {
    for (let j = 0; j < rawMap[i].length; j++) {
      const cell = rawMap[i][j];
      if (cell === 0) {
        map[i][j] = new Empty();
      }
      if (cell === 1) {
        map[i][j] = new Wall();
      }
      if (cell === 2) {
        map[i][j] = new Floor();
      }
      if (cell === 3) {
        map[i][j] = new Cargo();
      }
    }
  }

  _map = map;
  return map;
}

export const getMap = () => ({ map: _map, rawMap: _rawMap });
