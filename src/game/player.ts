export interface Player {
  x: number;
  y: number;
}

let _player: Player;

export function moveLeft() {
  _player.x -= 1;
}

export function moveRight() {
  _player.x += 1;
}

export function moveUp() {
  _player.y -= 1;
}

export function moveDown() {
  _player.y += 1;
}

export function getPlayer(): Player {
  return _player;
}

export function initPlayer(player: Player) {
  _player = player;
}
