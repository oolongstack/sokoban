export class Empty {
  public name: string = "empty";
}
export class Floor {
  public name: string = "floor";
}
export class Cargo {
  public name: string = "cargo";
}
export class Wall {
  public name: string = "wall";
}
export const rawMap: number[][] = [
  [0, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 2, 2, 2, 2, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 1, 1, 2, 2, 1, 0],
  [1, 2, 1, 2, 2, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

export function initMap(rawMap: number[][]) {
  const len = rawMap.length;
  const initialMap = [];
  for (let i = 0; i < len; i++) {
    initialMap.push([]);
  }

  const map: (Empty | Floor | Cargo | Wall)[][] = initialMap;

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

  return map;
}
