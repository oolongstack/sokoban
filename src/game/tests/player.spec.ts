import { describe, it, expect, beforeEach } from "vitest";
import { getPlayer, initPlayer, moveLeft, moveRight } from "../player";
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
    initPlayer({ x: 4, y: 1 });

    moveLeft();

    const player = getPlayer();

    expect(player.x).toBe(3);
  });

  it("should move to left wnth next is wall", () => {
    initPlayer({ x: 1, y: 1 });

    moveLeft();

    const player = getPlayer();

    expect(player.x).toBe(1);
  });

  it("should move to right wnth next is not wall", () => {
    initPlayer({ x: 4, y: 1 });

    moveRight();

    const player = getPlayer();

    expect(player.x).toBe(5);
  });
});
