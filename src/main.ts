import { createApp } from 'vue'
import '@/style.scss'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
let pinia = createPinia();

let app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router);
app.use(pinia);
app.mount('#app')


// 全局导入element-plus的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}