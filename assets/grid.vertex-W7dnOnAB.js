import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{np as r,rp as i}from"./scene-Cj1cwVTt.js";import{_ as a,b as o,c as s,d as c,f as l,h as u,i as d,l as f,r as p,s as m,u as h,v as g}from"./vertexColorMixing-DSqgpydb.js";import{T as _,w as v}from"./default.vertex-DCt72bzS.js";import{c as y,l as b,s as x,u as S}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var C,w,T,E;e((()=>{t(),c(),r(),x(),b(),h(),a(),m(),d(),o(),v(),C=`gridVertexShader`,w=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#include<instancesDeclaration>
#include<__decl__sceneVertex>
varying vec3 vPosition;varying vec3 vNormal;
#if defined(HORIZON_FADE) || defined(BELOW_LINE_COLOR) || defined(ORIGIN_MARKER)
varying vec3 vWorldPos;
#endif
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<fogVertex>
vec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;
#ifdef OPACITY
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
if (vOpacityInfos.x==0.)
{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}
else
{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}
#endif 
#include<clipPlaneVertex>
#include<logDepthVertex>
vPosition=position;vNormal=normal;
#if defined(HORIZON_FADE) || defined(BELOW_LINE_COLOR) || defined(ORIGIN_MARKER)
vWorldPos=worldPos.xyz;
#endif
#define CUSTOM_VERTEX_MAIN_END
}`,n.ShadersStore[C]||(n.ShadersStore[C]=w),T=[l,i,y,S,f,u,s,p,g,_];for(let e of T)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);E={name:C,shader:w}}))();export{E as gridVertexShader};