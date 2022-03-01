<!--
 * @Autor: clark tan
 * @Date: 2021-06-22 19:19:44
 * @LastEditors: clark tan
 * @LastEditTime: 2021-06-30 18:05:09
 * @Description: 
-->
<template>
  <div class="page-demo">
    <div style="display: block">
      <h4 style="color: red">
        <pre>
          *菜单结构与业务系统路由层级无关联，菜单结构需传入树形结构（详情页与列表页请定义成父子关系）
          详情菜单的path值支持配置成固定path值或字符串拼接动态参数的情况
          传入菜单组件的path值务必与路由设置的path值保持一致
        </pre>
      </h4>
      <!-- <h4>
        菜单组件接收属性说明：
      </h4>
      <pre>
         1、is-tree 代表接收菜单数据结构类型（默认值为true）
         2、menu 菜单数据
      </pre> -->
      <h4>
        菜单组件数据结构说明：
        <!-- <pre>
          1、平级的数组结构（示例是按平台管理接口返回的字段给出）
          2、树形结构
        </pre> -->
      </h4>
      <!-- <pre>
        平级结构示例：
        [{
          funcId: '1965f873992348c5b55bb0c492fb3771', // 菜单唯一id，key名可以为id或者funcId
          funcName: '服务共享中心', // 菜单名称, key名可以为title或者funcName
          funcCode: 'SERVER-MONITOR', // 菜单编码
          url: '/', // 菜单路由地址, key名可以为path或者url
          funcIcon: null, // 菜单图标, key名可以为icon或者funcIcon
          parentId: '0', // 当前菜单关联的父级菜单id；根结点的parentId请设置为0
          seqNo: 1, // 菜单排序值
        }]
      </pre> -->
      <pre>
        树形结构示例：
        [
          {
            title: '菜单1',  // 菜单名称, key名可以为title或者funcName
            icon: 'icon-riqixuanzeqi', // 菜单图标, key名可以为icon或者funcIcon
            path: '/route-path1', // 菜单路由地址, key名可以为path或者url
            children: [
              {
                title: '首页详情',
                path: '/route-path1-1',
                isIndexDetail: true // 是否为首页详情页，可理解为一级菜单的详情页面(仅在一级菜单可点击的情况下为其详情页菜单设置)
              },
            ],
          }
        ]
      </pre>
      <h4>菜单扩展方法说明</h4>
      <pre>
        1、disabledFun 设置菜单项是否禁用的方法，返回值为boolean，参数为菜单信息。可参考示例
        2、hiddenFun 设置菜单项是否隐藏的方法，返回值为boolean，参数为菜单信息。可参考示例
      </pre>
      <h4>
        面包屑组件属性：（面包屑完整引用示例请查看table-layout和detail-layout组件示例）
      </h4>
      <pre>
          1、breadcrumbs: 面包屑层级关系数据（数据结构与菜单数据保持一致）。
          2、customSuffix: 自定义最后一层面包屑名称（可不传，主要用于最后一层自定义名称）
          3、isReplace: 自定义的面包屑是否替换路由生成的面包屑最后一级（默认值为false，如果需要替换可传入true）
          4、isCustom: 是否要自定义面包屑（默认值为false）
      </pre>
    </div>

    <h3>树形菜单结构</h3>
    <div style="display: flex">
      <div>
        <pa-menu
          :menu="menu"
          :disabled-fun="disabledFun"
          :hidden-fun="hiddenFun"
        />
        <pa-button
          v-if="$route.path == '/'"
          type="primary"
          @click="handleDetails3"
        >
          模拟首页详情跳转
        </pa-button>
        <pa-button
          v-if="$route.path == '/system/list'"
          type="primary"
          @click="handleDetails2"
        >
          模拟详情页面跳转
        </pa-button>
      </div>
      <div>
        <h4>默认router面包屑</h4>
        <pa-breadcrumb :breadcrumbs="menu" />
        <h4>自定义面包屑最后一层内容 (自定义做替换)</h4>
        <pa-breadcrumb
          :breadcrumbs="menu"
          :custom-suffix="defaultBread"
          :is-replace="true"
        />
        <h4>自定义面包屑最后一层内容（自定义做叠加）</h4>
        <pa-breadcrumb :breadcrumbs="menu" :custom-suffix="defaultBread" />
        <h4>自定义面包屑</h4>
        <pa-breadcrumb :is-custom="true">
          我是自定义的面包屑 / 样式需要自己写
        </pa-breadcrumb>
      </div>
    </div>

    <!-- <h3>平行菜单结构</h3>
    <div style="display: flex">
      <pa-menu :menu="menu" :is-tree="false" />
      <div>
        <div>
          <h4>默认router面包屑</h4>
          <pa-breadcrumb :breadcrumbs="$route.matched" />
          <h4>自定义面包屑最后一层内容（自定义做叠加）</h4>
          <pa-breadcrumb :breadcrumbs="$route.matched" :custom-suffix="defaultBread" />
          <h4>自定义面包屑最后一层内容 (自定义做替换)</h4>
          <pa-breadcrumb
            :breadcrumbs="$route.matched"
            :custom-suffix="defaultBread"
            :is-replace="true"
          />
          <h4>自定义面包屑</h4>
          <pa-breadcrumb :is-custom="true">
            我是自定义的面包屑 / 样式需要自己写
          </pa-breadcrumb>
        </div>
        <pa-button
          v-if="$route.path == '/dashbord/server-monitoring'"
          type="primary"
          @click="handleDetails"
        >
          模拟服务器监控详情页面跳转
        </pa-button>
      </div>
    </div> -->

    <!-- <div>
      <pa-menu :menu="menu" :is-tree="false" :collapse="collapse" />
      <div>
        <button @click="collapse = !collapse">
          {{ collapse ? '展开' : '收起' }}
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
import menu from "../menu";
export default {
  data() {
    return {
      menu,
      collapse: true,
      // menu2: [
      //   {
      //     title: '首页',
      //     path: '/',
      //     children: [
      //       {
      //         title: '首页详情',
      //         path: '/index-detail',
      //         isIndexDetail: true,
      //       },
      //     ],
      //   },
      //   {
      //     title: '系统',
      //     icon: 'icon-riqixuanzeqi',
      //     path: '/system',
      //     funcCode: 'ONE',
      //     children: [
      //       {
      //         title: '列表页',
      //         path: '/system/list',
      //         children: [
      //           {
      //             title: '详情页',
      //             path: '/system/:systemCode',
      //           },
      //         ],
      //       },
      //       {
      //         title: '禁用菜单',
      //         path: '/route-path1-2',
      //       },
      //       {
      //         title: '菜单1-3',
      //         path: '/route-path1-3',
      //       },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     parentId: null,
      //     title: '菜单2',
      //     icon: 'icon-riqixuanzeqi',
      //     path: '/route-path2',
      //     children: [
      //       {
      //         id: 31,
      //         parentId: 2,
      //         title: '菜单2-1',
      //         path: '/route-path2-1',
      //       },
      //       {
      //         parentId: 2,
      //         id: 22,
      //         title: '菜单2-2',
      //         path: '/route-path2-2',
      //       },
      //       {
      //         parentId: 2,
      //         id: 23,
      //         title: '菜单2-3',
      //         path: '/route-path2-3',
      //       },
      //       {
      //         parentId: 2,
      //         id: 24,
      //         title: '菜单2-4',
      //         path: '/route-path2-4',
      //       },
      //       {
      //         parentId: 2,
      //         id: 25,
      //         title: '菜单2-5',
      //         path: '/route-path2-5',
      //       },
      //       {
      //         parentId: 2,
      //         id: 26,
      //         title: '菜单2-6',
      //         path: '/route-path2-6',
      //       },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     parentId: null,
      //     title: '菜单3',
      //     icon: 'icon-riqixuanzeqi',
      //     path: '/route-path3',
      //   },
      // ],
      // menu: [
      //   {
      //     funcId: '1965f873992348c5b55bb0c492fb3771',
      //     funcName: '服务共享中心',
      //     funcCode: 'SERVER-MONITOR',
      //     url: '/',
      //     funcIcon: null,
      //     parentId: '0',
      //     seqNo: 1,
      //   },
      //   {
      //     funcId: '1cddfa0db26f42e88415b04cb82c63fa',
      //     funcName: '消息监控',
      //     funcCode: 'SERVER-MONITOR.MONITOR.HOME',
      //     url: '/',
      //     funcIcon: 'icon-riqixuanzeqi',
      //     parentId: '68f1a39f6cc34d3dbfbafea523d85065',
      //     seqNo: 2,
      //   },
      //   {
      //     funcId: '1d9539a941ff4d08b56174cec382984d',
      //     funcName: '消息统计',
      //     funcCode: 'SERVER-MONITOR.Message.MessageStatistics',
      //     url: '/message/message-statistics',
      //     funcIcon: null,
      //     parentId: '73a7e3717af24e79a4a19a036560a01c',
      //     seqNo: 3,
      //   },
      //   {
      //     funcId: '2d26c08ee9604a10aa969c1c2bbcdf51',
      //     funcName: '组件详情',
      //     funcCode: 'SERVER-MONITOR.MONITOR.ServerDetail',
      //     url: '/dashbord/server-details',
      //     funcIcon: null,
      //     parentId: 'fac0eb5cf50b4500a3a6b0010ab2cb68',
      //     seqNo: 3,
      //   },
      //   {
      //     funcId: '35a1dae1197d439f9320c185cf369f5d',
      //     funcName: 'ESB管理',
      //     funcCode: 'SERVER-MONITOR.SystemManager.ESB',
      //     url: '/system/esb',
      //     funcIcon: null,
      //     parentId: '59c290b0a70a4fcea8c3c784766c09e2',
      //     seqNo: 4,
      //   },
      //   {
      //     funcId: '59c290b0a70a4fcea8c3c784766c09e2',
      //     funcName: '系统管理',
      //     funcCode: 'SERVER-MONITOR.SystemManager',
      //     url: '/system/esb',
      //     funcIcon: 'icon-riqixuanzeqi',
      //     parentId: '1965f873992348c5b55bb0c492fb3771',
      //     seqNo: 4,
      //   },
      //   {
      //     funcId: '68f1a39f6cc34d3dbfbafea523d85065',
      //     funcName: '监控管理',
      //     funcCode: 'SERVER-MONITOR.MONITOR',
      //     url: '/',
      //     funcIcon: 'icon-riqixuanzeqi',
      //     parentId: '1965f873992348c5b55bb0c492fb3771',
      //     seqNo: 2,
      //   },
      //   {
      //     funcId: '73a7e3717af24e79a4a19a036560a01c',
      //     funcName: '消息管理',
      //     funcCode: 'SERVER-MONITOR.Message',
      //     url: '/message/message-statistics',
      //     funcIcon: 'icon-riqixuanzeqi',
      //     parentId: '1965f873992348c5b55bb0c492fb3771',
      //     seqNo: 3,
      //   },
      //   {
      //     funcId: '73acc874385c41bfadd883fd7f0e4791',
      //     funcName: '消息检索',
      //     funcCode: 'SERVER-MONITOR.Message.MessageList',
      //     url: '/message/message-list',
      //     funcIcon: null,
      //     parentId: '73a7e3717af24e79a4a19a036560a01c',
      //     seqNo: 3,
      //   },
      //   {
      //     funcId: '[ticket]http://124.196.2.181/',
      //     funcName: '系统注册',
      //     funcCode: 'SERVER-MONITOR.SystemManager.SYSTEM',
      //     url: '/system/system',
      //     funcIcon: null,
      //     parentId: '59c290b0a70a4fcea8c3c784766c09e2',
      //     seqNo: 4,
      //   },
      //   {
      //     funcId: 'c28830ed670046d4a0fa84d64fcb4d81',
      //     funcName: '服务管理',
      //     funcCode: 'SERVER-MONITOR.SystemManager.SERVICE',
      //     url: '/system/service',
      //     funcIcon: null,
      //     parentId: '59c290b0a70a4fcea8c3c784766c09e2',
      //     seqNo: 2,
      //   },
      //   {
      //     funcId: 'e879e833fbda4f3ab9ed61ef3cfbb511',
      //     funcName: '厂商管理',
      //     funcCode: 'SERVER-MONITOR.SystemManager.SUPPLIER',
      //     url: '/system/supplier',
      //     funcIcon: null,
      //     parentId: '59c290b0a70a4fcea8c3c784766c09e2',
      //     seqNo: 4,
      //   },
      //   {
      //     funcId: 'fac0eb5cf50b4500a3a6b0010ab2cb68',
      //     funcName: '服务器监控',
      //     funcCode: 'SERVER-MONITOR.MONITOR.SERVER',
      //     url: '/dashbord/server-monitoring',
      //     funcIcon: null,
      //     parentId: '68f1a39f6cc34d3dbfbafea523d85065',
      //     seqNo: 2,
      //   },
      // ],
      permission: ["ONE"],
      defaultBread: [
        {
          path: "",
          meta: {
            title: "自定义面包屑",
          },
        },
      ],
    };
  },
  mounted() {
    this.$pahmUtils.title.update("测试页面标题");
  },
  methods: {
    disabledFun(item) {
      if (item.path === "/route-path1-2" || item.path === "/route-path3") {
        return true;
      }
    },
    hiddenFun(item) {
      // 隐藏1-3
      if (item.path === "/route-path1-3") {
        return true;
      }
    },
    handleDetails() {
      this.$router.push({ path: "/dashbord/server-details" });
    },
    handleDetails2() {
      this.$router.push({ path: `/system/110` });
    },
    handleDetails3() {
      this.$router.push({ path: "/index-detail" });
    },
  },
};
</script>

<style>
.page-demo {
  /* height: 400px; */
  /* display: flex; */
  background-color: #edf1f7;
}
</style>
