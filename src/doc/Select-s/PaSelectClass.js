import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaSelectDoc.md";
@Component
class PaSelectClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaSelectClass;
