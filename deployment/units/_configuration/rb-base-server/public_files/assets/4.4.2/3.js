(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1354:function(e,n,a){"use strict";a.r(n);var t,l=a(1338),s=a(0),i=a.n(s),o=a(11),r=a(1341),d=a(1373),c=a(734),u=a(1371),p=a(19);const y=void 0!==t?t:t=a(756);function m(e,n,a){const t=e.get(n.id),l=p.ConnectionHandler.getConnection(t,"EnsayoList_Ensayos");l&&p.ConnectionHandler.deleteNode(l,a)}var E,_={commit:function(e,n,a){return Object(o.commitMutation)(e,{mutation:y,variables:{input:{id:a.id}},updater(e){const a=e.getRootField("EnsayoDelete");m(e,n,a.getValue("deletedId"))},optimisticUpdater(e){m(e,n,a.id)}})}};const h=void 0!==E?E:E=a(757);var g,k,C={commit:function(e,n,a,t,l){return Object(o.commitMutation)(e,{mutation:h,variables:{input:{id:n.id,Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}},optimisticResponse:()=>({EnsayoUpdate:{Ensayo:{id:n.id,Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}}})})}},f=a(295);class D extends i.a.Component{constructor(e,n){super(e,n),this._handle_Update_Properties=e=>{const{Ensayo_Title:n,Ensayo_Description:a,Ensayo_Content:t}=e,{relay:l,Ensayo:s}=this.props;C.commit(l.environment,s,n,a,t)},this._handle_Close_Properties=()=>{this.setState({propertiesIsOpen:!1})},this.handleClickListItem=e=>{this.setState({menuIsOpen:!0,anchorEl:e.currentTarget})},this._handle_Menu_onClick_Edit=e=>{this.setState({menuIsOpen:!1,propertiesIsOpen:!0})},this._handle_Menu_onClick_Delete=e=>{this.setState({menuIsOpen:!1});const{relay:n,Viewer:a,Ensayo:t}=this.props;_.commit(n.environment,a,t)},this.handleRequestClose=()=>{this.setState({menuIsOpen:!1})},this.state={anchorEl:void 0,menuIsOpen:!1,propertiesIsOpen:!1}}render(){const{Ensayo_Title:e,Ensayo_Description:n,Ensayo_Content:a}=this.props.Ensayo,{propertiesIsOpen:t}=this.state;return i.a.createElement("div",null,i.a.createElement(r.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu",onClick:this.handleClickListItem},i.a.createElement(d.a,{primary:e,secondary:n})),i.a.createElement(c.a,{id:"lock-menu",anchorEl:this.state.anchorEl,open:this.state.menuIsOpen,onClose:this.handleRequestClose},i.a.createElement(u.a,{key:"edit",onClick:e=>this._handle_Menu_onClick_Edit(e)},"Edit"),i.a.createElement(u.a,{key:"delete",onClick:e=>this._handle_Menu_onClick_Delete(e)},"Delete")),t&&i.a.createElement(f.a,{Ensayo_Title:e,Ensayo_Description:n,Ensayo_Content:a,handlerUpdate:this._handle_Update_Properties,handlerClose:this._handle_Close_Properties}))}}var F,v=Object(o.createFragmentContainer)(D,{Viewer:void 0!==g?g:g=a(758),Ensayo:void 0!==k?k:k=a(759)});class T extends i.a.Component{render(){const{Viewer:e}=this.props,{Ensayos:n}=e;return i.a.createElement("div",null,i.a.createElement(l.a,null,n.edges.map(({node:n})=>i.a.createElement(v,{key:n.id,Viewer:e,Ensayo:n}))))}}n.default=Object(o.createFragmentContainer)(T,{Viewer:void 0!==F?F:F=a(760)})},295:function(e,n,a){"use strict";var t=a(71),l=a(1329),s=a(1340),i=a(1331),o=a(1330),r=a(402),d=a(0),c=a.n(d),u=a(369),p=a.n(u),y=a(5);class m extends c.a.Component{constructor(e,n){super(e,n),this._handle_OnChange_RTE_Ensayo_Content=e=>{this.setState({Ensayo_Content_RTE:e})},this._handle_Close=()=>{this.props.handlerClose()},this._handle_OK=()=>{const{handlerClose:e,handlerUpdate:n}=this.props;n({Ensayo_Title:this.state.Ensayo_Title,Ensayo_Description:this.state.Ensayo_Description,Ensayo_Content:this.state.Ensayo_Content_RTE.toString("html")}),e()};const{Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content:l}=this.props;this.state={Ensayo_Title:a,Ensayo_Description:t,Ensayo_Content_RTE:p.a.createValueFromString(l,"html")}}render(){const{classes:e}=this.props,{Ensayo_Title:n,Ensayo_Description:a}=this.state;return c.a.createElement("div",null,c.a.createElement(l.a,{open:!0,onClose:this._handle_Close},c.a.createElement(o.a,null,"Ensayo"),c.a.createElement(i.a,null,c.a.createElement(r.a,{label:"Title",fullWidth:!0,value:n,onChange:e=>this.setState({Ensayo_Title:e.target.value})}),c.a.createElement(r.a,{label:"Description",fullWidth:!0,value:a,onChange:e=>this.setState({Ensayo_Description:e.target.value})}),c.a.createElement("div",{className:e.richTextContainer},null==p.a?c.a.createElement("div",null):c.a.createElement(p.a,{value:this.state.Ensayo_Content_RTE,onChange:this._handle_OnChange_RTE_Ensayo_Content}))),c.a.createElement(s.a,null,c.a.createElement(t.a,{onClick:this._handle_Close},"Cancel"),c.a.createElement(t.a,{onClick:this._handle_OK,color:"primary"},"OK"))))}}n.a=Object(y.a)(e=>({container:{display:"flex",flexWrap:"wrap"},richTextContainer:{width:"100%",height:300,display:"inline-block",position:"relative"}}))(m)},756:function(e,n,a){"use strict";const t={fragment:{argumentDefinitions:l=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"EnsayoDeleteInput!"}],kind:"Fragment",metadata:null,name:"EnsayoDeleteMutation",selections:s=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"EnsayoDeletePayload",kind:"LinkedField",name:"EnsayoDelete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deletedId",storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"EnsayoDeleteMutation",selections:s},params:{id:null,metadata:{},name:"EnsayoDeleteMutation",operationKind:"mutation",text:"mutation EnsayoDeleteMutation(\n  $input: EnsayoDeleteInput!\n) {\n  EnsayoDelete(input: $input) {\n    deletedId\n  }\n}\n"}};var l,s;t.hash="d8c8d964d97d923ef7f0e6c1d21ecfcb",e.exports=t},757:function(e,n,a){"use strict";const t={fragment:{argumentDefinitions:l=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"EnsayoUpdateInput!"}],kind:"Fragment",metadata:null,name:"EnsayoUpdateMutation",selections:s=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"EnsayoUpdatePayload",kind:"LinkedField",name:"EnsayoUpdate",plural:!1,selections:[{alias:null,args:null,concreteType:"Ensayo",kind:"LinkedField",name:"Ensayo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Content",storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation"},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"EnsayoUpdateMutation",selections:s},params:{id:null,metadata:{},name:"EnsayoUpdateMutation",operationKind:"mutation",text:"mutation EnsayoUpdateMutation(\n  $input: EnsayoUpdateInput!\n) {\n  EnsayoUpdate(input: $input) {\n    Ensayo {\n      id\n      Ensayo_Title\n      Ensayo_Description\n      Ensayo_Content\n    }\n  }\n}\n"}};var l,s;t.hash="6fc4902bbb734ef3ec064c06c70a2198",e.exports=t},758:function(e,n,a){"use strict";const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EnsayoInPlaceEditItem_Viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Viewer",hash:"301c94f48041c0970afb2265a6da8b61"};e.exports=t},759:function(e,n,a){"use strict";const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EnsayoInPlaceEditItem_Ensayo",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"Ensayo_Content",storageKey:null}],type:"Ensayo",hash:"195136c812b1fbd8e34d1224b650e12a"};e.exports=t},760:function(e,n,a){"use strict";const t={argumentDefinitions:[],kind:"Fragment",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["Ensayos"]}]},name:"EnsayoInPaceEditList_Viewer",selections:[{alias:"Ensayos",args:null,concreteType:"EnsayosConnection",kind:"LinkedField",name:"__EnsayoList_Ensayos_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"EnsayosEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Ensayo",kind:"LinkedField",name:"node",plural:!1,selections:[l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"EnsayoInPlaceEditItem_Ensayo"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},l,{args:null,kind:"FragmentSpread",name:"EnsayoInPlaceEditItem_Viewer"}],type:"Viewer"};var l;t.hash="0264c9c908d073effc0c969d9ac3ecd2",e.exports=t}}]);