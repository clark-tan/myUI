/*
 * @Autor: clark tan
 * @Date: 2021-05-24 14:09:56
 * @LastEditors: clark tan
 * @LastEditTime: 2021-12-22 15:02:26
 * @Description:
 */
import "./style.js";

import { default as Button } from "./button";
import { default as Icon } from "./icon";
import { default as SearchForm } from "./search-form";
import { default as SearchFormItem } from "./search-form-item";
import { default as PageFooter } from "./page-footer";
import { default as PopConfirm } from "./pop-confirm";
import Table from "./table";
import { default as ErrorPage } from "./error-page";
import { default as Menu } from "./menu";
import { default as PageHeader } from "./page-header";
import { default as Tabs } from "./tabs";
import { default as TabPane } from "./tab-pane";
import { default as Tooltip } from "./tooltip";
import { default as DatePicker } from "./date-picker";
import { default as DatePickerMulti } from "./date-picker-multi";
import { default as Breadcrumb } from "./breadcrumb";
import { default as TableLayout } from "./layout/table-layout";
import { default as DetailLayout } from "./layout/detail-layout";
import Loading from "./loading/index";
import Message from "./message/index";
import PahmUtils from "./utils";
import { default as Dialog } from "./dialog";
import { default as Drawer } from "./drawer";
import { default as Input } from "./input";
import { default as InputNumber } from "./input-number";
import { default as Checkbox } from "./checkbox";
import { default as CheckboxGroup } from "./checkbox-group";
import { default as MultipleSelect } from "./multiple-select";
import {
  PaTransfer as Transfer,
  PaTransferLayout as TransferLayout,
  PaTransferTree as TransferTree,
  PaTransferTable as TransferTable,
} from "./transfer";
import { paConfirm, PaMessageBox } from "./message-box";
import { default as Select } from "./select";
import { default as Form } from "./form";
import { default as FormItem } from "./form-item";
import { default as Tree } from "./tree";
import { default as Radio } from "./radio";
import { default as Switch } from "./switch";
import { default as TimePicker } from "./time-picker";
import { default as Dropdown } from "./dropdown";
import { default as InputS } from "./input-s";
import { default as TabsS } from "./tabs-s";
import { default as DrawerS } from "./drawer-s";
import { default as DialogS } from "./dialog-s";
import { default as SelectS } from "./select-s";
const components = [
  Button,
  Icon,
  SearchForm,
  SearchFormItem,
  PageFooter,
  Menu,
  PageHeader,
  Tabs,
  TabPane,
  Tooltip,
  PopConfirm,
  ErrorPage,
  DatePicker,
  DatePickerMulti,
  Breadcrumb,
  Table,
  Loading,
  Dialog,
  Drawer,
  Input,
  InputNumber,
  Checkbox,
  CheckboxGroup,
  MultipleSelect,
  Transfer,
  TransferLayout,
  TransferTree,
  TransferTable,
  PahmUtils,
  TableLayout,
  DetailLayout,
  Select,
  Form,
  FormItem,
  Tree,
  Radio,
  Switch,
  TimePicker,
  Dropdown,
  InputS,
  TabsS,
  DrawerS,
  DialogS,
  SelectS,
];

const install = function (Vue) {
  components.map((component) => {
    Vue.use(component);
  });
  Vue.use(Loading.directive);
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$paMessage = Message;
  Vue.prototype.$paConfirm = paConfirm;
  Vue.prototype.$paMessageBox = PaMessageBox;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Button,
  Icon,
  SearchFormItem,
  SearchForm,
  PageFooter,
  Menu,
  Tabs,
  TabPane,
  Tooltip,
  PopConfirm,
  ErrorPage,
  DatePicker,
  DatePickerMulti,
  Breadcrumb,
  Table,
  Loading,
  Message,
  TableLayout,
  DetailLayout,
  PahmUtils,
  Dialog,
  Drawer,
  Checkbox,
  CheckboxGroup,
  MultipleSelect,
  Transfer,
  TransferLayout,
  TransferTree,
  TransferTable,
  Input,
  InputNumber,
  Select,
  Form,
  FormItem,
  PaMessageBox,
  Tree,
  Radio,
  Switch,
  TimePicker,
  Dropdown,
  InputS,
  TabsS,
  DrawerS,
  DialogS,
  SelectS,
};

export default {
  install,
  Button,
  Icon,
  SearchFormItem,
  SearchForm,
  PageFooter,
  Menu,
  PageHeader,
  Tabs,
  TabPane,
  Tooltip,
  PopConfirm,
  ErrorPage,
  Breadcrumb,
  Table,
  Loading,
  Message,
  TableLayout,
  DetailLayout,
  PahmUtils,
  DatePicker,
  DatePickerMulti,
  Dialog,
  Drawer,
  Transfer,
  TransferLayout,
  TransferTree,
  TransferTable,
  Input,
  InputNumber,
  Select,
  Form,
  FormItem,
  PaMessageBox,
  Tree,
  Radio,
  Switch,
  TimePicker,
  Dropdown,
  InputS,
  TabsS,
  DrawerS,
  DialogS,
  SelectS,
};
