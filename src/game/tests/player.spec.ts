import { describe, it, expect, beforeEach } from "vitest";
import { getPlayer, initPlayer, moveLeft } from "../player";
import { initMap } from "../map";

describe("Player", () => {
  beforeEach(() => {
    initMap([
      [0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 2, 2, 2, 1, 0],
      [1, 2, 2, 2, 2, 2, 1, 0],
      [1, 1, 1, 2, 2, 2, 1, 0],
      [1, 2, 1, 1, 2, 2, 1, 0],
      [1, 2, 1, 2, 2, 2, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]);
  });
  // 能向左移动
  it("should move to left wnth next is not wall", () => {
    // const player = new Player(4, 1);
    initPlayer({ x: 4, y: 1 });
    moveLeft();
    expect(getPlayer().x).toBe(3);
  });
  it("should move to left wnth next is wall", () => {
    // const player = new Player(1, 1);
    // player.moveLeft();
    // expect(player.x).toBe(1);
    initPlayer({ x: 1, y: 1 });
    moveLeft();
    expect(getPlayer().x).toBe(1);
  });
});
