import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{C as r,E as i,_ as a,a as o,b as s,c,d as l,f as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,w as C,x as w}from"./vertexColorMixing-DSqgpydb.js";import{T,w as E}from"./default.vertex-DCt72bzS.js";import{l as D,u as O}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var k,A,j,M;e((()=>{t(),i(),m(),l(),a(),D(),x(),y(),r(),g(),s(),E(),f(),b(),k=`fireVertexShader`,A=`precision highp float;attribute vec3 position;
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
varying vec2 vDiffuseUV;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
uniform float time;uniform float speed;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
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
#ifdef DIFFUSE
vDiffuseUV=uv;vDiffuseUV.y-=0.2;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#ifdef DIFFUSE
vec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStore[k]||(n.ShadersStore[k]=A),j=[C,_,u,d,O,p,c,w,o,S,T,v,h];for(let e of j)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);M={name:k,shader:A}}))();export{M as fireVertexShader};