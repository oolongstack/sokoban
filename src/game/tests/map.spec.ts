import { describe, it, expect } from "vitest";
import { initMap } from "../map";
import { Wall } from "../Wall";
import { Cargo } from "../Cargo";
import { Floor } from "../Floor";
import { Empty } from "../Empty";

describe("Map", () => {
  it("should init map", () => {
    const rawMap: number[][] = [[0, 1, 2, 3]];

    const map = initMap(rawMap);

    expect(map).toEqual([[new Empty(), new Wall(), new Floor(), new Cargo()]]);
  });
});
