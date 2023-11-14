<template>
  <img class="absolute z-50" :src="keeper" alt="" :style="positionStyle" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";
import keeper from "@/assets/keeper.png";
import { Player, initPlayer, moveLeft } from "../game/player.ts";
import { usePosition } from "../composables/position";

const player: Player = reactive({
  x: 5,
  y: 1,
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
      console.log(player);
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
