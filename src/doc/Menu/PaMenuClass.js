import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaMenuDoc.md";
@Component
class PaMenuClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaMenuClass;
