<template>
  <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    <div class="flex" v-for="row in map">
      <div v-for="col in row">
        <component :is="getBlock(col)" />
      </div>
    </div>
    <Player />
  </div>
</template>

<script setup lang="ts">
// import empty from "@/assets/empty.png";
// import wall from "@/assets/wall.png";
// import floor from "@/assets/floor.png";
// import cargo from "@/assets/cargo.png";
import EmptyBlock from "./Empty.vue";
import FloorBlock from "./Floor.vue";
import WallBlock from "./Wall.vue";
import CargoBlock from "./Cargo.vue";
import Player from "./Player.vue";

// import keeper from "@/assets/keeper.png";
import { initMap } from "../game/map";
import type { Block } from "../game/map";
import { EMPTY_NAME } from "../game/Empty";
import { FLOOR_NAME } from "../game/Floor";
import { WALL_NAME } from "../game/Wall";
import { CARGO_NAME } from "../game/Cargo";

// 0 空白
// 1 墙
// 2 地板
// 3 货物
const rawMap: number[][] = [
  [0, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 2, 2, 2, 2, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 1, 1, 2, 2, 1, 0],
  [1, 2, 1, 2, 2, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const map = initMap(rawMap);
console.log("map: ", map);

const getBlock = (block: Block) => {
  switch (block.name) {
    case EMPTY_NAME:
      return EmptyBlock;
    case FLOOR_NAME:
      return FloorBlock;
    case WALL_NAME:
      return WallBlock;
    case CARGO_NAME:
      return CargoBlock;
    default:
      return EmptyBlock;
  }
};
</script>

<style scoped></style>
