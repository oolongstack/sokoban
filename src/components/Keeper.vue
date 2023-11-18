<template>
  <img class="absolute z-50" :src="keeper" alt="" :style="positionStyle" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import keeper from "@/assets/keeper.png";
import {
  Player,
  initPlayer,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from "../game/player.ts";
import { usePosition } from "../composables/position";

const player: Player = reactive({
  x: 3,
  y: 2,
});
// 初始化玩家
initPlayer(player);

const positionStyle = usePosition(player);

function handleKeyup(e: KeyboardEvent) {
  console.log("e: ", e.code);
  switch (e.code) {
    case "ArrowLeft":
    case "KeyA":
      moveLeft();
      break;
    case "ArrowRight":
    case "KeyD":
      moveRight();
      break;

    case "ArrowUp":
    case "KeyW":
      moveUp();
      break;

    case "ArrowDown":
    case "KeyS":
      moveDown();
      break;
    default:
      break;
  }
}
onMounted(() => {
  window.addEventListener("keyup", handleKeyup);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyup);
});
</script>

<style scoped></style>
