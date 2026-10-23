import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Ct as r,St as i,_t as a,bt as o,ft as s,gt as c,pt as l,vt as u,xt as d,yt as f}from"./index-4htYphuR.js";import{a as p,f as m,g as h,h as g,i as _,l as v,o as y,p as b,r as x,s as S,u as C,v as w}from"./vertexColorMixing-CjLmkE7c.js";import{D as T,E,O as D,U as O,W as k,_ as A,g as j,k as M}from"./default.vertex-nGT7kpCq.js";import{a as N,o as P}from"./mainUVVaryingDeclaration-B6OCN_pV.js";var F,I,L,R;e((()=>{t(),w(),r(),u(),s(),v(),N(),y(),j(),O(),c(),g(),d(),m(),E(),_(),D(),F=`shadowOnlyVertexShader`,I=`attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<sceneUboDeclaration>
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
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
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=scene.viewProjection*worldPos;vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
vertexOutputs.vNormalW=normalize(( finalWorld* vec4f(vertexInputs.normal,0.0)).xyz);
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[F]||(n.ShadersStoreWGSL[F]=I),L=[h,i,f,l,S,P,p,A,k,a,b,o,C,T,x,M];for(let e of L)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);R={name:F,shader:I}}))();export{R as shadowOnlyVertexShaderWGSL};