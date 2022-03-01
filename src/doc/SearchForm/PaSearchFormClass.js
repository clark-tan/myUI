import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaSearchFormDoc.md";
@Component
class PaSearchFormClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaSearchFormClass;
