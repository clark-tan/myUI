import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaUpdateDoc.md";
@Component
class PaUpdateClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaUpdateClass;
