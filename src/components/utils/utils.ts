class Utils {
  static queryParentNode(el: Element, id: string): Element | null {
    if (el === document.body) {
      return null;
    }
    if (id.startsWith(".")) {
      if (el.classList.contains(id.substr(1, id.length - 1))) {
        return el;
      } else {
        el = el.parentElement || document.body;
        return this.queryParentNode(el, id);
      }
    } else if (id.startsWith("#")) {
      if (el.getAttribute("id") === id.substr(0, id.length - 1)) {
        return el;
      } else {
        el = el.parentElement || document.body;
        return this.queryParentNode(el, id);
      }
    } else {
      console.error("请输入id或者class");
      return null;
    }
  }

  static getTrueStyle(obj: HTMLElement | any, attr: string): string {
    if (obj.currentStyle) {
      //ie
      return obj.currentStyle[attr];
    } else {
      const style: any = window.getComputedStyle(obj, null);
      return style[attr];
    }
  }

  static outHeight(el: HTMLElement | any): number {
    const marginTop = parseInt(
      String(/\d+/.exec(this.getTrueStyle(el, "marginTop")))
    );
    const marginBottom = parseInt(
      String(/\d+/.exec(this.getTrueStyle(el, "marginBottom")))
    );
    return marginBottom + marginTop + el.offsetHeight;
  }

  static innerHeight(el: HTMLElement): number {
    const paddingTop = parseInt(
      String(/\d+/.exec(this.getTrueStyle(el, "paddingTop")))
    );
    const paddingBottom = parseInt(
      String(/\d+/.exec(this.getTrueStyle(el, "paddingBottom")))
    );
    return el.offsetHeight - paddingBottom - paddingTop;
  }

  static getNavigator(): string {
    return !!window.ActiveXObject || "ActiveXObject" in window ? "Ie" : "Other";
  }
}
export { Utils };
