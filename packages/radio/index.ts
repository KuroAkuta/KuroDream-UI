import kdRadio from "./index.vue";
kdRadio.install = (app: { component: (arg0: string, arg1: any) => void }) => {
  app.component(kdRadio.name, kdRadio);
};
export default kdRadio;
