import type { Player } from "./player";
import type { Block, Map } from "./map";
import { WALL_NAME } from "./Wall";

export function wallCollision(block: Block) {
  return block.name === WALL_NAME;
}

export function wallCollisionLeft(player: Player, map: Map) {
  const nextLeftPosition = player.x - 1;
  const block = map[player.y][nextLeftPosition];
  return wallCollision(block);
}

export function wallCollisionRight(player: Player, map: Map) {
  const nextLeftPosition = player.x + 1;
  const block = map[player.y][nextLeftPosition];
  return wallCollision(block);
}

export function wallCollisionUp(player: Player, map: Map) {
  const nextPosition = player.y - 1;
  const block = map[nextPosition][player.x];
  return wallCollision(block);
}

export function wallCollisionDown(player: Player, map: Map) {
  const nextPosition = player.y + 1;
  const block = map[nextPosition][player.x];
  return wallCollision(block);
}
