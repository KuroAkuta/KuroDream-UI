import kdButton from "./button/index";
import kdInput from "./input/index";
import kdTextarea from "./textarea/index";

const install = (app: { use: (arg0: any) => void }) => {
  app.use(kdButton);
  app.use(kdInput);
  app.use(kdTextarea);
};

const KDUI = {
  install,
};
export{ kdButton, kdInput, kdTextarea};
export default KDUI;
