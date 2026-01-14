<script setup lang="ts">
import { type TIconButtonProps } from "./types";

const props = withDefaults(defineProps<TIconButtonProps>(), {
  size: "auto",
  variant: "bordered",
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :class="['icon-button', `icon-button--size-${size}`, `icon-button--variant-${variant}`, className]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<style scoped lang="scss">
@use "./IconButton.styles.scss";
</style>
