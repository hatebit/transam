import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Ct as r,St as i,_t as a,bt as o,gt as s,vt as c,xt as l,yt as u}from"./index-B0b5zFR3.js";import{a as d,f,g as p,h as m,i as h,l as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w}from"./vertexColorMixing-CjLmkE7c.js";import{D as T,E,O as D,U as O,W as k,_ as A,g as j,k as M}from"./default.vertex-DQ1Y1aWC.js";import{a as N,o as P}from"./mainUVVaryingDeclaration-DL3RSfNF.js";var F,I,L,R;e((()=>{t(),w(),r(),c(),g(),N(),v(),j(),O(),s(),m(),l(),f(),E(),h(),D(),S(),F=`gradientVertexShader`,I=`attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform view: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;varying vPosition: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
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
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;vertexOutputs.vPositionW= worldPos.xyz;vertexOutputs.vPosition=vertexInputs.position;
#ifdef NORMAL
vertexOutputs.vNormalW=normalize(( finalWorld* vec4f(vertexInputs.normal,0.0)).xyz);
#endif
#ifndef UV1
var uv: vec2f= vec2f(0.,0.);
#else
var uv: vec2f=vertexInputs.uv;
#endif
#ifndef UV2
var uv2: vec2f= vec2f(0.,0.);
#else
var uv2: vec2f=vertexInputs.uv2;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[F]||(n.ShadersStoreWGSL[F]=I),L=[p,i,u,x,P,d,A,k,a,y,o,C,T,b,M,_];for(let e of L)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);R={name:F,shader:I}}))();export{R as gradientVertexShaderWGSL};