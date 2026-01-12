import { router } from "@router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./main.scss";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties;
app.config.errorHandler;

app.use(router);
app.use(pinia);

app.mount("#app");
