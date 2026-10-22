import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";import{C as i,E as a,_ as o,a as s,b as c,c as l,d as u,f as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S,v as C,w,x as T}from"./vertexColorMixing-DSqgpydb.js";var E=t({colorVertexShader:()=>A}),D,O,k,A,j=e((()=>{n(),a(),h(),o(),S(),u(),b(),i(),_(),c(),p(),x(),D=`colorVertexShader`,O=`attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform mat4 view;
#endif
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`,r.ShadersStore[D]||(r.ShadersStore[D]=O),k=[w,v,f,m,d,l,T,s,C,y,g];for(let e of k)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);A={name:D,shader:O}}));export{E as n,j as r,A as t};