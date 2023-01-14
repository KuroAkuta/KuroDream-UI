import kdButton from "./button/index";
import kdInput from "./input/index";
import kdTextarea from "./textarea/index";
import kdSelect from "./select/index";

const install = (app: { use: (arg0: any) => void }) => {
  app.use(kdButton);
  app.use(kdInput);
  app.use(kdTextarea);
  app.use(kdSelect);
};

const KDUI = {
  install,
};
export { kdButton, kdInput, kdTextarea, kdSelect };

export default KDUI;
