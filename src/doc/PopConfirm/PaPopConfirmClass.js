import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaPopConfirmDoc.md";
@Component
class PaPopConfirmClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaPopConfirmClass;
