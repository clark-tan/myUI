import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaTimePickerDoc.md";
@Component
class PaTimePickerClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaTimePickerClass;
