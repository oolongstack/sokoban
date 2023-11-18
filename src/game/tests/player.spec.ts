import { describe, it, expect, beforeEach } from "vitest";
import {
  getPlayer,
  initPlayer,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from "../player";
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

  describe("move left", () => {
    // 能向左移动
    it("should move to left wnth next position is not wall", () => {
      initPlayer({ x: 4, y: 1 });

      moveLeft();

      const player = getPlayer();

      expect(player.x).toBe(3);
    });

    it("should not move to left wnth next position is wall", () => {
      initPlayer({ x: 1, y: 1 });

      moveLeft();

      const player = getPlayer();

      expect(player.x).toBe(1);
    });
  });

  describe("move right", () => {
    // 右边不是墙
    it("should move to right with next position is not wall", () => {
      initPlayer({ x: 4, y: 1 });

      moveRight();

      const player = getPlayer();

      expect(player.x).toBe(5);
    });

    // 右边是墙
    it("should not move to right wnth next position is wall", () => {
      initPlayer({ x: 5, y: 1 });

      moveRight();

      const player = getPlayer();

      expect(player.x).toBe(5);
    });
  });

  describe("move up", () => {
    it("should move to up with next position is not wall", () => {
      initPlayer({
        x: 3,
        y: 2,
      });
      moveUp();
      const player = getPlayer();
      expect(player.y).toBe(1);
    });

    it("should not move to up with next position is wall", () => {
      initPlayer({
        x: 3,
        y: 1,
      });
      moveUp();
      const player = getPlayer();
      expect(player.y).toBe(1);
    });
  });

  describe("move down", () => {
    it("should move to up with next position is not wall", () => {
      initPlayer({
        x: 3,
        y: 2,
      });
      moveDown();
      const player = getPlayer();
      expect(player.y).toBe(3);
    });

    it("should not move to up with next position is wall", () => {
      initPlayer({
        x: 2,
        y: 2,
      });
      moveDown();
      const player = getPlayer();
      expect(player.y).toBe(2);
    });
  });
});
