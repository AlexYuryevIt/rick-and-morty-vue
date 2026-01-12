<script setup lang="ts">
import { CHARACTER_FIELDS_LABELS } from "@constants";
import type { TCharacterCardProps } from "./types";
import CharacterRow from "./ui/CharacterRow/CharacterRow.vue";
import CharacterRowList from "./ui/CharacterRowList/CharacterRowList.vue";

const { character } = defineProps<TCharacterCardProps>();

const characterRows = [
  {
    title: CHARACTER_FIELDS_LABELS.GENDER,
    value: character.gender,
  },
  {
    title: CHARACTER_FIELDS_LABELS.SPECIES,
    value: character.species,
  },
  {
    title: CHARACTER_FIELDS_LABELS.LOCATION,
    value: character.location.name,
  },
];
</script>

<template>
  <div class="character__card">
    <img
      class="character__image"
      :src="character.image"
      :alt="character.name"
    />
    <div class="character__info">
      <h3 class="character__heading">{{ character.name }}</h3>
      <CharacterRowList :rows="characterRows" />
      <CharacterRow
        :title="CHARACTER_FIELDS_LABELS.STATUS"
        :value="character.status ?? 'Unknown'"
      />
    </div>
  </div>
</template>

<style scoped>
@import "./CharacterCard.styles.scss";
</style>
