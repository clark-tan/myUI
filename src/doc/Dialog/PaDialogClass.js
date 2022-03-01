import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaDialogDoc.md";
@Component
class PaDialogClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaDialogClass;
