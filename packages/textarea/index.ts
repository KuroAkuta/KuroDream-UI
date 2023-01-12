import kdTextarea from './index.vue';
kdTextarea.install = (app: { component: (arg0: string, arg1: any) => void; }) => {
    app.component(kdTextarea.name, kdTextarea)
};
export default kdTextarea;