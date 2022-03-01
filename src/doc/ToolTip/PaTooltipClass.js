import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTooltipDoc.md";
@Component
class PaTooltipClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTooltipClass;
