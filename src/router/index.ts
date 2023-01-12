import { createRouter, createWebHashHistory } from 'vue-router';
import routerPages from './routerPage/page'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        ...routerPages,

    ]
});
export  default router;