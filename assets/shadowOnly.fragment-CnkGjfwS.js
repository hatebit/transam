import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{r,t as i}from"./helperFunctions-iuZowKg7.js";import{ft as a,pt as o}from"./index-4htYphuR.js";import{E as s,F as c,K as l,L as u,P as d,R as f,T as p,_ as m,g as h,q as g}from"./default.fragment-BiEsuVr6.js";import{a as _,c as v,d as y,l as b,n as x,o as S,r as C,t as w}from"./fogFragment-ps5ZLoag.js";import{a as T,o as E}from"./mainUVVaryingDeclaration-B6OCN_pV.js";var D,O,k,A;e((()=>{t(),a(),r(),d(),p(),h(),v(),T(),_(),y(),u(),l(),x(),D=`shadowOnlyPixelShader`,O=`#include<sceneUboDeclaration>
uniform alpha: f32;uniform shadowColor: vec3f;
#define ADDITIONAL_UBO_DECLARATION
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(1.0,1.0,1.0);
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;var shadow: f32=1.;var glossiness: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..1]
#define CUSTOM_FRAGMENT_BEFORE_LIGHT_COMPOSITION
var color: vec4f= vec4f(uniforms.shadowColor,(1.0-clamp(shadow,0.,1.))*uniforms.alpha);
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`,n.ShadersStoreWGSL[D]||(n.ShadersStoreWGSL[D]=O),k=[o,i,c,s,m,S,E,C,b,f,g,w];for(let e of k)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);A={name:D,shader:O}}))();export{A as shadowOnlyPixelShaderWGSL};