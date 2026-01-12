<script setup lang="ts">
type TCharacterRowProps = {
  title: string;
  value: string;
};

defineProps<TCharacterRowProps>();
</script>

<template>
  <div class="character__row">
    <p class="character__title">{{ title }}</p>
    <p class="character__value">{{ value }}</p>
  </div>
</template>

<style scoped>
@import "./CharacterRow.styles.scss";
</style>
