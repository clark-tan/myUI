import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaMessageDoc.md";
@Component
class PaMessageClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaMessageClass;
