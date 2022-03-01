import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./InstallationDoc.md";

@Component
class InstallationClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default InstallationClass;
