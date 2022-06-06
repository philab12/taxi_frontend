import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import NavBarComp from "@/components/NavBarComp.vue"

/*
Font Awesome CSS
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
Bootstrap CSS, JS
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);
app.use(store);
app.use(router);
//app.component('NavBarComp', NavBarComp);
app.mount("#app");