import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaDatePickerDoc.md";
@Component
class PaDatePickerClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaDatePickerClass;
