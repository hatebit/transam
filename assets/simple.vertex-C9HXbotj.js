import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{C as r,E as i,_ as a,a as o,b as s,c,d as l,f as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,w as C,x as w}from"./vertexColorMixing-DSqgpydb.js";import{F as T,M as E,P as D,j as O}from"./oitFragment-Bkxwp85I.js";import{D as k,E as A,T as j,w as M}from"./default.vertex-DCt72bzS.js";import{l as N,u as P}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var F,I,L,R;e((()=>{t(),i(),m(),l(),a(),N(),x(),D(),O(),y(),r(),g(),s(),M(),f(),A(),b(),F=`simpleVertexShader`,I=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
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
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStore[F]||(n.ShadersStore[F]=I),L=[C,_,u,d,P,p,T,E,c,w,o,S,j,v,k,h];for(let e of L)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);R={name:F,shader:I}}))();export{R as simpleVertexShader};