import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{_ as r,b as i,h as a,i as o,l as s,r as c,u as l,v as u}from"./vertexColorMixing-DSqgpydb.js";import{T as d,w as f}from"./default.vertex-DCt72bzS.js";import{l as p,u as m}from"./mainUVVaryingDeclaration-CrGLEPdQ.js";var h,g,_,v;e((()=>{t(),p(),r(),l(),i(),f(),o(),h=`skyVertexShader`,g=`precision highp float;attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
uniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
gl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vColor=color;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStore[h]||(n.ShadersStore[h]=g),_=[m,a,s,u,d,c];for(let e of _)n.IncludesShadersStore[e.name]||(n.IncludesShadersStore[e.name]=e.shader);v={name:h,shader:g}}))();export{v as skyVertexShader};