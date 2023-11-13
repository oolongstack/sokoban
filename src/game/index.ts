import { initMap, Map } from "./map";
import { initPlayer, Player } from "./player";
export function initGame(_player: Player, _map: number[][]) {
  initMap(_map);
  initPlayer(_player);
}
