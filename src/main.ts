import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import { createWebHashHistory, createRouter } from "vue-router";
import Chen from './components/Chen.vue'
import Chen2 from './components/Chen2.vue'

const history = createWebHashHistory();
const router = createRouter({
    history : history,
    routes : [
        {path:'/',component: Chen},
        {path:'/xxx',component: Chen2}
    ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");
