(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList}},[r("el-table-column",{attrs:{prop:"userId",label:"ID",width:"180"}}),r("el-table-column",{attrs:{prop:"name",label:"角色名",width:"180"}}),r("el-table-column",{attrs:{prop:"province",label:"所在省份",width:"180"}}),r("el-table-column",{attrs:{prop:"mail",label:"邮箱",width:"180"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{attrs:{disabled:1===t.row.userId,placeholder:"请选择"},model:{value:t.row.role,callback:function(r){e.$set(t.row,"role",r)},expression:"scope.row.role"}},e._l(e.powerList,(function(a){return r("el-option",{key:a.label,attrs:{label:a.label,value:a.label},on:{change:function(r){return e.changePower(t.row.userId)}}})})),1)]}}])}),r("el-table-column",{attrs:{prop:"role",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[1!==t.row.userId?r("el-button",{attrs:{size:"mini",round:""}},[r("span",{staticStyle:{"font-size":"10px"},on:{click:function(r){return e.submit(t.row.userId,t.row.role)}}},[e._v("提交")])]):e._e()]}}])})],1)],1)],1)},n=[],l=r("b85c"),s=(r("96cf"),r("1da1")),o={data:function(){return{userList:[],power:"",powerList:[{label:"医院"},{label:"普通用户"},{label:"生产商"}]}},created:function(){this.getUserList()},methods:{submit:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return"生产商"===t&&(t="factory"),"医院"===t&&(t="hospital"),"普通用户"===t&&(t="user"),a.next=5,r.$http.put("chain/role",{userId:e,role:t});case 5:if(n=a.sent,200===n.data.status){a.next=9;break}return console.log(n),a.abrupt("return",r.$message.error("修改失败"));case 9:return a.abrupt("return",r.$message.success("修改成功"));case 10:case"end":return a.stop()}}),a)})))()},getUserList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("user/list");case 2:if(r=t.sent,200===r.data.status){t.next=5;break}return t.abrupt("return",e.$message.error("获取用户列表失败"));case 5:e.userList=r.data.data,a=Object(l["a"])(e.userList);try{for(a.s();!(n=a.n()).done;)s=n.value,"god"===s.role&&(s.role="管理员"),"factory"===s.role&&(s.role="生产商"),"hospital"===s.role&&(s.role="医院"),"user"===s.role&&(s.role="普通用户")}catch(o){a.e(o)}finally{a.f()}case 8:case"end":return t.stop()}}),t)})))()}}},u=o,c=r("2877"),i=Object(c["a"])(u,a,n,!1,null,"dd7f4548",null);t["default"]=i.exports}}]);