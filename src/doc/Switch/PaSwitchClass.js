import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaSwitchDoc.md";
@Component
class PaSwitchClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaSwitchClass;
