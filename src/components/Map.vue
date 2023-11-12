<template>
  <div class="container">
    <div class="flex" v-for="row in rawMap">
      <span v-for="col in row">
        <component :is="number2stuff[col]" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
// import empty from "@/assets/empty.png";
// import wall from "@/assets/wall.png";
// import floor from "@/assets/floor.png";
// import cargo from "@/assets/cargo.png";
import Empty from "./Empty.vue";
import Floor from "./Floor.vue";
import Wall from "./Wall.vue";
import Cargo from "./Cargo.vue";

// 玩家
// import keeper from "@/assets/keeper.png";
import { initMap } from "../game/map";

const number2stuff: Record<PropertyKey, Component> = {
  0: Empty,
  1: Wall,
  2: Floor,
  3: Cargo,
};

// 0 空白
// 1 墙
// 2 沙地
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
</script>

<style scoped></style>
