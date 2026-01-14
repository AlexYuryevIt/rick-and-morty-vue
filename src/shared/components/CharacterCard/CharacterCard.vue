<script setup lang="ts">
import { Checkmark, Close, Edit } from "@assets";
import { IconButton } from "@components";
import { CHARACTER_FIELDS_LABELS } from "@constants";
import type { Status } from "@types";
import { ref } from "vue";
import type { TCharacterCardProps } from "./types";
import CharacterRowList from "./ui/CharacterRowList/CharacterRowList.vue";
import CharacterStatusRow from "./ui/CharacterStatusRow/CharacterStatusRow.vue";

const { character } = defineProps<TCharacterCardProps>();

const isEditing = ref(false);
const status = ref<Status | null>(null);

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

const handleEditCharacter = () => (isEditing.value = !isEditing.value);

const handleChangeStatus = (value: Status | null) => {
  status.value = value;
};
</script>

<template>
  <div class="character__card">
    <div
      v-if="!isEditing"
      class="character__buttons-wrapper"
    >
      <IconButton
        variant="plain"
        class="character__edit-button"
        @click="handleEditCharacter"
      >
        <Edit />
      </IconButton>
    </div>

    <div
      v-else
      class="character__buttons-wrapper"
    >
      <IconButton
        variant="plain"
        class="character__edit-button"
        @click="handleEditCharacter"
      >
        <Close />
      </IconButton>
      <IconButton
        variant="plain"
        class="character__edit-button"
        @click="handleEditCharacter"
      >
        <Checkmark />
      </IconButton>
    </div>

    <img
      class="character__image"
      :src="character.image"
      :alt="character.name"
    />
    <div class="character__info">
      <h3
        v-if="!isEditing"
        class="character__heading"
      >
        {{ character.name }}
      </h3>
      <input
        v-else
        :value="character.name"
      />
      <CharacterRowList :rows="characterRows" />
      <CharacterStatusRow
        :label="CHARACTER_FIELDS_LABELS.STATUS"
        :character-status="isEditing ? status : character.status"
        :isEditing="isEditing"
        @on-select="handleChangeStatus"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./CharacterCard.styles.scss";
</style>
