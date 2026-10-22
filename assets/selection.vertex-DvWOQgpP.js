import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Ct as r,St as i,_t as a,bt as o,gt as s,vt as c,xt as l,yt as u}from"./index-B0b5zFR3.js";import{f as d,g as f,h as p,l as m,p as h,s as g,u as _,v}from"./vertexColorMixing-CjLmkE7c.js";import{B as y,F as b,L as x,M as S,P as C,R as w,V as T,j as E}from"./default.vertex-DQ1Y1aWC.js";var D,O,k,A;e((()=>{t(),v(),r(),E(),x(),m(),c(),C(),y(),s(),p(),l(),d(),D=`selectionVertexShader`,O=`attribute position: vec3f;
#ifdef INSTANCES
attribute instanceSelectionId: f32;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef STORE_CAMERASPACE_Z
uniform view: mat4x4f;
#else
uniform depthValues: vec2f;
#endif
#ifdef INSTANCES
flat varying vSelectionId: f32;
#endif
#ifdef STORE_CAMERASPACE_Z
varying vViewPosZ: f32;
#else
varying vDepthMetric: f32;
#endif
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
vertexOutputs.vViewPosZ=(uniforms.view*worldPos).z;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric=((-vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#else
vertexOutputs.vDepthMetric=((vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#endif
#endif
#ifdef INSTANCES
vertexOutputs.vSelectionId=vertexInputs.instanceSelectionId;
#endif
#include<clipPlaneVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[D]||(n.ShadersStoreWGSL[D]=O),k=[f,i,S,w,g,u,b,T,a,h,o,_];for(let e of k)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);A={name:D,shader:O}}))();export{A as selectionVertexShaderWGSL};