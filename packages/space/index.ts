import kdspace from './index.vue';
kdspace.install = (app: { component: (arg0: string, arg1: any) => void; }) => {
    app.component(kdspace.name, kdspace)
};
export default kdspace;
