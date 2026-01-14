<script setup lang="ts" generic="T">
import { ArrowDown, ArrowUp } from "@assets";
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { TSelectorProps } from "./types";
import DefaultOptionComponent from "./ui/DefaultOptionComponent.vue";

const {
  options,
  value,
  size = "big",
  placeholder,
  hasClearButton = false,
  clearButtonSize = "auto",
  clearButtonVariant = "plain",
  customItem = DefaultOptionComponent,
} = defineProps<TSelectorProps<T>>();

const classSizes = {
  small: "selector--small",
  big: "selector--big",
} as const;

const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const selectedOption = computed(() => options.find((option) => option.value === value)) || null;
const iconWidth = computed(() => (size === "big" ? "10px" : "4px"));

const emit = defineEmits<{
  onSelect: [option: T | null];
}>();

const handleToggleMenu = () => (isOpen.value = !isOpen.value);

const handleSelect = (option: T) => {
  if (selectedOption.value?.value === option) {
    emit("onSelect", null);
    return handleToggleMenu();
  }

  emit("onSelect", option);
  return handleToggleMenu();
};

const handleClickOutside = (event: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    ref="containerRef"
    class="selector"
    :class="classSizes[size]"
  >
    <button
      class="selector__button"
      @click.stop="handleToggleMenu"
    >
      <component
        :is="customItem"
        :option="selectedOption"
        :size="size"
        v-if="selectedOption"
      />
      <p
        v-else
        class="selector__text"
      >
        {{ placeholder }}
      </p>

      <ArrowDown
        v-if="!isOpen"
        :width="iconWidth"
      />
      <ArrowUp
        v-if="isOpen"
        :width="iconWidth"
      />
    </button>

    <ul
      class="selector__menu"
      v-if="isOpen"
    >
      <li
        v-for="option in options"
        class="selector__item"
        @click="handleSelect(option.value as T)"
        :key="String(option.value)"
      >
        <component
          :is="customItem"
          :option="option"
          :selected="option.value === value"
          :size="size"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "./Selector.styles.scss";
</style>
