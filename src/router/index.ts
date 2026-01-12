import { MainLayout } from "@layouts";
import { CharacterPage, HomePage } from "@pages";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: HomePage,
        },
        {
          path: "/character/:id",
          name: "Character",
          component: CharacterPage,
        },
      ],
    },
  ],
});
