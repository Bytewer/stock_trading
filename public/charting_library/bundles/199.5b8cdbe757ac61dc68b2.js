(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[199],{767143:e=>{e.exports={wrap:"wrap-Un5MtNUE",list:"list-Un5MtNUE",item:"item-Un5MtNUE",selected:"selected-Un5MtNUE",bluishItem:"bluishItem-Un5MtNUE",noPadding:"noPadding-Un5MtNUE"}},390789:e=>{e.exports={group:"group-NGVKpq85"}},277221:e=>{e.exports={labels:"labels-Llv4yjs6",rewardRisk:"rewardRisk-Llv4yjs6",rewardRiskText:"rewardRiskText-Llv4yjs6",bracketControl:"bracketControl-Llv4yjs6",control:"control-Llv4yjs6",wait:"wait-Llv4yjs6",checkboxLabel:"checkboxLabel-Llv4yjs6",clickableTextColor:"clickableTextColor-Llv4yjs6",checkboxWrapper:"checkboxWrapper-Llv4yjs6",slCheckboxWrapper:"slCheckboxWrapper-Llv4yjs6",checkboxLabelWrapper:"checkboxLabelWrapper-Llv4yjs6",checkbox:"checkbox-Llv4yjs6",inputGroup:"inputGroup-Llv4yjs6",rightBlock:"rightBlock-Llv4yjs6",label:"label-Llv4yjs6",bracketInCurrency:"bracketInCurrency-Llv4yjs6",bracketInPercent:"bracketInPercent-Llv4yjs6",bracketInPips:"bracketInPips-Llv4yjs6",bracketInPrice:"bracketInPrice-Llv4yjs6"}},730139:e=>{e.exports={wrapper:"wrapper-kb0OuE9E",row:"row-kb0OuE9E",header:"header-kb0OuE9E",cell:"cell-kb0OuE9E",cellTitle:"cellTitle-kb0OuE9E",cellValue:"cellValue-kb0OuE9E",cellSideBuy:"cellSideBuy-kb0OuE9E",cellSideSell:"cellSideSell-kb0OuE9E",marker:"marker-kb0OuE9E",disabled:"disabled-kb0OuE9E"}},544916:e=>{e.exports={controls:"controls-VP5GaBfG",cancelButton:"cancelButton-VP5GaBfG"}},781278:e=>{e.exports={button:"button-pP_E6i3F"}},950379:e=>{e.exports={clickableText:"clickableText-RTuybJqa",clickableTextColor:"clickableTextColor-RTuybJqa"}},650859:e=>{e.exports={body:"body-X70j90Zy"}},186467:e=>{e.exports={footer:"footer-fSCU20uC"}},79166:e=>{e.exports={header:"header-BitPgYCK",close:"close-BitPgYCK"}},17690:e=>{e.exports={message:"message-tNeiOkjz",error:"error-tNeiOkjz"}},57023:e=>{e.exports={container:"container-HTBJo9ba",top:"top-HTBJo9ba"}},235997:e=>{e.exports={list:"list-HGwPo2aR",item:"item-HGwPo2aR"}},594371:e=>{e.exports={panTile:"panTile-eoLBmZ4v",rootWrapper:"rootWrapper-eoLBmZ4v",panAreaWrapperStyle:"panAreaWrapperStyle-eoLBmZ4v",panAreaStyle:"panAreaStyle-eoLBmZ4v",drawerWrapperStyle:"drawerWrapperStyle-eoLBmZ4v",hidden:"hidden-eoLBmZ4v",scroll:"scroll-eoLBmZ4v",closedContentStyle:"closedContentStyle-eoLBmZ4v",mainContentStyle:"mainContentStyle-eoLBmZ4v",controlsWrapper:"controlsWrapper-eoLBmZ4v",controlsContent:"controlsContent-eoLBmZ4v",drawer:"drawer-eoLBmZ4v",animate:"animate-eoLBmZ4v"}},493455:(e,t,o)=>{"use strict";o.d(t,{ControlGroup:()=>c});var n=o(50959),r=o(497754),s=o(380327),i=o(390789),l=o.n(i);function a(e,t,o){return{isTop:e<t,isRight:e%t==t-1,isBottom:e>=t*(o-1),isLeft:e%t==0}}function c(e){const{children:t,rows:o,cols:i,disablePositionAdjustment:c,className:p,role:d,...u}=e,h=n.Children.count(t),m=null!=i?i:h,v=null!=o?o:function(e,t){return Math.ceil(e/t)}(h,m),g=(0,n.useMemo)((()=>{const e=[];for(let t=0;t<h;t++)e.push({isGrouped:!0,cellState:a(t,m,v),disablePositionAdjustment:c});return e
}),[h,m,v,c]),b=n.Children.map(t,((e,t)=>n.createElement(s.ControlGroupContext.Provider,{value:g[t]},e))),f={"--ui-lib-control-group-cols":m.toString(10),"--ui-lib-control-group-rows":v.toString(10)};return n.createElement("span",{className:r(l().group,p),style:f,role:d,...u},b)}},788865:(e,t,o)=>{"use strict";o.d(t,{BracketControlGroup:()=>E});var n=o(497754),r=o(50959),s=o(609838),i=o(661851),l=o(972535),a=o(599016),c=o(493455),p=o(302946),d=o(738036),u=o(763281),h=o(950379);function m(e){const{theme:t=h}=e;return r.createElement("span",{className:n(h.clickableText,t.clickableTextColor,e.className),ref:e.reference,tabIndex:e.tabIndex,onClick:e.onClick,onKeyDown:e.onKeyDown},e.text)}var v=o(101614),g=o(587125);function b(e){const{inputMode:t,control:o,className:n,error:s,errorMessage:l,errorHandler:a,onFocus:c,inputReference:p,intent:d,highlight:u,highlightRemoveRoundBorder:h,disabled:m,fontSizeStyle:v}=e,b=(0,i.useObservable)(o.value$,o.getValue());return r.createElement(g.NumberInput,{inputMode:t,intent:d,highlight:u,highlightRemoveRoundBorder:h,value:b,onValueChange:e=>{var t;null==c||c(),o.setValue(e),null===(t=o.onModifiedCallback)||void 0===t||t.call(o)},useFormatter:!1,className:n,step:o.step,error:s,errorMessage:l,errorHandler:a,onFocus:c,inputReference:p,disabled:m,fontSizeStyle:v})}var f=o(277221);const w={[a.BracketType.StopLoss]:s.t(null,void 0,o(719702)),[a.BracketType.TakeProfit]:s.t(null,void 0,o(255739)),[a.BracketType.TrailingStop]:s.t(null,void 0,o(992201)),[a.BracketType.GuaranteedStop]:s.t(null,void 0,o(337539))},C=s.t(null,void 0,o(102202));class k extends r.PureComponent{constructor(e){super(e),this._slTypeElement=null,this._slTypeDropdown=null,this._setSLTypeElement=e=>{this._slTypeElement=e},this._setSlTypeDropdownRef=e=>{this._slTypeDropdown=e},this._typeToggle=()=>{this.setState((e=>({isSLTypeOpened:!e.isSLTypeOpened}))),this.props.enabled||this.props.onToggleEnabled()},this._onSLTypeSelect=e=>{this.props.setBracketType(this.props.stopLossTypes[e]),this.setState({isSLTypeOpened:!1})},this._onClickOutside=e=>{this._slTypeDropdown&&this._slTypeDropdown.contains(e.target)||this.setState({isSLTypeOpened:!1})},this._focusHandler=e=>()=>this.props.onFocus(e),this.state={isSLTypeOpened:!1}}render(){const{inputDisabled:e,labelDisabled:t,checkboxDisabled:o}=this.props.controlState,s=this.props.type!==a.BracketType.TakeProfit,i=w[this.props.type],l=s&&(this.props.supportTrailingStop||this.props.supportGuaranteedStop)&&!t;let h;h=l?r.createElement(d.OutsideEvent,{click:!0,mouseDown:!0,touchStart:!0,handler:this._onClickOutside},(e=>r.createElement("span",{className:f.checkboxLabelWrapper,ref:e},r.createElement(m,{className:f.checkboxLabel,text:i,tabIndex:-1,onClick:this._typeToggle,reference:this._setSLTypeElement,theme:f.clickableTextColor}),r.createElement(v.DropdownList,{root:"document",isOpened:this.state.isSLTypeOpened,items:this._mapSLTypesNames(),target:this._slTypeElement||void 0,inheritWidthFromTarget:!1,onSelect:this._onSLTypeSelect,reference:this._setSlTypeDropdownRef
})))):r.createElement("span",{className:f.checkboxLabel},i);const g=r.createElement("div",{className:n(l?f.slCheckboxWrapper:f.checkboxWrapper,"apply-common-tooltip"),title:l?C:i},r.createElement(p.Checkbox,{className:f.checkbox,checked:this.props.enabled,label:l?void 0:h,tabIndex:-1,onChange:this.props.onToggleEnabled,disabled:o,"data-name":`order-ticket-${s?"loss":"profit"}-checkbox-bracket`}),l&&h),k=Boolean(this.props.error&&this.props.error.res),y=this.props.error&&this.props.error.msg,E=this.props.isCryptoBracket?"showCryptoBracketsInCurrency":"showBracketsInCurrency",S=this.props.isCryptoBracket?"showCryptoBracketsInPercent":"showBracketsInPercent";return r.createElement(u.SettingsContext.Consumer,null,(t=>{const o=[];return this.props.showRiskControlsAndInfo&&t[E]&&o.push(r.createElement(b,{...this._generateControlProps(2),control:this.props.riskInCurrency,className:this._generateClassName(2),onFocus:this._focusHandler(2),errorHandler:this.props.errorHandler,error:k&&this._isSelectedControl(2),errorMessage:y,disabled:e,fontSizeStyle:this.props.fontSizeStyle,key:"riskInCurrency"})),this.props.showRiskControlsAndInfo&&t[S]&&o.push(r.createElement(b,{...this._generateControlProps(3),control:this.props.riskInPercent,className:this._generateClassName(3),onFocus:this._focusHandler(3),errorHandler:this.props.errorHandler,error:k&&this._isSelectedControl(3),errorMessage:y,disabled:e,fontSizeStyle:this.props.fontSizeStyle,key:"riskInPercent"})),r.createElement("div",{className:n(f.bracketControl,s&&f.rightBlock)},g,r.createElement(c.ControlGroup,{cols:1,className:f.inputGroup},!this.props.isPipsControlHidden&&r.createElement(b,{...this._generateControlProps(0),control:this.props.pips,className:this._generateClassName(0),onFocus:this._focusHandler(0),errorHandler:this.props.errorHandler,error:k&&this._isSelectedControl(0),errorMessage:y,inputReference:this.props.handlePipsInputRef,disabled:e,fontSizeStyle:this.props.fontSizeStyle}),r.createElement(b,{...this._generateControlProps(1),control:this.props.price,className:this._generateClassName(1),onFocus:this._focusHandler(1),errorHandler:this.props.errorHandler,error:k&&this._isSelectedControl(1),errorMessage:y,inputReference:this.props.handlePriceInputRef,disabled:e,fontSizeStyle:this.props.fontSizeStyle,inputMode:"text"}),o))}))}_mapSLTypesNames(){return this.props.stopLossTypes.map((e=>({index:e,elem:r.createElement("span",null,w[e])})))}_isSelectedControl(e){return this.props.enabled&&this.props.focusedControl===e}_generateClassName(e){return n(f.control,!this.props.enabled&&f.wait,0===e&&f.bracketInPips,1===e&&f.bracketInPrice,2===e&&f.bracketInCurrency,3===e&&f.bracketInPercent)}_generateControlProps(e){const t={};return this._isSelectedControl(e)&&(t.highlight=!0),Boolean(this.props.error&&this.props.error.res)&&this._isSelectedControl(e)&&(t.intent="danger"),t}}function y(e){
const{model:t,isCryptoBracket:o,showRiskControlsAndInfo:n,orderTicketFocus:s}=e,{enabled$:c,error$:p,focusedControl$:d,bracketType$:u,stopLossTypes:h,pips:m,price:v,riskInCurrency:g,riskInPercent:b,roundToStopLimitPriceStepRequired:f,isValuesInitialized$:w,controlState:C,onControlFocused:y,supportTrailingStop:E,supportGuaranteedStop:S,getFocusedControl:I,getEnabled:P,getBracketType:T,getError:N,setFocusedControl:B,setEnabled:_,setBracketType:L,setControlError:x}=t,D=(0,i.useObservable)(d,I()),M=(0,i.useObservable)(u,T()),H=(0,i.useObservable)(c,P()),O=(0,i.useObservable)(p,N()),R=(0,i.useObservable)(w,!1),W=(0,r.useRef)(null),z=(0,r.useRef)(null);(0,r.useEffect)((()=>{if(l.mobiletouch||!H)return;const e=e=>{null!==e&&R&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},t=M===a.BracketType.TakeProfit&&3===s,o=(M===a.BracketType.StopLoss||M===a.BracketType.GuaranteedStop)&&4===s,n=t||o,r=M===a.BracketType.TrailingStop&&4===s;n&&e(z.current),r&&e(W.current)}),[R]);const F=(0,r.useCallback)((e=>{R&&(H||_(!0),D!==e&&B(e),y.fire())}),[R,H,D,_,B]);return r.createElement(k,{type:M,enabled:H,error:O,stopLossTypes:h,pips:m,price:v,riskInCurrency:g,riskInPercent:b,focusedControl:D,onFocus:F,onToggleEnabled:function(){_(!H),y.fire()},errorHandler:function(e){x(e)},handlePipsInputRef:e=>W.current=e,handlePriceInputRef:e=>z.current=e,setBracketType:L,isPipsControlHidden:f,controlState:C,isCryptoBracket:o,showRiskControlsAndInfo:n,supportTrailingStop:E,supportGuaranteedStop:S,fontSizeStyle:"medium"})}function E(e){const{model:t,focus:l}=e,a=(0,r.useContext)(u.SettingsContext),c=(0,i.useObservable)(t.rewardRisk$),p=t.takeProfitModel&&t.takeProfitModel.roundToStopLimitPriceStepRequired||t.stopLossModel&&t.stopLossModel.roundToStopLimitPriceStepRequired,d="supportCryptoBrackets"in t&&!0===t.supportCryptoBrackets,h=d?"showCryptoBracketsInCurrency":"showBracketsInCurrency",m=d?"showCryptoBracketsInPercent":"showBracketsInPercent",v=t.showRiskControlsAndInfo;return r.createElement(r.Fragment,null,t.takeProfitModel&&r.createElement(y,{model:t.takeProfitModel,orderTicketFocus:l,isCryptoBracket:d,showRiskControlsAndInfo:v}),t.takeProfitModel&&t.stopLossModel&&r.createElement("div",{className:f.labels},r.createElement("div",{className:n(f.rewardRisk,c&&"apply-common-tooltip"),title:c?s.t(null,void 0,o(114365)):void 0},r.createElement("span",{className:f.rewardRiskText},c)),!p&&r.createElement("span",null,"forex"===t.symbolType?s.t(null,void 0,o(394408)):s.t(null,void 0,o(824821))),r.createElement("span",null,s.t(null,void 0,o(7953))),v&&a[h]&&r.createElement("span",null,t.takeProfitModel?t.takeProfitModel.currency:""),v&&a[m]&&r.createElement("span",{className:n("apply-common-tooltip"),title:s.t(null,void 0,o(697968))},"%")),t.stopLossModel&&r.createElement(y,{model:t.stopLossModel,orderTicketFocus:l,isCryptoBracket:d,showRiskControlsAndInfo:v}))}},556013:(e,t,o)=>{"use strict";o.d(t,{OrderPanelCustomFields:()=>l});var n=o(50959),r=o(363111),s=o(763281),i=o(347414);function l(e){
const{customFieldModels:t,onClose:o}=e,{orderPanelStatus:l}=(0,n.useContext)(s.WidgetContext);return n.createElement(i.CustomFields,{customFieldModels:t,isWait:l===r.OrderPanelStatus.Wait,forceUserToSelectValue:l===r.OrderPanelStatus.Active,onClose:o})}},274837:(e,t,o)=>{"use strict";o.d(t,{useCommonDialogHandlers:()=>l});var n=o(50959),r=o(559410),s=o(206594),i=o(996038);function l(e){const{isOpened:t,onOpen:o,onClose:l}=e;(0,n.useEffect)((()=>{const e=()=>{null==l||l()};r.subscribe(s.CLOSE_POPUPS_AND_DIALOGS_COMMAND,e,null);const n=window.matchMedia(i.DialogBreakpoints.TabletSmall),a=window.matchMedia("(orientation: portrait)"),c=()=>{t?null==o||o(n.matches):null==l||l()};return c(),a.addEventListener("change",c),()=>{r.unsubscribe(s.CLOSE_POPUPS_AND_DIALOGS_COMMAND,e,null),a.removeEventListener("change",c)}}),[t,l,o])}},564245:(e,t,o)=>{"use strict";o.d(t,{InfoTable:()=>i});var n=o(50959),r=o(497754),s=o(730139);function i(e){const t=e.rows.map(((t,o)=>n.createElement("div",{key:o,className:r(s.row,e.disabled&&s.disabled),"data-name":"info-table-row"},n.createElement("div",{className:r(s.cell,s.cellTitle,t.listMarker&&s.marker),"data-name":"info-table-cell-title"},t.title),void 0!==t.value&&n.createElement("div",{className:r(s.cell,s.cellValue,void 0!==t.type&&l(t.type)),"data-name":"info-table-cell-value"},t.value))));return n.createElement("div",{className:s.wrapper},e.header&&n.createElement("div",{className:s.header},e.header),t)}function l(e){switch(e){case 0:return s.cellSideBuy;case 1:return s.cellSideSell;default:return}}},110686:(e,t,o)=>{"use strict";o.d(t,{OrderDrawerControlContent:()=>p});var n=o(50959),r=o(423869),s=o(171529),i=o(234404),l=o(661851);function a(e){const{reference:t,buttonModel:o,side$:r,getSide:a,isButtonDisabled$:c,isButtonDisabled:p,loading$:d,doneButtonClick:u}=e,h=(0,l.useObservable)(c,p()),m=(0,l.useObservable)(d,!1),{primaryText:v}=(0,l.useObservable)(o.value$,o.getValue()),g=1===(0,l.useObservable)(r,a())?"brand":"red";return n.createElement(s.SquareButton,{reference:t,size:"medium",variant:"primary",color:g,disabled:m||h,onClick:()=>u(),"data-name":"place-and-modify-button"},m?n.createElement(i.Loader,null):v)}var c=o(544916);function p(e){const{onClose:t,sideModel:o,side:i,isButtonDisabled$:l,isButtonDisabled:p,loading$:d,doneButtonClick:u,buttonModel:h}=e;return n.createElement("div",{className:c.controls},n.createElement(s.SquareButton,{size:"medium",variant:"secondary",color:"gray",onClick:t,className:c.cancelButton},"Cancel"),void 0!==h&&n.createElement(a,{buttonModel:h,side$:void 0!==o?o.value$:r.EMPTY,getSide:()=>i(),isButtonDisabled$:l,isButtonDisabled:()=>p(),loading$:d,doneButtonClick:()=>u()}))}},570446:(e,t,o)=>{"use strict";o.d(t,{PlaceAndModifyButton:()=>c});var n=o(50959),r=o(423869),s=o(234404),i=o(171529),l=o(661851),a=o(781278);function c(e){const{model:t,reference:o,buttonModel:c}=e,p=t.hasOwnProperty("sideModel")&&"sideModel"in t?t.sideModel.value$:r.EMPTY,d=(0,l.useObservable)(t.isButtonDisabled$,t.isButtonDisabled()),u=(0,
l.useObservable)(t.loading$,!1),h=(0,l.useObservable)(c.value$,c.getValue()),m=1===(0,l.useObservable)(p,t.side())?"brand":"red";return u?n.createElement(i.SquareButton,{reference:o,className:a.button,size:"xlarge",disabled:!0,"data-name":"place-and-modify-button"},n.createElement(s.Loader,null)):n.createElement(i.SquareButton,{...h,reference:o,className:a.button,size:"xlarge",color:m,disabled:d,onClick:()=>t.doneButtonClick(),"data-name":"place-and-modify-button"},void 0===h.secondaryText?h.primaryText:null)}},438980:(e,t,o)=>{"use strict";o.d(t,{Measure:()=>r});var n=o(664332);function r(e){const{children:t,onResize:o}=e;return t((0,n.useResizeObserver)(o||(()=>{}),[null===o]))}},930894:(e,t,o)=>{"use strict";o.d(t,{Body:()=>i});var n=o(50959),r=o(497754);o(79166),o(608636),o(72571);o(186467);var s=o(650859);function i(e){return n.createElement("div",{className:r(s.body,e.className),ref:e.reference},e.children)}o(908783),o(17690)},101614:(e,t,o)=>{"use strict";o.d(t,{DropdownList:()=>P});var n=o(50959),r=o(767143),s=o(497754),i=o(632227),l=o(273388),a=o(235997);class c extends n.PureComponent{constructor(e){super(e)}render(){return n.createElement("div",{className:this.props.className,onClick:this.props.onClick,ref:this.props.reference},this.props.children)}}var p=o(438980);class d extends n.PureComponent{constructor(e){super(e),this._handleResize=([e])=>{var t,o;null===(o=(t=this.props).onMeasure)||void 0===o||o.call(t,e.target.getBoundingClientRect())}}render(){const{theme:e=a}=this.props,t=s(e.list,{[this.props.className]:Boolean(this.props.className)}),{fontSize:o=13}=this.props,r={bottom:this.props.bottom,fontSize:o,left:this.props.left,height:this.props.height||"auto",right:this.props.right,top:this.props.top,width:this.props.width,zIndex:this.props.zIndex};return n.createElement(p.Measure,{onResize:Boolean(this.props.onMeasure)?this._handleResize:null},(e=>n.createElement("div",{className:t,style:r,ref:(0,l.mergeRefs)([this.props.reference,e])},this._wrapItems(this.props.items,this.props.selected))))}componentDidMount(){if(this._el=i.findDOMNode(this),void 0!==this.props.selected&&this.props.shouldScrollIfNotVisible){const e=this._items[this.props.selected];e&&this._scrollIfNotVisible(e)}}componentDidUpdate(){if(void 0!==this.props.selected&&this.props.shouldScrollIfNotVisible){const e=this._items[this.props.selected];e&&this._scrollIfNotVisible(e)}}_wrapItems(e=[],t){this._items=[];const{itemWrap:o=c,theme:r=a}=this.props,i=o;return e.map(((e,o)=>{const l=s(r.item,{[this.props.itemsClassName]:Boolean(this.props.itemsClassName),[this.props.selectedClassName]:t===o});return n.createElement(i,{reference:t=>{t&&this._items.push({elem:t,index:o,value:e})},key:o,onClick:()=>this._onSelect(o),className:l},e.elem)}))}_onSelect(e){this.props.onSelect&&this.props.onSelect(e,this._items[e].value)}_scrollIfNotVisible(e){const t=this._el.scrollTop,o=this._el.scrollTop+this._el.clientHeight,n=e.elem.offsetTop,r=n+e.elem.clientHeight;n<=t?e.elem.scrollIntoView(!0):r>=o&&e.elem.scrollIntoView(!1)}}d.defaultProps={
shouldScrollIfNotVisible:!0};var u=o(841037),h=o(874485);class m extends n.PureComponent{render(){const e={position:"absolute",top:this.props.top,width:this.props.width,height:this.props.height,bottom:this.props.bottom,right:this.props.right,left:this.props.left,zIndex:this.props.zIndex};return n.createElement("div",{className:this.props.className,style:e,ref:this.props.reference},this.props.children)}}m.displayName="Dropdown Container";const v=(0,h.makeOverlapable)((0,u.makeAttachable)(m));var g,b=o(57023),f=o(650151);!function(e){e.Top="top",e.Bottom="bottom"}(g||(g={}));class w extends n.PureComponent{constructor(){super(...arguments),this._container=null,this._setContainerRef=e=>{"function"==typeof this.props.reference&&this.props.reference(e),"object"==typeof this.props.reference&&(this.props.reference.current=e),this._container=e}}componentDidMount(){this.props.onDropdownWheelNoPassive&&this._addPassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)}componentDidUpdate(e){this.props.onDropdownWheelNoPassive!==e.onDropdownWheelNoPassive&&this._updatePassiveListenerOnWheel(e.onDropdownWheelNoPassive)}componentWillUnmount(){this.props.onDropdownWheelNoPassive&&this._removePassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)}render(){const{shadow:e="bottom",children:t,className:o}=this.props,r=s(b.container,b[e],o),i={maxHeight:this.props.maxHeight};return n.createElement("div",{ref:this._setContainerRef,style:i,className:r,onTouchStart:this.props.onDropdownTouchStart,onTouchMove:this.props.onDropdownTouchMove,onTouchEnd:this.props.onDropdownTouchEnd,onWheel:this.props.onDropdownWheel},t)}_updatePassiveListenerOnWheel(e){e&&this._removePassiveListenerOnWheel(e),this.props.onDropdownWheelNoPassive&&this._addPassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)}_addPassiveListenerOnWheel(e){(0,f.ensureNotNull)(this._container).addEventListener("wheel",e,{passive:!1})}_removePassiveListenerOnWheel(e){(0,f.ensureNotNull)(this._container).removeEventListener("wheel",e)}}var C=o(579184);const k=(y=d,(E=class extends n.PureComponent{constructor(e){super(e),this._items=this.props.items}componentDidUpdate(e){if(e.command!==this.props.command&&this.props.command)switch(this.props.command.name){case"next":this._next();break;case"prev":this._prev()}e.items!==this.props.items&&(this._items=this.props.items)}render(){return n.createElement(y,{...this.props},this.props.children)}_next(){const{selected:e=-1}=this.props,t=e+1;this._items.length-1>=t?this._navigateTo(t):this._navigateTo(0)}_prev(){const{selected:e=-1}=this.props,t=e-1,o=this._items.length-1;0<=t?this._navigateTo(t):this._navigateTo(o)}_navigateTo(e){this.props.onNavigate&&this.props.onNavigate(e,this._items[e])}}).displayName="Navigateable Component",E);var y,E;const S=(0,C.makeAnchorable)(v),I={top:"top",bottom:"bottom",topRight:"top"};class P extends n.PureComponent{render(){const{anchor:e="bottom",fontSize:t=14,root:o="parent"}=this.props,i=s(r.list,r[e]),{dropdownClassName:l,height:a,...c}=this.props;return n.createElement(S,{...c,className:l,
root:o},n.createElement(w,{className:this.props.dropdownContainerClassName,shadow:I[e],maxHeight:this.props.maxHeight,onDropdownTouchStart:this.props.onDropdownTouchStart?this.props.onDropdownTouchStart:void 0,onDropdownTouchMove:this.props.onDropdownTouchMove?this.props.onDropdownTouchMove:void 0,onDropdownTouchEnd:this.props.onDropdownTouchEnd?this.props.onDropdownTouchEnd:void 0,onDropdownWheelNoPassive:this.props.onDropdownWheelNoPassive?this.props.onDropdownWheelNoPassive:void 0},n.createElement(k,{...c,width:this.props.width,height:a,className:this.props.className||i,itemsClassName:this.props.itemsClassName||r.item,selectedClassName:this.props.selectedClassName||r.selected,fontSize:t,reference:this.props.reference})))}}},977540:(e,t,o)=>{"use strict";o.d(t,{ResizableDrawer:()=>_,ResizableDrawerContentHeight:()=>n});var n,r=o(50959),s=o(111553),i=o(497754),l=o.n(i),a=o(650151),c=o(747830),p=o(702054),d=o(589637),u=o(297265),h=o(594371);!function(e){e[e.Collapsed=0]="Collapsed",e[e.Medium=1]="Medium",e[e.Full=2]="Full"}(n||(n={}));const m=16,v=48,g=316,b=1,f=.3,w=150,C={[n.Collapsed]:{ascendingBreakPoint:null,descendingBreakPoint:20,descendingBreakPointForLowHeight:90,position:64},[n.Medium]:{ascendingBreakPoint:30,descendingBreakPoint:50,position:40},[n.Full]:{ascendingBreakPoint:85,descendingBreakPoint:null,position:95}};function k(e,t){return Math.round(t*e/100)}function y(e,t){const o=k(C[n.Full].position,e),r=C[n.Collapsed].position;return t>o?o:t<r?r:t}function E(e,t){const o=k(C[n.Full].position,e.windowInnerHeight),r=C[n.Collapsed].position,s=e.moveInitialPoint+t;return s>o?o-e.moveInitialPoint:s<r?r-e.moveInitialPoint:t}function S(e,t){const o=e>g?k(C[n.Collapsed].descendingBreakPoint,e):C[n.Collapsed].descendingBreakPointForLowHeight,r=C[n.Collapsed].position;if(t>o)return 1;if(t<=r)return 0;return(t-r)/(o-r)}function I(e,t){return{moveInitialPoint:y(e.windowInnerHeight,t),heightIncrement:E(e,0),animate:!0}}function P(e){const t=y(e.windowInnerHeight,C[n.Collapsed].position);return{moveInitialPoint:t,heightIncrement:E(e,0),animate:!0,opacity:S(e.windowInnerHeight,t)}}function T(e,t){var o,r;const s=k(e.windowInnerHeight,C[n.Medium].position),i=(null!==(r=null===(o=t.current)||void 0===o?void 0:o.offsetHeight)&&void 0!==r?r:0)+m;if(i<s)return I(e,i);const l=y(e.windowInnerHeight,s);return{moveInitialPoint:l,heightIncrement:E(e,0),animate:!0,opacity:S(e.windowInnerHeight,l)}}function N(e,t){var o,r;const s=k(e.windowInnerHeight,C[n.Full].position),i=(null!==(r=null===(o=t.current)||void 0===o?void 0:o.offsetHeight)&&void 0!==r?r:0)+m;if(i<s)return I(e,i);const l=y(e.windowInnerHeight,s);return{moveInitialPoint:l,heightIncrement:E(e,0),animate:!0,opacity:S(e.windowInnerHeight,l)}}function B(e){return{heightIncrement:0,moveInitialPoint:e,isSwiped:!1,isDragging:!1,animate:!1,opacity:S(document.documentElement.clientHeight,e),windowInnerHeight:document.documentElement.clientHeight,windowInnerWidth:document.documentElement.clientWidth}}function _(e){
const{children:t,closedContent:o,controlsContent:i,disableSwipe:g,disablePan:_,initialContentHeight:L=n.Collapsed}=e,x=(0,r.useRef)(null),D=(0,r.useRef)(null),M=(0,r.useRef)(null),H=(0,u.useWatchedValueReadonly)({watchedValue:p.watchedTheme}),[O,R]=(0,r.useState)(B(C[n.Collapsed].position)),W=(0,r.useMemo)((()=>{const e=!(O.moveInitialPoint+O.heightIncrement<=C[n.Collapsed].position);return!O.isDragging&&!O.animate&&e}),[O.moveInitialPoint,O.isDragging,O.animate]),z=(0,r.useMemo)((()=>{const e=O.windowInnerHeight-m,t=O.moveInitialPoint+O.heightIncrement-m;return O.isDragging||O.animate?e:t}),[O.moveInitialPoint,O.isDragging,O.animate]),F=O.isDragging||O.animate?O.windowInnerHeight-(O.moveInitialPoint+O.heightIncrement):0;(0,r.useEffect)((()=>{const e=function(e,t){switch(e){case n.Collapsed:return C[n.Collapsed].position;case n.Medium:return k(C[n.Medium].position,document.documentElement.clientHeight);case n.Full:const e=null==t?void 0:t.offsetHeight;return void 0===e?0:y(document.documentElement.clientHeight,e)}}(L,D.current);R(B(e))}),[]),(0,r.useEffect)((()=>{const e=(0,a.ensureNotNull)(x.current),t=new s(e);return t.get("pan").set({direction:Hammer.DIRECTION_VERTICAL}),t.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL,threshold:b,velocity:f}),_||(t.on("panend",(()=>{R((e=>{if(e.isSwiped)return{...e,isSwiped:!1,isDragging:!1};const t={...e,isDragging:!1},o=k(C[n.Collapsed].descendingBreakPoint,e.windowInnerHeight),r=k(C[n.Full].ascendingBreakPoint,e.windowInnerHeight),s=e.moveInitialPoint+e.heightIncrement;let i={};return i=s<o?P(e):s>r?N(e,D):function(e,t){var o,n;const r=e.heightIncrement+e.moveInitialPoint,s=(null!==(n=null===(o=t.current)||void 0===o?void 0:o.offsetHeight)&&void 0!==n?n:0)+m;if(s<r)return I(e,s);const i=y(e.windowInnerHeight,r);return{moveInitialPoint:i,heightIncrement:E(e,0),opacity:S(e.windowInnerHeight,i)}}(e,D),{...t,...i}}))})),t.on("pan",(e=>{R((t=>{if(t.isSwiped)return t;const o=E(t,-e.deltaY);return{...t,isDragging:!0,heightIncrement:o,opacity:S(t.windowInnerHeight,o+t.moveInitialPoint)}}))}))),g||t.on("swipe",(e=>{Math.abs(e.velocityY)<f||R((t=>{const o={...t,isSwiped:!0};let r={};const s=e.direction===Hammer.DIRECTION_UP,i=e.direction===Hammer.DIRECTION_DOWN,l=t.moveInitialPoint+t.heightIncrement,a=l<k(C[n.Medium].ascendingBreakPoint,t.windowInnerHeight),c=l<k(C[n.Medium].descendingBreakPoint,t.windowInnerHeight);return s?r=a?T(t,D):N(t,D):i&&(r=c?P(t):T(t,D)),{...o,...r}}))})),()=>{t.off("panend"),_||t.off("pan"),g||t.off("swipe"),t.destroy()}}),[]),(0,r.useEffect)((()=>{function e(){R((e=>{const t=e.moveInitialPoint+e.heightIncrement<=C[n.Collapsed].position,o=document.documentElement.clientHeight/e.windowInnerHeight,r=Math.round(e.moveInitialPoint*o);return{...e,windowInnerHeight:document.documentElement.clientHeight,windowInnerWidth:document.documentElement.clientWidth,moveInitialPoint:t?e.moveInitialPoint:y(document.documentElement.clientHeight,r)}}))}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((()=>{
if(!O.animate)return;const e=window.setTimeout((()=>{R((e=>({...e,animate:!1})))}),w);return()=>{window.clearTimeout(e)}}),[O.animate]);const A=100-100*O.opacity,j={"--resizable-drawer-height":z,"--resizable-drawer-opacity":O.opacity,"--resizable-drawer-animate":O.animate?1:0,"--resizeable-drawer-drawer-closed-height":C[n.Collapsed].position,"--resizeable-drawer-animation-timing":w,"--resizeable-drawer-pan-area-height":m,"--resizeable-drawer-pan-area-invisible-height":v,"--resizable-drawer-translate-y":F,"--resizable-drawer-bg":(0,d.generateColor)(c.themes[H].getThemedColor("color-bg-primary"),A)};return r.createElement("div",null,r.createElement("div",{className:l()(h.drawer),style:j},r.createElement("div",{className:l()(h.rootWrapper,O.animate&&h.animate),ref:M},r.createElement("div",{className:l()(h.panAreaWrapperStyle,O.animate&&h.animate)},r.createElement("div",{className:h.panAreaStyle,ref:x},i&&r.createElement("div",{className:l()(h.controlsWrapper,O.animate&&h.animate)},r.createElement("div",{className:h.controlsContent},i))),r.createElement("div",{className:h.panTile})),r.createElement("div",{className:l()(h.drawerWrapperStyle,O.animate&&h.animate,W&&h.scroll,!W&&h.hidden)},o&&r.createElement("div",{className:h.closedContentStyle},o),r.createElement("div",{className:h.mainContentStyle,ref:D},t)))))}},608636:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'}}]);