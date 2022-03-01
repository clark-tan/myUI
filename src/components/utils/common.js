/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 * @param routerMap
 * @param parent
 * @returns {*}
 */
const generatorMenu = (routerMap) => {
  return routerMap.map((item) => {
    const currentRouter = {
      // 如果路由设置了 path，则作为默认 path，否则 路由地址
      path: item.path || item.url || "",
      meta: {
        title: item.title || item.funcName || "",
        permission: item.funcCode,
        id: item.id || item.funcId,
        icon: item.icon || item.funcIcon,
        isIndexDetail: item.isIndexDetail || false,
      },
    };
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    if (!currentRouter.path.startsWith("http")) {
      currentRouter.path = currentRouter.path.replace("//", "/");
    }
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect);
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generatorMenu(item.children);
    }
    return currentRouter;
  });
};

/**
 * 数组转树形结构
 * @param list 源数组
 * @param parentId 父ID
 */
const listToTree = (list, parentId) => {
  let tree = [],
    menuList = [...list];
  sortArray(menuList, "seqNo");
  menuList.map((item) => {
    if (item.parentId == parentId) {
      // 递归寻找
      const pId = item.id || item.funcId;
      item.children = listToTree(list, pId);
      tree.push(item);
    }
  });
  return tree;
};
/**
 * 对象数组排序
 * @param arr 被排序的数组
 * @param key 排序的属性
 * @param order 排序方式
 */
const sortArray = (arr, key, order = "asc") => {
  if (order == "asc") {
    arr.sort((a, b) => a[key] - b[key]);
  } else if (order == "desc") {
    arr.sort((a, b) => b[key] - a[key]);
  }
  return arr;
};
/**
 * 获取所有父级节点
 */
const getParentId = (tree, currentName, currentPath) => {
  for (let i in tree) {
    if (tree[i].path == currentName || tree[i].path == currentPath) {
      return [tree[i]];
    }
    if (tree[i].children) {
      let node = getParentId(tree[i].children, currentName, currentPath);
      if (node !== undefined) {
        return node.concat(tree[i]);
      }
    }
  }
};

export { generatorMenu, listToTree, sortArray, getParentId };
