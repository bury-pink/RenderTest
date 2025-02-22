import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

axios.defaults.baseURL = process.env.MY_NODE_URL;
axios.defaults.withCredentials = true;

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app')
