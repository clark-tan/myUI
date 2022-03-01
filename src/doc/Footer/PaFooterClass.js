import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaFooterDoc.md";
@Component
class PaFooterClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaFooterClass;
