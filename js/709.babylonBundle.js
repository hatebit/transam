"use strict";(self.webpackChunktrans_america=self.webpackChunktrans_america||[]).push([[709],{1125:(t,i,e)=>{e.d(i,{R:()=>n});var o=e(576),s=e(6631),a=e(66),r=e(1780);class n{constructor(){this._currentActiveButton=-1,this.buttons=[0,1,2]}attachControl(t){t=a.S0.BackCompatCameraNoPreventDefault(arguments);const i=this.camera.getEngine(),e=i.getInputElement();let o=0,s=null;this._pointA=null,this._pointB=null,this._altKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._shiftKey=!1,this._buttonsPressed=0,this._pointerInput=a=>{const n=a.event,h="touch"===n.pointerType;if(i.isInVRExclusivePointerMode)return;if(a.type!==r.Zp.POINTERMOVE&&-1===this.buttons.indexOf(n.button))return;const l=n.target;if(this._altKey=n.altKey,this._ctrlKey=n.ctrlKey,this._metaKey=n.metaKey,this._shiftKey=n.shiftKey,this._buttonsPressed=n.buttons,i.isPointerLock){const t=n.movementX,i=n.movementY;this.onTouch(null,t,i),this._pointA=null,this._pointB=null}else if(a.type!==r.Zp.POINTERDOWN||-1!==this._currentActiveButton&&!h)if(a.type===r.Zp.POINTERDOUBLETAP)this.onDoubleTap(n.pointerType);else if(a.type!==r.Zp.POINTERUP||this._currentActiveButton!==n.button&&!h){if(a.type===r.Zp.POINTERMOVE)if(t||n.preventDefault(),this._pointA&&null===this._pointB){const t=n.clientX-this._pointA.x,i=n.clientY-this._pointA.y;this.onTouch(this._pointA,t,i),this._pointA.x=n.clientX,this._pointA.y=n.clientY}else if(this._pointA&&this._pointB){const t=this._pointA.pointerId===n.pointerId?this._pointA:this._pointB;t.x=n.clientX,t.y=n.clientY;const i=this._pointA.x-this._pointB.x,e=this._pointA.y-this._pointB.y,r=i*i+e*e,h={x:(this._pointA.x+this._pointB.x)/2,y:(this._pointA.y+this._pointB.y)/2,pointerId:n.pointerId,type:a.type};this.onMultiTouch(this._pointA,this._pointB,o,r,s,h),s=h,o=r}}else{try{null==l||l.releasePointerCapture(n.pointerId)}catch(t){}h||(this._pointB=null),i._badOS?this._pointA=this._pointB=null:this._pointB&&this._pointA&&this._pointA.pointerId==n.pointerId?(this._pointA=this._pointB,this._pointB=null):this._pointA&&this._pointB&&this._pointB.pointerId==n.pointerId?this._pointB=null:this._pointA=this._pointB=null,(0!==o||s)&&(this.onMultiTouch(this._pointA,this._pointB,o,0,s,null),o=0,s=null),this._currentActiveButton=-1,this.onButtonUp(n),t||n.preventDefault()}else{try{null==l||l.setPointerCapture(n.pointerId)}catch(t){}null===this._pointA?this._pointA={x:n.clientX,y:n.clientY,pointerId:n.pointerId,type:n.pointerType}:null===this._pointB&&(this._pointB={x:n.clientX,y:n.clientY,pointerId:n.pointerId,type:n.pointerType}),-1!==this._currentActiveButton||h||(this._currentActiveButton=n.button),this.onButtonDown(n),t||(n.preventDefault(),e&&e.focus())}},this._observer=this.camera.getScene().onPointerObservable.add(this._pointerInput,r.Zp.POINTERDOWN|r.Zp.POINTERUP|r.Zp.POINTERMOVE|r.Zp.POINTERDOUBLETAP),this._onLostFocus=()=>{this._pointA=this._pointB=null,o=0,s=null,this.onLostFocus()},this._contextMenuBind=this.onContextMenu.bind(this),e&&e.addEventListener("contextmenu",this._contextMenuBind,!1);const n=this.camera.getScene().getEngine().getHostWindow();n&&a.S0.RegisterTopRootEvents(n,[{name:"blur",handler:this._onLostFocus}])}detachControl(){if(this._onLostFocus){const t=this.camera.getScene().getEngine().getHostWindow();t&&a.S0.UnregisterTopRootEvents(t,[{name:"blur",handler:this._onLostFocus}])}if(this._observer){if(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this._contextMenuBind){const t=this.camera.getScene().getEngine().getInputElement();t&&t.removeEventListener("contextmenu",this._contextMenuBind)}this._onLostFocus=null}this._altKey=!1,this._ctrlKey=!1,this._metaKey=!1,this._shiftKey=!1,this._buttonsPressed=0,this._currentActiveButton=-1}getClassName(){return"BaseCameraPointersInput"}getSimpleName(){return"pointers"}onDoubleTap(t){}onTouch(t,i,e){}onMultiTouch(t,i,e,o,s,a){}onContextMenu(t){t.preventDefault()}onButtonDown(t){}onButtonUp(t){}onLostFocus(){}}(0,o.Cg)([(0,s.lK)()],n.prototype,"buttons",void 0)},983:(t,i,e)=>{e.d(i,{F:()=>h});var o=e(576),s=e(6374),a=e(6631),r=e(9046),n=e(66);class h{constructor(){this.keysHeightOffsetIncr=[38],this.keysHeightOffsetDecr=[40],this.keysHeightOffsetModifierAlt=!1,this.keysHeightOffsetModifierCtrl=!1,this.keysHeightOffsetModifierShift=!1,this.keysRotationOffsetIncr=[37],this.keysRotationOffsetDecr=[39],this.keysRotationOffsetModifierAlt=!1,this.keysRotationOffsetModifierCtrl=!1,this.keysRotationOffsetModifierShift=!1,this.keysRadiusIncr=[40],this.keysRadiusDecr=[38],this.keysRadiusModifierAlt=!0,this.keysRadiusModifierCtrl=!1,this.keysRadiusModifierShift=!1,this.heightSensibility=1,this.rotationSensibility=1,this.radiusSensibility=1,this._keys=new Array}attachControl(t){t=n.S0.BackCompatCameraNoPreventDefault(arguments),this._onCanvasBlurObserver||(this._scene=this.camera.getScene(),this._engine=this._scene.getEngine(),this._onCanvasBlurObserver=this._engine.onCanvasBlurObservable.add((()=>{this._keys.length=0})),this._onKeyboardObserver=this._scene.onKeyboardObservable.add((i=>{const e=i.event;if(!e.metaKey)if(i.type===r.TB.KEYDOWN)this._ctrlPressed=e.ctrlKey,this._altPressed=e.altKey,this._shiftPressed=e.shiftKey,(-1!==this.keysHeightOffsetIncr.indexOf(e.keyCode)||-1!==this.keysHeightOffsetDecr.indexOf(e.keyCode)||-1!==this.keysRotationOffsetIncr.indexOf(e.keyCode)||-1!==this.keysRotationOffsetDecr.indexOf(e.keyCode)||-1!==this.keysRadiusIncr.indexOf(e.keyCode)||-1!==this.keysRadiusDecr.indexOf(e.keyCode))&&(-1===this._keys.indexOf(e.keyCode)&&this._keys.push(e.keyCode),e.preventDefault&&(t||e.preventDefault()));else if(-1!==this.keysHeightOffsetIncr.indexOf(e.keyCode)||-1!==this.keysHeightOffsetDecr.indexOf(e.keyCode)||-1!==this.keysRotationOffsetIncr.indexOf(e.keyCode)||-1!==this.keysRotationOffsetDecr.indexOf(e.keyCode)||-1!==this.keysRadiusIncr.indexOf(e.keyCode)||-1!==this.keysRadiusDecr.indexOf(e.keyCode)){const i=this._keys.indexOf(e.keyCode);i>=0&&this._keys.splice(i,1),e.preventDefault&&(t||e.preventDefault())}})))}detachControl(){this._scene&&(this._onKeyboardObserver&&this._scene.onKeyboardObservable.remove(this._onKeyboardObserver),this._onCanvasBlurObserver&&this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver),this._onKeyboardObserver=null,this._onCanvasBlurObserver=null),this._keys.length=0}checkInputs(){this._onKeyboardObserver&&this._keys.forEach((t=>{-1!==this.keysHeightOffsetIncr.indexOf(t)&&this._modifierHeightOffset()?this.camera.heightOffset+=this.heightSensibility:-1!==this.keysHeightOffsetDecr.indexOf(t)&&this._modifierHeightOffset()?this.camera.heightOffset-=this.heightSensibility:-1!==this.keysRotationOffsetIncr.indexOf(t)&&this._modifierRotationOffset()?(this.camera.rotationOffset+=this.rotationSensibility,this.camera.rotationOffset%=360):-1!==this.keysRotationOffsetDecr.indexOf(t)&&this._modifierRotationOffset()?(this.camera.rotationOffset-=this.rotationSensibility,this.camera.rotationOffset%=360):-1!==this.keysRadiusIncr.indexOf(t)&&this._modifierRadius()?this.camera.radius+=this.radiusSensibility:-1!==this.keysRadiusDecr.indexOf(t)&&this._modifierRadius()&&(this.camera.radius-=this.radiusSensibility)}))}getClassName(){return"FollowCameraKeyboardMoveInput"}getSimpleName(){return"keyboard"}_modifierHeightOffset(){return this.keysHeightOffsetModifierAlt===this._altPressed&&this.keysHeightOffsetModifierCtrl===this._ctrlPressed&&this.keysHeightOffsetModifierShift===this._shiftPressed}_modifierRotationOffset(){return this.keysRotationOffsetModifierAlt===this._altPressed&&this.keysRotationOffsetModifierCtrl===this._ctrlPressed&&this.keysRotationOffsetModifierShift===this._shiftPressed}_modifierRadius(){return this.keysRadiusModifierAlt===this._altPressed&&this.keysRadiusModifierCtrl===this._ctrlPressed&&this.keysRadiusModifierShift===this._shiftPressed}}(0,o.Cg)([(0,a.lK)()],h.prototype,"keysHeightOffsetIncr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysHeightOffsetDecr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysHeightOffsetModifierAlt",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysHeightOffsetModifierCtrl",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysHeightOffsetModifierShift",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRotationOffsetIncr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRotationOffsetDecr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRotationOffsetModifierAlt",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRotationOffsetModifierCtrl",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRotationOffsetModifierShift",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRadiusIncr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRadiusDecr",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRadiusModifierAlt",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRadiusModifierCtrl",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"keysRadiusModifierShift",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"heightSensibility",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"rotationSensibility",void 0),(0,o.Cg)([(0,a.lK)()],h.prototype,"radiusSensibility",void 0),s.H.FollowCameraKeyboardMoveInput=h},681:(t,i,e)=>{e.d(i,{t:()=>h});var o=e(576),s=e(6631),a=e(6374),r=e(1780),n=e(66);class h{constructor(){this.axisControlRadius=!0,this.axisControlHeight=!1,this.axisControlRotation=!1,this.wheelPrecision=3,this.wheelDeltaPercentage=0}attachControl(t){t=n.S0.BackCompatCameraNoPreventDefault(arguments),this._wheel=i=>{if(i.type!==r.Zp.POINTERWHEEL)return;const e=i.event;let o=0;const s=Math.max(-1,Math.min(1,e.deltaY));this.wheelDeltaPercentage?(console.assert(this.axisControlRadius+this.axisControlHeight+this.axisControlRotation<=1,"wheelDeltaPercentage only usable when mouse wheel controls ONE axis. Currently enabled: axisControlRadius: "+this.axisControlRadius+", axisControlHeightOffset: "+this.axisControlHeight+", axisControlRotationOffset: "+this.axisControlRotation),this.axisControlRadius?o=.01*s*this.wheelDeltaPercentage*this.camera.radius:this.axisControlHeight?o=.01*s*this.wheelDeltaPercentage*this.camera.heightOffset:this.axisControlRotation&&(o=.01*s*this.wheelDeltaPercentage*this.camera.rotationOffset)):o=s*this.wheelPrecision,o&&(this.axisControlRadius?this.camera.radius+=o:this.axisControlHeight?this.camera.heightOffset-=o:this.axisControlRotation&&(this.camera.rotationOffset-=o)),e.preventDefault&&(t||e.preventDefault())},this._observer=this.camera.getScene().onPointerObservable.add(this._wheel,r.Zp.POINTERWHEEL)}detachControl(){this._observer&&(this.camera.getScene().onPointerObservable.remove(this._observer),this._observer=null,this._wheel=null)}getClassName(){return"ArcRotateCameraMouseWheelInput"}getSimpleName(){return"mousewheel"}}(0,o.Cg)([(0,s.lK)()],h.prototype,"axisControlRadius",void 0),(0,o.Cg)([(0,s.lK)()],h.prototype,"axisControlHeight",void 0),(0,o.Cg)([(0,s.lK)()],h.prototype,"axisControlRotation",void 0),(0,o.Cg)([(0,s.lK)()],h.prototype,"wheelPrecision",void 0),(0,o.Cg)([(0,s.lK)()],h.prototype,"wheelDeltaPercentage",void 0),a.H.FollowCameraMouseWheelInput=h},5149:(t,i,e)=>{e.d(i,{p:()=>n});var o=e(576),s=e(6631),a=e(6374),r=e(1125);class n extends r.R{constructor(){super(...arguments),this.angularSensibilityX=1,this.angularSensibilityY=1,this.pinchPrecision=1e4,this.pinchDeltaPercentage=0,this.axisXControlRadius=!1,this.axisXControlHeight=!1,this.axisXControlRotation=!0,this.axisYControlRadius=!1,this.axisYControlHeight=!0,this.axisYControlRotation=!1,this.axisPinchControlRadius=!0,this.axisPinchControlHeight=!1,this.axisPinchControlRotation=!1,this.warningEnable=!0,this._warningCounter=0}getClassName(){return"FollowCameraPointersInput"}onTouch(t,i,e){this._warning(),this.axisXControlRotation?this.camera.rotationOffset+=i/this.angularSensibilityX:this.axisYControlRotation&&(this.camera.rotationOffset+=e/this.angularSensibilityX),this.axisXControlHeight?this.camera.heightOffset+=i/this.angularSensibilityY:this.axisYControlHeight&&(this.camera.heightOffset+=e/this.angularSensibilityY),this.axisXControlRadius?this.camera.radius-=i/this.angularSensibilityY:this.axisYControlRadius&&(this.camera.radius-=e/this.angularSensibilityY)}onMultiTouch(t,i,e,o,s,a){if(0===e&&null===s)return;if(0===o&&null===a)return;let r=(o-e)/(this.pinchPrecision*(this.angularSensibilityX+this.angularSensibilityY)/2);this.pinchDeltaPercentage?(r*=.01*this.pinchDeltaPercentage,this.axisPinchControlRotation&&(this.camera.rotationOffset+=r*this.camera.rotationOffset),this.axisPinchControlHeight&&(this.camera.heightOffset+=r*this.camera.heightOffset),this.axisPinchControlRadius&&(this.camera.radius-=r*this.camera.radius)):(this.axisPinchControlRotation&&(this.camera.rotationOffset+=r),this.axisPinchControlHeight&&(this.camera.heightOffset+=r),this.axisPinchControlRadius&&(this.camera.radius-=r))}_warning(){if(!this.warningEnable||this._warningCounter++%100!=0)return;const t="It probably only makes sense to control ONE camera property with each pointer axis. Set 'warningEnable = false' if you are sure. Currently enabled: ";console.assert(this.axisXControlRotation+this.axisXControlHeight+this.axisXControlRadius<=1,t+"axisXControlRotation: "+this.axisXControlRotation+", axisXControlHeight: "+this.axisXControlHeight+", axisXControlRadius: "+this.axisXControlRadius),console.assert(this.axisYControlRotation+this.axisYControlHeight+this.axisYControlRadius<=1,t+"axisYControlRotation: "+this.axisYControlRotation+", axisYControlHeight: "+this.axisYControlHeight+", axisYControlRadius: "+this.axisYControlRadius),console.assert(this.axisPinchControlRotation+this.axisPinchControlHeight+this.axisPinchControlRadius<=1,t+"axisPinchControlRotation: "+this.axisPinchControlRotation+", axisPinchControlHeight: "+this.axisPinchControlHeight+", axisPinchControlRadius: "+this.axisPinchControlRadius)}}(0,o.Cg)([(0,s.lK)()],n.prototype,"angularSensibilityX",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"angularSensibilityY",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"pinchPrecision",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"pinchDeltaPercentage",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisXControlRadius",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisXControlHeight",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisXControlRotation",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisYControlRadius",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisYControlHeight",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisYControlRotation",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisPinchControlRadius",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisPinchControlHeight",void 0),(0,o.Cg)([(0,s.lK)()],n.prototype,"axisPinchControlRotation",void 0),a.H.FollowCameraPointersInput=n},6374:(t,i,e)=>{e.d(i,{H:()=>r,_:()=>n});var o=e(461),s=e(6631),a=e(3832),r={};class n{constructor(t){this.attachedToElement=!1,this.attached={},this.camera=t,this.checkInputs=()=>{}}add(t){const i=t.getSimpleName();this.attached[i]?o.V.Warn("camera input of type "+i+" already exists on camera"):(this.attached[i]=t,t.camera=this.camera,t.checkInputs&&(this.checkInputs=this._addCheckInputs(t.checkInputs.bind(t))),this.attachedToElement&&t.attachControl(this.noPreventDefault))}remove(t){for(const i in this.attached){const e=this.attached[i];e===t&&(e.detachControl(),e.camera=null,delete this.attached[i],this.rebuildInputCheck())}}removeByType(t){for(const i in this.attached){const e=this.attached[i];e.getClassName()===t&&(e.detachControl(),e.camera=null,delete this.attached[i],this.rebuildInputCheck())}}_addCheckInputs(t){const i=this.checkInputs;return()=>{i(),t()}}attachInput(t){this.attachedToElement&&t.attachControl(this.noPreventDefault)}attachElement(t=!1){if(!this.attachedToElement){t=!a.i.ForceAttachControlToAlwaysPreventDefault&&t,this.attachedToElement=!0,this.noPreventDefault=t;for(const i in this.attached)this.attached[i].attachControl(t)}}detachElement(t=!1){for(const i in this.attached)this.attached[i].detachControl(),t&&(this.attached[i].camera=null);this.attachedToElement=!1}rebuildInputCheck(){this.checkInputs=()=>{};for(const t in this.attached){const i=this.attached[t];i.checkInputs&&(this.checkInputs=this._addCheckInputs(i.checkInputs.bind(i)))}}clear(){this.attachedToElement&&this.detachElement(!0),this.attached={},this.attachedToElement=!1,this.checkInputs=()=>{}}serialize(t){const i={};for(const t in this.attached){const e=this.attached[t],o=s.pB.Serialize(e);i[e.getClassName()]=o}t.inputsmgr=i}parse(t){const i=t.inputsmgr;if(i){this.clear();for(const t in i){const e=r[t];if(e){const o=i[t],a=s.pB.Parse((()=>new e),o,null);this.add(a)}}}else for(const i in this.attached){const e=r[this.attached[i].getClassName()];if(e){const o=s.pB.Parse((()=>new e),t,null);this.remove(this.attached[i]),this.add(o)}}}}},5709:(t,i,e)=>{e.d(i,{p:()=>c});var o=e(576),s=e(6631),a=e(66),r=e(3825),n=e(4983),h=e(9346),l=e(6425);h.b.AddNodeConstructor("FollowCamera",((t,i)=>()=>new c(t,n.Pq.Zero(),i))),h.b.AddNodeConstructor("ArcFollowCamera",((t,i)=>()=>new d(t,0,0,1,null,i)));class c extends r.F{constructor(t,i,e,o=null){super(t,i,e),this.radius=12,this.lowerRadiusLimit=null,this.upperRadiusLimit=null,this.rotationOffset=0,this.lowerRotationOffsetLimit=null,this.upperRotationOffsetLimit=null,this.heightOffset=4,this.lowerHeightOffsetLimit=null,this.upperHeightOffsetLimit=null,this.cameraAcceleration=.05,this.maxCameraSpeed=20,this.lockedTarget=o,this.inputs=new l.r(this),this.inputs.addKeyboard().addMouseWheel().addPointers()}_follow(t){if(!t)return;const i=n.AA.Matrix[0];t.absoluteRotationQuaternion.toRotationMatrix(i);const e=Math.atan2(i.m[8],i.m[10]),o=a.S0.ToRadians(this.rotationOffset)+e,s=t.getAbsolutePosition(),r=s.x+Math.sin(o)*this.radius,h=s.z+Math.cos(o)*this.radius,l=r-this.position.x,c=s.y+this.heightOffset-this.position.y,d=h-this.position.z;let u=l*this.cameraAcceleration*2,p=c*this.cameraAcceleration,f=d*this.cameraAcceleration*2;(u>this.maxCameraSpeed||u<-this.maxCameraSpeed)&&(u=u<1?-this.maxCameraSpeed:this.maxCameraSpeed),(p>this.maxCameraSpeed||p<-this.maxCameraSpeed)&&(p=p<1?-this.maxCameraSpeed:this.maxCameraSpeed),(f>this.maxCameraSpeed||f<-this.maxCameraSpeed)&&(f=f<1?-this.maxCameraSpeed:this.maxCameraSpeed),this.position=new n.Pq(this.position.x+u,this.position.y+p,this.position.z+f),this.setTarget(s)}attachControl(t,i){i=a.S0.BackCompatCameraNoPreventDefault(arguments),this.inputs.attachElement(i),this._reset=()=>{}}detachControl(){this.inputs.detachElement(),this._reset&&this._reset()}_checkInputs(){this.inputs.checkInputs(),this._checkLimits(),super._checkInputs(),this.lockedTarget&&this._follow(this.lockedTarget)}_checkLimits(){null!==this.lowerRadiusLimit&&this.radius<this.lowerRadiusLimit&&(this.radius=this.lowerRadiusLimit),null!==this.upperRadiusLimit&&this.radius>this.upperRadiusLimit&&(this.radius=this.upperRadiusLimit),null!==this.lowerHeightOffsetLimit&&this.heightOffset<this.lowerHeightOffsetLimit&&(this.heightOffset=this.lowerHeightOffsetLimit),null!==this.upperHeightOffsetLimit&&this.heightOffset>this.upperHeightOffsetLimit&&(this.heightOffset=this.upperHeightOffsetLimit),null!==this.lowerRotationOffsetLimit&&this.rotationOffset<this.lowerRotationOffsetLimit&&(this.rotationOffset=this.lowerRotationOffsetLimit),null!==this.upperRotationOffsetLimit&&this.rotationOffset>this.upperRotationOffsetLimit&&(this.rotationOffset=this.upperRotationOffsetLimit)}getClassName(){return"FollowCamera"}}(0,o.Cg)([(0,s.lK)()],c.prototype,"radius",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"lowerRadiusLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"upperRadiusLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"rotationOffset",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"lowerRotationOffsetLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"upperRotationOffsetLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"heightOffset",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"lowerHeightOffsetLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"upperHeightOffsetLimit",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"cameraAcceleration",void 0),(0,o.Cg)([(0,s.lK)()],c.prototype,"maxCameraSpeed",void 0),(0,o.Cg)([(0,s.xG)("lockedTargetId")],c.prototype,"lockedTarget",void 0);class d extends r.F{constructor(t,i,e,o,s,a){super(t,n.Pq.Zero(),a),this.alpha=i,this.beta=e,this.radius=o,this._cartesianCoordinates=n.Pq.Zero(),this.setMeshTarget(s)}setMeshTarget(t){this._meshTarget=t,this._follow()}_follow(){if(!this._meshTarget)return;this._cartesianCoordinates.x=this.radius*Math.cos(this.alpha)*Math.cos(this.beta),this._cartesianCoordinates.y=this.radius*Math.sin(this.beta),this._cartesianCoordinates.z=this.radius*Math.sin(this.alpha)*Math.cos(this.beta);const t=this._meshTarget.getAbsolutePosition();this.position=t.add(this._cartesianCoordinates),this.setTarget(t)}_checkInputs(){super._checkInputs(),this._follow()}getClassName(){return"ArcFollowCamera"}}},6425:(t,i,e)=>{e.d(i,{r:()=>n});var o=e(6374),s=e(983),a=e(681),r=e(5149);class n extends o._{constructor(t){super(t)}addKeyboard(){return this.add(new s.F),this}addMouseWheel(){return this.add(new a.t),this}addPointers(){return this.add(new r.p),this}addVRDeviceOrientation(){return console.warn("DeviceOrientation support not yet implemented for FollowCamera."),this}}},3825:(t,i,e)=>{e.d(i,{F:()=>l});var o=e(576),s=e(6631),a=e(3832),r=e(4983),n=e(507),h=e(3537);class l extends a.i{constructor(t,i,e,o=!0){super(t,i,e,o),this._tmpUpVector=r.Pq.Zero(),this._tmpTargetVector=r.Pq.Zero(),this.cameraDirection=new r.Pq(0,0,0),this.cameraRotation=new r.I9(0,0),this.ignoreParentScaling=!1,this.updateUpVectorFromRotation=!1,this._tmpQuaternion=new r.PT,this.rotation=new r.Pq(0,0,0),this.speed=2,this.noRotationConstraint=!1,this.invertRotation=!1,this.inverseRotationSpeed=.2,this.lockedTarget=null,this._currentTarget=r.Pq.Zero(),this._initialFocalDistance=1,this._viewMatrix=r.uq.Zero(),this._camMatrix=r.uq.Zero(),this._cameraTransformMatrix=r.uq.Zero(),this._cameraRotationMatrix=r.uq.Zero(),this._referencePoint=new r.Pq(0,0,1),this._transformedReferencePoint=r.Pq.Zero(),this._defaultUp=r.Pq.Up(),this._cachedRotationZ=0,this._cachedQuaternionRotationZ=0}getFrontPosition(t){this.getWorldMatrix();const i=this.getTarget().subtract(this.position);return i.normalize(),i.scaleInPlace(t),this.globalPosition.add(i)}_getLockedTargetPosition(){return this.lockedTarget?(this.lockedTarget.absolutePosition&&this.lockedTarget.computeWorldMatrix(),this.lockedTarget.absolutePosition||this.lockedTarget):null}storeState(){return this._storedPosition=this.position.clone(),this._storedRotation=this.rotation.clone(),this.rotationQuaternion&&(this._storedRotationQuaternion=this.rotationQuaternion.clone()),super.storeState()}_restoreStateValues(){return!!super._restoreStateValues()&&(this.position=this._storedPosition.clone(),this.rotation=this._storedRotation.clone(),this.rotationQuaternion&&(this.rotationQuaternion=this._storedRotationQuaternion.clone()),this.cameraDirection.copyFromFloats(0,0,0),this.cameraRotation.copyFromFloats(0,0),!0)}_initCache(){super._initCache(),this._cache.lockedTarget=new r.Pq(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotation=new r.Pq(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cache.rotationQuaternion=new r.PT(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}_updateCache(t){t||super._updateCache();const i=this._getLockedTargetPosition();i?this._cache.lockedTarget?this._cache.lockedTarget.copyFrom(i):this._cache.lockedTarget=i.clone():this._cache.lockedTarget=null,this._cache.rotation.copyFrom(this.rotation),this.rotationQuaternion&&this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)}_isSynchronizedViewMatrix(){if(!super._isSynchronizedViewMatrix())return!1;const t=this._getLockedTargetPosition();return(this._cache.lockedTarget?this._cache.lockedTarget.equals(t):!t)&&(this.rotationQuaternion?this.rotationQuaternion.equals(this._cache.rotationQuaternion):this._cache.rotation.equals(this.rotation))}_computeLocalCameraSpeed(){const t=this.getEngine();return this.speed*Math.sqrt(t.getDeltaTime()/(100*t.getFps()))}setTarget(t){this.upVector.normalize(),this._initialFocalDistance=t.subtract(this.position).length(),this.position.z===t.z&&(this.position.z+=n.bH),this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance),r.uq.LookAtLHToRef(this.position,t,this._defaultUp,this._camMatrix),this._camMatrix.invert(),this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);const i=t.subtract(this.position);i.x>=0?this.rotation.y=-Math.atan(i.z/i.x)+Math.PI/2:this.rotation.y=-Math.atan(i.z/i.x)-Math.PI/2,this.rotation.z=0,isNaN(this.rotation.x)&&(this.rotation.x=0),isNaN(this.rotation.y)&&(this.rotation.y=0),isNaN(this.rotation.z)&&(this.rotation.z=0),this.rotationQuaternion&&r.PT.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}get target(){return this.getTarget()}set target(t){this.setTarget(t)}getTarget(){return this._currentTarget}_decideIfNeedsToMove(){return Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0}_updatePosition(){if(this.parent)return this.parent.getWorldMatrix().invertToRef(r.AA.Matrix[0]),r.Pq.TransformNormalToRef(this.cameraDirection,r.AA.Matrix[0],r.AA.Vector3[0]),void this.position.addInPlace(r.AA.Vector3[0]);this.position.addInPlace(this.cameraDirection)}_checkInputs(){const t=this.invertRotation?-this.inverseRotationSpeed:1,i=this._decideIfNeedsToMove(),e=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;if(i&&this._updatePosition(),e){if(this.rotationQuaternion&&this.rotationQuaternion.toEulerAnglesToRef(this.rotation),this.rotation.x+=this.cameraRotation.x*t,this.rotation.y+=this.cameraRotation.y*t,!this.noRotationConstraint){const t=1.570796;this.rotation.x>t&&(this.rotation.x=t),this.rotation.x<-t&&(this.rotation.x=-t)}this.rotationQuaternion&&this.rotation.lengthSquared()&&r.PT.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this.rotationQuaternion)}i&&(Math.abs(this.cameraDirection.x)<this.speed*n.bH&&(this.cameraDirection.x=0),Math.abs(this.cameraDirection.y)<this.speed*n.bH&&(this.cameraDirection.y=0),Math.abs(this.cameraDirection.z)<this.speed*n.bH&&(this.cameraDirection.z=0),this.cameraDirection.scaleInPlace(this.inertia)),e&&(Math.abs(this.cameraRotation.x)<this.speed*n.bH&&(this.cameraRotation.x=0),Math.abs(this.cameraRotation.y)<this.speed*n.bH&&(this.cameraRotation.y=0),this.cameraRotation.scaleInPlace(this.inertia)),super._checkInputs()}_updateCameraRotationMatrix(){this.rotationQuaternion?this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix):r.uq.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix)}_rotateUpVectorWithCameraRotationMatrix(){return r.Pq.TransformNormalToRef(this._defaultUp,this._cameraRotationMatrix,this.upVector),this}_getViewMatrix(){return this.lockedTarget&&this.setTarget(this._getLockedTargetPosition()),this._updateCameraRotationMatrix(),this.rotationQuaternion&&this._cachedQuaternionRotationZ!=this.rotationQuaternion.z?(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedQuaternionRotationZ=this.rotationQuaternion.z):this._cachedRotationZ!==this.rotation.z&&(this._rotateUpVectorWithCameraRotationMatrix(),this._cachedRotationZ=this.rotation.z),r.Pq.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint),this.position.addToRef(this._transformedReferencePoint,this._currentTarget),this.updateUpVectorFromRotation&&(this.rotationQuaternion?h._0.Y.rotateByQuaternionToRef(this.rotationQuaternion,this.upVector):(r.PT.FromEulerVectorToRef(this.rotation,this._tmpQuaternion),h._0.Y.rotateByQuaternionToRef(this._tmpQuaternion,this.upVector))),this._computeViewMatrix(this.position,this._currentTarget,this.upVector),this._viewMatrix}_computeViewMatrix(t,i,e){if(this.ignoreParentScaling){if(this.parent){const o=this.parent.getWorldMatrix();r.Pq.TransformCoordinatesToRef(t,o,this._globalPosition),r.Pq.TransformCoordinatesToRef(i,o,this._tmpTargetVector),r.Pq.TransformNormalToRef(e,o,this._tmpUpVector),this._markSyncedWithParent()}else this._globalPosition.copyFrom(t),this._tmpTargetVector.copyFrom(i),this._tmpUpVector.copyFrom(e);this.getScene().useRightHandedSystem?r.uq.LookAtRHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix):r.uq.LookAtLHToRef(this._globalPosition,this._tmpTargetVector,this._tmpUpVector,this._viewMatrix)}else if(this.getScene().useRightHandedSystem?r.uq.LookAtRHToRef(t,i,e,this._viewMatrix):r.uq.LookAtLHToRef(t,i,e,this._viewMatrix),this.parent){const t=this.parent.getWorldMatrix();this._viewMatrix.invert(),this._viewMatrix.multiplyToRef(t,this._viewMatrix),this._viewMatrix.getTranslationToRef(this._globalPosition),this._viewMatrix.invert(),this._markSyncedWithParent()}else this._globalPosition.copyFrom(t)}createRigCamera(t,i){if(this.cameraRigMode!==a.i.RIG_MODE_NONE){const i=new l(t,this.position.clone(),this.getScene());return i.isRigCamera=!0,i.rigParent=this,this.cameraRigMode!==a.i.RIG_MODE_VR&&this.cameraRigMode!==a.i.RIG_MODE_WEBVR||(this.rotationQuaternion||(this.rotationQuaternion=new r.PT),i._cameraRigParams={},i.rotationQuaternion=new r.PT),i.mode=this.mode,i.orthoLeft=this.orthoLeft,i.orthoRight=this.orthoRight,i.orthoTop=this.orthoTop,i.orthoBottom=this.orthoBottom,i}return null}_updateRigCameras(){const t=this._rigCameras[0],i=this._rigCameras[1];switch(this.computeWorldMatrix(),this.cameraRigMode){case a.i.RIG_MODE_STEREOSCOPIC_ANAGLYPH:case a.i.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:case a.i.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:case a.i.RIG_MODE_STEREOSCOPIC_OVERUNDER:case a.i.RIG_MODE_STEREOSCOPIC_INTERLACED:{const e=this.cameraRigMode===a.i.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?1:-1,o=this.cameraRigMode===a.i.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED?-1:1;this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*e,t),this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle*o,i);break}case a.i.RIG_MODE_VR:t.rotationQuaternion?(t.rotationQuaternion.copyFrom(this.rotationQuaternion),i.rotationQuaternion.copyFrom(this.rotationQuaternion)):(t.rotation.copyFrom(this.rotation),i.rotation.copyFrom(this.rotation)),t.position.copyFrom(this.position),i.position.copyFrom(this.position)}super._updateRigCameras()}_getRigCamPositionAndTarget(t,i){this.getTarget().subtractToRef(this.position,l._TargetFocalPoint),l._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);const e=l._TargetFocalPoint.addInPlace(this.position);r.uq.TranslationToRef(-e.x,-e.y,-e.z,l._TargetTransformMatrix),l._TargetTransformMatrix.multiplyToRef(r.uq.RotationAxis(i.upVector,t),l._RigCamTransformMatrix),r.uq.TranslationToRef(e.x,e.y,e.z,l._TargetTransformMatrix),l._RigCamTransformMatrix.multiplyToRef(l._TargetTransformMatrix,l._RigCamTransformMatrix),r.Pq.TransformCoordinatesToRef(this.position,l._RigCamTransformMatrix,i.position),i.setTarget(e)}getClassName(){return"TargetCamera"}}l._RigCamTransformMatrix=new r.uq,l._TargetTransformMatrix=new r.uq,l._TargetFocalPoint=new r.Pq,(0,o.Cg)([(0,s.P_)()],l.prototype,"rotation",void 0),(0,o.Cg)([(0,s.lK)()],l.prototype,"speed",void 0),(0,o.Cg)([(0,s.xG)("lockedTargetId")],l.prototype,"lockedTarget",void 0)}}]);
//# sourceMappingURL=709.babylonBundle.js.map