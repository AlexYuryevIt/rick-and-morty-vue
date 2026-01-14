<script setup lang="ts" generic="T">
import { StatusDot } from "@components";
import type { Status } from "@types";

export type TOption = {
  label: string;
  value: Status;
};

type TCustomItemProps = {
  option: TOption;
  selected?: boolean;
  size?: "small" | "big";
};

const { option } = defineProps<TCustomItemProps>();
</script>

<template>
  <div class="wrapper">
    <p>{{ option.label }}</p>
    <StatusDot :status="option.value" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 4px;
  align-items: center;
}
</style>
