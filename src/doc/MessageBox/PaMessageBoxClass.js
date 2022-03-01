import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaMessageBoxDoc.md";
@Component
class PaMessageBoxClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaMessageBoxClass;
