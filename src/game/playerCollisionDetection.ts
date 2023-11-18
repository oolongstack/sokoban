import type { Player } from "./player";
import type { Map } from "./map";
import { WALL_NAME } from "./Wall";

export function wallCollisionLeft(player: Player, map: Map) {
  const nextLeftPosition = player.x - 1;
  const block = map[player.y][nextLeftPosition];
  return block.name === WALL_NAME;
}

export function wallCollisionRight(player: Player, map: Map) {
  const nextLeftPosition = player.x + 1;
  const block = map[player.y][nextLeftPosition];
  return block.name === WALL_NAME;
}

export function wallCollisionUp(player: Player, map: Map) {
  const nextPosition = player.y - 1;
  const block = map[nextPosition][player.x];
  return block.name === WALL_NAME;
}

export function wallCollisionDown(player: Player, map: Map) {
  const nextPosition = player.y + 1;
  const block = map[nextPosition][player.x];
  return block.name === WALL_NAME;
}
