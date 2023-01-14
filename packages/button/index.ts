import kdButton from "./index.vue";
kdButton.install = (app: { component: (arg0: string, arg1: any) => void }) => {
  app.component(kdButton.name, kdButton);
};
export default kdButton;
