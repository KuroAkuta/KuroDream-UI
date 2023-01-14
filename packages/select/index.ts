import kdSelect from "./index.vue";
kdSelect.install = (app: { component: (arg0: string, arg1: any) => void }) => {
  app.component(kdSelect.name, kdSelect);
};
export default kdSelect;
