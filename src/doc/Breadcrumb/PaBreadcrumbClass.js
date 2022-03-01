import Canvas from "../../template/canvas";
import Component from "vue-class-component";
import md from "./PaBreadcrumbDoc.md";
@Component
class PaBreadcrumbClass extends Canvas {
  value = md;
  constructor(p) {
    super(p);
  }
}

export default PaBreadcrumbClass;
