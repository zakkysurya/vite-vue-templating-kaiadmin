import { createApp } from "vue";
import "@/assets/sass/main.sass";
import App from "@/App.vue";
import router from "@/plugins/router";

// Membuat dan memasang Vue app
createApp(App).use(router).mount("#app");
