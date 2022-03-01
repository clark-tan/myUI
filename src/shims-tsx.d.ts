/*
 * @Autor: clark tan
 * @Date: 2021-12-21 13:46:42
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-21 17:50:49
 * @Description:
 */
import Vue, { VNode } from "vue";
import { install } from "vuex";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  // eslint-disable-next-line no-var
  var exampleInstance: any;
}

declare module "vue/types/vue" {
  interface Vue {
    $paMessage: any;
    $paConfirm: any;
    $paMessageBox: any;
  }
  interface VueConstructor {
    install: any;
    $createElement: any;
  }
}

declare module "*.js";
