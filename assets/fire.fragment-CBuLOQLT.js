import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Di as r,Ei as i}from"./scene-Cj1cwVTt.js";import{K as a,c as o,l as s,q as c}from"./default.fragment-Bgc-M77E.js";import{a as l,c as u,d,l as f,n as p,o as m,r as h,t as g}from"./fogFragment-ps5ZLoag.js";import{a as _,o as v}from"./mainUVVaryingDeclaration-DL3RSfNF.js";var y,b,x,S;e((()=>{t(),u(),_(),l(),d(),s(),a(),p(),r(),y=`firePixelShader`,b=`uniform vEyePosition: vec4f;varying vPositionW: vec3f;
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#ifdef DIFFUSE
varying vDiffuseUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;uniform vDiffuseInfos: vec2f;
#endif
var distortionSamplerSampler: sampler;var distortionSampler: texture_2d<f32>;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;
#ifdef DIFFUSE
varying vDistortionCoords1: vec2f;varying vDistortionCoords2: vec2f;varying vDistortionCoords3: vec2f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
fn bx2(x: vec4f)->vec4f
{return vec4f(2.0)*x- vec4f(1.0);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(uniforms.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var alpha: f32=1.0;
#ifdef DIFFUSE
let distortionAmount0: f32=0.092;let distortionAmount1: f32=0.092;let distortionAmount2: f32=0.092;var heightAttenuation: vec2f= vec2f(0.3,0.39);var noise0: vec4f=textureSample(distortionSampler,distortionSamplerSampler,fragmentInputs.vDistortionCoords1);var noise1: vec4f=textureSample(distortionSampler,distortionSamplerSampler,fragmentInputs.vDistortionCoords2);var noise2: vec4f=textureSample(distortionSampler,distortionSamplerSampler,fragmentInputs.vDistortionCoords3);var noiseSum: vec4f=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;var perturbedBaseCoords: vec4f= vec4f(fragmentInputs.vDiffuseUV,0.0,1.0)+noiseSum*(fragmentInputs.vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);var opacityColor: vec4f=textureSample(opacitySampler,opacitySamplerSampler,perturbedBaseCoords.xy);
#ifdef ALPHATEST
if (opacityColor.r<0.1) {discard;}
#endif
#define DEPTHPREPASS_SKIP_EARLY_RETURN
#include<depthPrePass>
#ifndef DEPTHPREPASS
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,perturbedBaseCoords.xy)*2.0;baseColor=baseColor*opacityColor;baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#endif
#ifndef DEPTHPREPASS
#ifdef VERTEXCOLOR
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
var diffuseBase: vec3f= vec3f(1.0,1.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
var color: vec4f= vec4f(baseColor.rgb,alpha);
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
#endif
}
`,n.ShadersStoreWGSL[y]||(n.ShadersStoreWGSL[y]=b),x=[m,v,h,f,o,c,g,i];for(let e of x)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);S={name:y,shader:b}}))();export{S as firePixelShaderWGSL};