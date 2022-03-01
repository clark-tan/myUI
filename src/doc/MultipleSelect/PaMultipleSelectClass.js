import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaMultipleSelectDoc.md";
@Component
class PaMultipleSelectClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaMultipleSelectClass;
