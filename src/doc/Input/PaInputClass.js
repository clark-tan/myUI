import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaInputDoc.md";
@Component
class PaInputClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaInputClass;
