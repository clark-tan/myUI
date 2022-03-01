import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTreeDoc.md";
@Component
class PaTreeClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTreeClass;
