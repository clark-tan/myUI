import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaFormDoc.md";
@Component
class PaFormClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaFormClass;
