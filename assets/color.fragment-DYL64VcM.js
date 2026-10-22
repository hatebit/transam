import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";import{a as i,c as a,d as o,l as s,n as c,o as l,r as u,t as d}from"./fogFragment-ps5ZLoag.js";var f=t({colorPixelShaderWGSL:()=>g}),p,m,h,g,_=e((()=>{n(),a(),i(),o(),c(),p=`colorPixelShader`,m=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`,r.ShadersStoreWGSL[p]||(r.ShadersStoreWGSL[p]=m),h=[l,u,s,d];for(let e of h)r.IncludesShadersStoreWGSL[e.name]||(r.IncludesShadersStoreWGSL[e.name]=e.shader);g={name:p,shader:m}}));export{f as n,_ as r,g as t};