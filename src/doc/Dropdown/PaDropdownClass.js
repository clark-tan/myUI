import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaDropdownDoc.md";
@Component
class PaDropdownClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaDropdownClass;
