(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"U/Vj":function(t,e,i){"use strict";i.r(e);var n={components:{buildingForm:i("p/Xc").a},data:function(){return{buildings:{total:0,data:[]},filter:{sort_by:"name",order:"asc",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.asset.building_name}],showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getBuildings()},methods:{getConfig:function(t){return helper.getConfig(t)},getBuildings:function(t){var e=this,i=this.$loading.show();"number"!=typeof t&&(t=1);var n=helper.getFilterURL(this.filter);axios.get("/api/asset/building?page="+t+n).then((function(t){e.buildings=t,i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},editBuilding:function(t){this.$router.push("/configuration/asset/building/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(i){return e.deleteBuilding(t)}},deleteBuilding:function(t){var e=this,i=this.$loading.show();axios.delete("/api/asset/building/"+t.id).then((function(t){toastr.success(t.message),e.getBuildings(),i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},print:function(){var t=this.$loading.show();axios.post("/api/asset/building/print",{filter:this.filter}).then((function(e){var i=window.open("/print");t.hide(),i.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/asset/building/pdf",{filter:this.filter}).then((function(i){e.hide(),window.open("/download/report/"+i+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getBuildings()},"filter.order":function(t){this.getBuildings()},"filter.page_length":function(t){this.getBuildings()}},computed:{authToken:function(){return helper.getAuthToken()}}},s=i("KHd+"),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("asset.building"))+" \n                    "),t.buildings.total?i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.buildings.total,from:t.buildings.from,to:t.buildings.to})))]):i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[t.buildings.total&&!t.showCreatePanel?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("asset.add_new_building")))])]):t._e(),t._v(" "),i("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),i("div",{staticClass:"btn-group"},[i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),i("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[i("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[i("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),i("help-button",{on:{clicked:function(e){t.help_topic="configuration.asset.building"}}})],1)])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("transition",{attrs:{name:"fade"}},[t.showCreatePanel?i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("asset.add_new_building")))]),t._v(" "),i("building-form",{on:{completed:t.getBuildings,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[t.buildings.total?i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-sm"},[i("thead",[i("tr",[i("th",[t._v(t._s(t.trans("asset.building_name")))]),t._v(" "),i("th",[t._v(t._s(t.trans("asset.building_description")))]),t._v(" "),i("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),i("tbody",t._l(t.buildings.data,(function(e){return i("tr",[i("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.description)}}),t._v(" "),i("td",{staticClass:"table-option"},[i("div",{staticClass:"btn-group"},[i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("asset.edit_building"),expression:"trans('asset.edit_building')"}],staticClass:"btn btn-info btn-sm",on:{click:function(i){return i.preventDefault(),t.editBuilding(e)}}},[i("i",{staticClass:"fas fa-edit"})]),t._v(" "),i("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(building)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("asset.delete_building"),expression:"trans('asset.delete_building')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[i("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.buildings.total?t._e():i("module-info",{attrs:{module:"asset",title:"building_module_title",description:"building_module_description",icon:"list"}},[i("div",{attrs:{slot:"btn"},slot:"btn"},[t.showCreatePanel?t._e():i("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))])])]),t._v(" "),i("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.buildings},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getBuildings},nativeOn:{change:function(e){return t.getBuildings(e)}}})],1)])],1),t._v(" "),i("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=a.exports},"p/Xc":function(t,e,i){"use strict";var n={data:function(){return{buildingForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.buildingForm.post("/api/asset/building").then((function(i){toastr.success(i.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/asset/building/"+this.id).then((function(i){t.buildingForm.name=i.name,t.buildingForm.description=i.description,e.hide()})).catch((function(i){e.hide(),helper.showErrorMsg(i),t.$router.push("/configuration/asset/building")}))},update:function(){var t=this,e=this.$loading.show();this.buildingForm.patch("/api/asset/building/"+this.id).then((function(i){toastr.success(i.message),e.hide(),t.$router.push("/configuration/asset/building")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},s=i("KHd+"),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.buildingForm.errors.clear(e.target.name)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("asset.building_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.buildingForm.name,expression:"buildingForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("asset.building_name")},domProps:{value:t.buildingForm.name},on:{input:function(e){e.target.composing||t.$set(t.buildingForm,"name",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.buildingForm,"prop-name":"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("asset.building_description")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.buildingForm.description,expression:"buildingForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("asset.building_description")},domProps:{value:t.buildingForm.description},on:{input:function(e){e.target.composing||t.$set(t.buildingForm,"description",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.buildingForm,"prop-name":"description"}})],1)])]),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/asset/building"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():i("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?i("span",[t._v(t._s(t.trans("general.update")))]):i("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=a.exports}}]);
//# sourceMappingURL=index.js.map?id=43ee79656785d71e023d