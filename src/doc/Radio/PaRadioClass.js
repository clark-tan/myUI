import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaRadioDoc.md";
@Component
class PaRadioClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaRadioClass;
