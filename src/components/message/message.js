import { Message } from "element-ui";
import "./style";

let instances = [];
const PaMessage = (options) => {
  if (options.type === "danger") {
    const obj = {
      customClass: "pa_custom_danger",
      iconClass: "el-icon-delete",
    };
    options = Object.assign(obj, options);
  }
  if (!options.maxCount) {
    return Message(options);
  }
  if (instances.length < options.maxCount) {
    instances.push(Message(options));
  } else {
    instances[0].close();
    instances.shift();
    instances.push(Message(options));
  }
  return instances;
};

["error", "success", "info", "warning", "danger"].forEach((type) => {
  PaMessage[type] = (options) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    options.type = type;
    options.maxCount = 0;
    return PaMessage(options);
  };
});

export default PaMessage;
