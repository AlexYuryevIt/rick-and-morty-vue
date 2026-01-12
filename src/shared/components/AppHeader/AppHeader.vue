<script setup lang="ts">
import { computed, ref } from "vue";

import { IconButton } from "@components";
import { ColorScheme, LABELS, ThemeLanguage } from "@constants";
import type { TLang, TTheme } from "@types";
import { HeaderLogo, Moon, Sun } from "../../../assets";

const language = ref<TLang>(ThemeLanguage.Ru);
const theme = ref<TTheme>(ColorScheme.Light);

const currentLanguage = computed(() => (language.value === ThemeLanguage.Ru ? LABELS.RU_LANG : LABELS.EN_LANG));

const handleChangeLanguage = () =>
  (language.value = language.value === ThemeLanguage.Ru ? ThemeLanguage.En : ThemeLanguage.Ru);

const handleChangeTheme = () =>
  (theme.value = theme.value === ColorScheme.Light ? ColorScheme.Dark : ColorScheme.Light);
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <HeaderLogo />
      <div class="header__buttons">
        <IconButton
          size="big"
          @click="handleChangeTheme"
        >
          <Sun v-if="theme === ColorScheme.Light" />
          <Moon v-else />
        </IconButton>
        <IconButton
          size="big"
          @click="handleChangeLanguage"
        >
          <p class="header__button_text">{{ currentLanguage }}</p>
        </IconButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "./AppHeader.styles.scss";
</style>
