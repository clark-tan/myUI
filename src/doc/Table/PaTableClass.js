import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTableDoc.md";
@Component
class PaTableClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTableClass;
