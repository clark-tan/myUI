import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTransferDoc.md";
@Component
class PaTransferClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTransferClass;
