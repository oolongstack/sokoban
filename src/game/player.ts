import { Position } from "../composables/position";
import { getMap } from "./map";
import { wallCollisionLeft } from "./playerCollisionDetection";

export interface Player extends Position {
  x: number;
  y: number;
}
let _player: Player;

export function getPlayer(): Player {
  return _player;
}

export function initPlayer(player: Player) {
  _player = player;
}

export const moveLeft = () => {
  if (wallCollisionLeft(_player, getMap().map)) {
    return;
  }
  _player.x--;
};
