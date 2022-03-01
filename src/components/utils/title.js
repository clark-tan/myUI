let _systemName = process.env.VUE_APP_SYSTEM_NAME || "";
const update = (title) => {
  if (title) {
    document.title = `${_systemName ? _systemName + "-" : ""}${title}`;
  } else {
    document.title = `${_systemName}`;
  }
};

const init = (systemName) => {
  _systemName = systemName;
};

export { init, update };
export default {
  init,
  update,
};
