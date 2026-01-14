<script setup lang="ts">
import { Selector, StatusDot } from "@components";
import { statusOptions } from "@constants";
import type { Status } from "@types";
import CharacterCustomSelectorItem from "../CharacterCustomSelectorItem/CharacterCustomSelectorItem.vue";

type TCharacterStatusRowProps = {
  label: string;
  characterStatus: Status;
  isEditing: boolean;
};

const { label, characterStatus, isEditing } = defineProps<TCharacterStatusRowProps>();
const emit = defineEmits<{
  (e: "onSelect", value: Status | null): void;
}>();

const handleStatusChange = (value: string | null | undefined) => {
  if (!value) {
    return emit("onSelect", null);
  }

  emit("onSelect", value as Status);
};
</script>

<template>
  <p>{{ label }}</p>
  <Selector
    v-if="isEditing"
    @on-select="handleStatusChange"
    size="small"
    :options="statusOptions"
    :value="characterStatus?.toLowerCase() as Status"
    :customItem="CharacterCustomSelectorItem"
  />

  <div
    v-else
    class="status__wrapper"
  >
    <p class="status__text">{{ characterStatus }}</p>
    <StatusDot :status="characterStatus" />
  </div>
</template>

<style scoped lang="scss">
@use "./CharacterStatusRow.styles.scss";
</style>
