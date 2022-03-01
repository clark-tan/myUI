import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaButtonDoc.md";
@Component
class PaButtonClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaButtonClass;
