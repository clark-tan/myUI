import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaDrawerDoc.md";
@Component
class PaDrawerClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaDrawerClass;
