export default [
  {
    path: "/guide",
    name: "guide",
    component: () => import("@/views/guide.vue"),
    children: [
      {
        path: "",
        name: "快速入门",
        component: () => import("/packages/common/doc/doc.md"),
      },
      {
        path: "button",
        name: "按钮",
        component: () => import("/packages/button/doc/doc.md"),
      },
      {
        path: "input",
        name: "输入框",
        component: () => import("/packages/input/doc/doc.md"),
      },
      {
        path: "textarea",
        name: "文本域",
        component: () => import("/packages/textarea/doc/doc.md"),
      },
      {
        path: "select",
        name: "下拉框",
        component: () => import("/packages/select/doc/doc.md"),
      },
      {
        path: "radio",
        name: "单选",
        component: () => import("/packages/radio/doc/doc.md"),
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
];
