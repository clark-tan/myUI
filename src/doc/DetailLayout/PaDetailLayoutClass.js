import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaDetailLayoutDoc.md";
@Component
class PaDetailLayoutClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaDetailLayoutClass;
