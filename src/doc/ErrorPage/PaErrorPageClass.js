import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaErrorPageDoc.md";
@Component
class PaErrorPageClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaErrorPageClass;
