<script setup lang="ts">
import type { Status } from "@types";

type TStatusDotProps = {
  status: Status;
};

const { status } = defineProps<TStatusDotProps>();

const colorByStatus = {
  alive: "bg-green-500",
  dead: "bg-red-500",
  unknown: "bg-orange-400",
};
</script>

<template>
  <span
    class="status-dot__wrapper"
    :class="colorByStatus[status?.toLowerCase() as keyof typeof colorByStatus]"
  />
</template>

<style scoped lang="scss">
@use "./StatusDot.styles.scss";
</style>
