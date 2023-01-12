import kdInput from './index.vue';
kdInput.install = (app: { component: (arg0: string, arg1: any) => void; }) => {
    app.component(kdInput.name, kdInput)
};
export default kdInput;
