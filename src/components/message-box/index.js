import { MessageBox } from "element-ui";

export function paConfirm(config) {
  return new Promise((resolve, reject) => {
    const h = this.$createElement;
    MessageBox({
      title: "",
      customClass: config.customClass
        ? `pa-msg custom-msg-box ${config.customClass}`
        : "pa-msg custom-msg-box",
      message: h(
        "div",
        {
          attrs: {
            class: "custom-msg-body",
          },
        },
        [
          h("pa-icon", {
            attrs: {
              name: config.icon ? config.icon : "icon-jinggao", // svg图标
              svgClass: "custom-msg-icon",
            },
          }),
          h("div", null, [
            h(
              "div",
              {
                attrs: {
                  class: "custom-msg-title",
                },
              },
              config.title
            ),
            h(
              "div",
              {
                attrs: {
                  class: "custom-msg-text",
                },
              },
              config.text
            ),
          ]),
        ]
      ),
      closeOnClickModal: config.closeOnClickModal
        ? config.closeOnClickModal
        : false,
      showClose: config.showClose,
      showCancelButton: config.showCancelButton === false ? false : true,
      confirmButtonText: config.confirmButtonText
        ? config.confirmButtonText
        : "确定",
      cancelButtonText: config.cancelButtonText
        ? config.cancelButtonText
        : "取消",
    })
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
}

export const PaMessageBox = function (p) {
  let config = {};
  if (p.customClass && typeof p.customClass === "string") {
    config = Object.assign(config, p, {
      customClass: `${p.customClass} pa-message-box`,
    });
  } else if (p.customClass && typeof p.customClass === "function") {
    config = Object.assign(config, p, {
      customClass: `${p.customClass()} pa-message-box`,
    });
  } else {
    config = Object.assign(config, p, {
      customClass: "pa-message-box",
    });
  }

  return MessageBox(config);
};
