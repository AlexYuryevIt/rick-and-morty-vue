<script setup lang="ts">
import { getCharactersList } from "@api";
import { CharacterCard, Selector } from "@components";
import { speciesOptions } from "@constants";
import type { TCharacter } from "@types";
import { onMounted, ref } from "vue";

const characters = ref<Array<TCharacter>>([]);
const species = ref<string | null>(null);

onMounted(async () => {
  const data = await getCharactersList();

  if (characters) {
    characters.value = data;
  }
});

const handleSetSpecies = (value: string | null) => {
  species.value = value;
};
</script>

<template>
  <div class="wrapper">
    <Selector
      :options="speciesOptions"
      :value="species"
      size="big"
      placeholder="Species"
      @on-select="handleSetSpecies"
    />
    <Selector
      :options="speciesOptions"
      :value="species"
      size="small"
      placeholder="Species"
      @on-select="handleSetSpecies"
    />
  </div>
  <ul class="character-list">
    <li v-for="char in characters">
      <CharacterCard :character="char" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "./HomePage.styles.scss";
</style>
