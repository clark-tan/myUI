import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTableLayoutDoc.md";
@Component
class PaTableLayoutClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTableLayoutClass;
