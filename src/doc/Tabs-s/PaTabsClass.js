import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTabsDoc.md";
@Component
class PaTabsClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTabsClass;
