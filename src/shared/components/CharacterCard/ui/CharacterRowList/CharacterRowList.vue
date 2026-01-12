<script setup lang="ts">
import CharacterRow from "../CharacterRow/CharacterRow.vue";

interface TRowItem {
  title: string;
  value: string;
}

interface TCharacterRowListProps {
  rows: TRowItem[];
}

const props = defineProps<TCharacterRowListProps>();
</script>

<template>
  <div class="character__row-list">
    <CharacterRow
      v-for="row in props.rows"
      :key="row.title"
      :title="row.title"
      :value="row.value"
    />
  </div>
</template>

<style scoped>
@import "./CharacterRowList.styles.scss";
</style>
