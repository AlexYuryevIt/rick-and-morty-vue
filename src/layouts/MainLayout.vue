<script setup lang="ts">
import { AppFooter, AppHeader } from "@components";
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f8fafc;
}

.main {
  padding: 26px 0;
  width: 100%;
  flex: 1;
  overflow-x: hidden;
}
</style>
