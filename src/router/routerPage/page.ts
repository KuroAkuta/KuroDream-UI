export default [
    {
        path:"/",
        name:"home",
        component: () => import("@/views/home.vue"),
        children:[
            {
                path:'',
                name:'快速入门',
                component: () => import("/packages/common/doc/doc.md"),
            },
            {
                path:'button',
                name:'按钮',
                component: () => import("/packages/button/doc/doc.md"),
            },
            {
                path:'input',
                name:'输入框',
                component: () => import("/packages/input/doc/doc.md"),
            },
            {
                path:'textarea',
                name:'文本域',
                component: () => import("/packages/textarea/doc/doc.md"),
            },

            
            
        ]
    }
]