import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";import{Ct as i,St as a,_t as o,bt as s,gt as c,vt as l,xt as u,yt as d}from"./index-B0b5zFR3.js";import{a as f,f as p,g as m,h,i as g,l as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T}from"./vertexColorMixing-CjLmkE7c.js";var E=t({colorVertexShaderWGSL:()=>A}),D,O,k,A,j=e((()=>{n(),T(),i(),_(),y(),l(),c(),h(),u(),p(),g(),C(),D=`colorVertexShader`,O=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`,r.ShadersStoreWGSL[D]||(r.ShadersStoreWGSL[D]=O),k=[m,a,S,f,d,o,b,s,w,x,v];for(let e of k)r.IncludesShadersStoreWGSL[e.name]||(r.IncludesShadersStoreWGSL[e.name]=e.shader);A={name:D,shader:O}}));export{E as n,j as r,A as t};