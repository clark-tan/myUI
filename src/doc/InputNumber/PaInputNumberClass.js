import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaInputNumberDoc.md";
@Component
class PaInputNumberClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaInputNumberClass;
