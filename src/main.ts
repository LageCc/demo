import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import * as echarts from 'echarts'

var app = createApp(App);
app.use(ElementPlus);

Object.keys(ElIcons).forEach(key => {
    app.component(key, ElIcons[key as keyof typeof ElIcons])
  });
  
app.use(store);
app.use(router);
app.mount('#app');

