import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{_d as r,_h as i,gd as a,gh as o}from"./scene-B0hHOGBN.js";import{F as s,K as c,L as l,M as u,P as d,R as f,T as p,g as m,h,j as g,q as _,w as v}from"./oitFragment-Bkxwp85I.js";import{a as y,c as b,d as x,l as S,n as C,o as w,r as T,t as E}from"./fogFragment-Dp0oq-kC.js";import{r as D,t as O}from"./helperFunctions-CoqRI2_L.js";import{c as k,l as A,s as j,u as M}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var N,P,F,I;e((()=>{t(),o(),j(),D(),d(),g(),v(),h(),b(),A(),y(),x(),l(),c(),C(),r(),N=`shadowOnlyPixelShader`,P=`precision highp float;
#include<__decl__sceneFragment>
uniform float alpha;uniform vec3 shadowColor;
#define ADDITIONAL_FRAGMENT_DECLARATION
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..1]
#define CUSTOM_FRAGMENT_BEFORE_LIGHT_COMPOSITION
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`,n.ShadersStore[N]||(n.ShadersStore[N]=P),F=[i,k,O,s,u,p,m,w,M,T,S,f,_,E,a];for(let e of F)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);I={name:N,shader:P}}))();export{I as shadowOnlyPixelShader};