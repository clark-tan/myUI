import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaLoadingDoc.md";
@Component
class PaLoadingClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaLoadingClass;
