import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";import{a as i,c as a,d as o,l as s,n as c,o as l,r as u,t as d}from"./fogFragment-Dp0oq-kC.js";var f=t({colorPixelShader:()=>g}),p,m,h,g,_=e((()=>{n(),a(),i(),o(),c(),p=`colorPixelShader`,m=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vec4 vColor;
#else
uniform vec4 color;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
gl_FragColor=vColor;
#else
gl_FragColor=color;
#endif
#include<fogFragment>(color,gl_FragColor)
#define CUSTOM_FRAGMENT_MAIN_END
}`,r.ShadersStore[p]||(r.ShadersStore[p]=m),h=[l,u,s,d];for(let e of h)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);g={name:p,shader:m}}));export{f as n,_ as r,g as t};