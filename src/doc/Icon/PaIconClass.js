import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaIconDoc.md";
@Component
class PaIconClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaIconClass;
