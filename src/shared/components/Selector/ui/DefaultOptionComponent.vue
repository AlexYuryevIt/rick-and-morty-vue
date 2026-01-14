<script setup lang="ts" generic="T">
import { Checkmark } from "@assets";
import type { TDefaultOptionComponentProps } from "../types";

const { option, selected, size = "big" } = defineProps<TDefaultOptionComponentProps<T>>();

const textSizes = {
  small: "option__text--small",
  big: "option__text--big",
} as const;
</script>

<template>
  <span class="option__wrapper">
    <p
      class="option__text"
      :class="textSizes[size]"
    >
      {{ option.label }}
    </p>
    <Checkmark v-if="selected" />
  </span>
</template>

<style scoped lang="scss">
@use "./DefaultOptionComponent.styles.scss";
</style>
