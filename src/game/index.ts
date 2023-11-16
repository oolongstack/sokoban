import { initMap } from "./map";
import { initPlayer, type Player } from "./player";
export function initGame(_player: Player, _map: number[][]) {
  initMap(_map);
  initPlayer(_player);
}
