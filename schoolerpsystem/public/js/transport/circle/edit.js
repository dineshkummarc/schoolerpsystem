(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{YqdZ:function(t,e,r){"use strict";r.r(e);var s={components:{circleForm:r("cquL").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-transport-circle")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},i=r("KHd+"),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.edit_circle")))])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/transport/circle")}}},[r("i",{staticClass:"fas fa-list"}),t._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.circle")))])])])])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body p-t-20"},[r("circle-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=a.exports},cquL:function(t,e,r){"use strict";var s={data:function(){return{circleForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.circleForm.post("/api/transport/circle").then((function(r){toastr.success(r.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/transport/circle/"+this.id).then((function(r){t.circleForm.name=r.name,t.circleForm.description=r.description,e.hide()})).catch((function(r){e.hide(),helper.showErrorMsg(r),t.$router.push("/transport/circle")}))},update:function(){var t=this,e=this.$loading.show();this.circleForm.patch("/api/transport/circle/"+this.id).then((function(r){toastr.success(r.message),e.hide(),t.$router.push("/transport/circle")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},i=r("KHd+"),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.circleForm.errors.clear(e.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle_name")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.circleForm.name,expression:"circleForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.circle_name")},domProps:{value:t.circleForm.name},on:{input:function(e){e.target.composing||t.$set(t.circleForm,"name",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.circleForm,"prop-name":"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.circle_description")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.circleForm.description,expression:"circleForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("transport.circle_description")},domProps:{value:t.circleForm.description},on:{input:function(e){e.target.composing||t.$set(t.circleForm,"description",e.target.value)}}}),t._v(" "),r("show-error",{attrs:{"form-name":t.circleForm,"prop-name":"description"}})],1)])]),t._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/circle"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?r("span",[t._v(t._s(t.trans("general.update")))]):r("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=a.exports}}]);
//# sourceMappingURL=edit.js.map?id=d04faa1c9e14f96766f2