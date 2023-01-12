import { createApp } from 'vue'
import App from './App.vue'
import KDUI from '../packages/index'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'
const app = createApp(App);
app.use(KDUI);
app.use(router)


app.mount('#app');
app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block:any) => {
        hljs.highlightBlock(block);
    });
});//自定义指令
