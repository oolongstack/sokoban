import { Position } from "../composables/position";
import { getMap } from "./map";
import {
  wallCollisionLeft,
  wallCollisionRight,
} from "./playerCollisionDetection";

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

export const moveRight = () => {
  if (wallCollisionRight(_player, getMap().map)) return;
  _player.x++;
};
