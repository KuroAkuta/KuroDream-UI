import kdButton from "./button/index";
import kdInput from "./input/index";
import kdTextarea from "./textarea/index";
import kdSelect from "./select/index";
import kdRadio from "./radio/index";

const install = (app: { use: (arg0: any) => void }) => {
  app.use(kdButton);
  app.use(kdInput);
  app.use(kdTextarea);
  app.use(kdSelect);
  app.use(kdRadio);
  
};

const KDUI = {
  install,
};
export { kdButton, kdInput, kdTextarea, kdSelect, kdRadio, };

export default KDUI;
