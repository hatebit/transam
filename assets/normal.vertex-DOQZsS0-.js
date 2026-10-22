import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Ct as r,St as i,_t as a,bt as o,gt as s,vt as c,xt as l,yt as u}from"./index-B0b5zFR3.js";import{a as d,f,g as p,h as m,i as h,l as g,o as _,p as v,r as y,s as b,u as x,v as S}from"./vertexColorMixing-CjLmkE7c.js";import{D as C,E as w,O as T,U as E,W as D,_ as O,g as k,k as A}from"./default.vertex-DQ1Y1aWC.js";import{a as j,o as M}from"./mainUVVaryingDeclaration-DL3RSfNF.js";var N,P,F,I;e((()=>{t(),S(),r(),c(),g(),j(),_(),k(),E(),s(),m(),l(),f(),w(),h(),T(),N=`normalVertexShader`,P=`attribute position: vec3f;
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
#ifdef DIFFUSE
varying vDiffuseUV: vec2f;uniform diffuseMatrix: mat4x4f;uniform vDiffuseInfos: vec2f;
#endif
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
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
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;vertexOutputs.vPositionW= worldPos.xyz;
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
#ifdef DIFFUSE
if (uniforms.vDiffuseInfos.x==0.)
{vertexOutputs.vDiffuseUV=(uniforms.diffuseMatrix* vec4f(uv,1.0,0.0)).xy;}
else
{vertexOutputs.vDiffuseUV=(uniforms.diffuseMatrix* vec4f(uv2,1.0,0.0)).xy;}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[N]||(n.ShadersStoreWGSL[N]=P),F=[p,i,u,b,M,d,O,D,a,v,o,x,C,y,A];for(let e of F)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);I={name:N,shader:P}}))();export{I as normalVertexShaderWGSL};