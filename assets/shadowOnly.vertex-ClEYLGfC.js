import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{np as r,rp as i}from"./scene-B0hHOGBN.js";import{C as a,E as o,_ as s,a as c,b as l,c as u,d,f,h as p,i as m,l as h,m as g,o as _,p as v,r as y,s as b,u as x,v as S,w as C,x as w}from"./vertexColorMixing-DSqgpydb.js";import{F as T,M as E,P as D,j as O}from"./oitFragment-Bkxwp85I.js";import{D as k,E as A,T as j,w as M}from"./default.vertex-DCt72bzS.js";import{c as N,l as P,s as F,u as I}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var L,R,z,B;e((()=>{t(),o(),g(),d(),r(),F(),s(),P(),x(),D(),O(),b(),a(),_(),l(),M(),m(),A(),L=`shadowOnlyVertexShader`,R=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<__decl__sceneVertex>
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStore[L]||(n.ShadersStore[L]=R),z=[C,v,f,i,N,p,I,h,T,E,u,w,c,S,j,y,k];for(let e of z)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);B={name:L,shader:R}}))();export{B as shadowOnlyVertexShader};