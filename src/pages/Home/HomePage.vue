<script setup lang="ts">
import { getCharactersList } from "@api";
import { CharacterCard } from "@components";
import type { TCharacter } from "@types";
import { onMounted, ref } from "vue";

const characters = ref<Array<TCharacter>>([]);

onMounted(async () => {
  const data = await getCharactersList();

  if (characters) {
    characters.value = data;
  }
});
</script>

<template>
  <ul class="character-list">
    <li v-for="char in characters">
      <CharacterCard :character="char" />
    </li>
  </ul>
</template>

<style scoped>
@import "./HomePage.styles.scss";
</style>
