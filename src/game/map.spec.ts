import { describe, it, expect } from "vitest";
import { Cargo, Empty, Floor, Wall, initMap } from "./map";

describe("Map", () => {
  it("should init map", () => {
    const rawMap: number[][] = [[0, 1, 2, 3]];

    const map = initMap(rawMap);

    expect(map).toEqual([[new Empty(), new Wall(), new Floor(), new Cargo()]]);
  });
});
