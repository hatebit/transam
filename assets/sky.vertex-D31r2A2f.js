import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{a as r,f as i,i as a,l as o,o as s,r as c,s as l,u}from"./vertexColorMixing-CjLmkE7c.js";import{D as d,E as f}from"./default.vertex-DQ1Y1aWC.js";import{a as p,o as m}from"./mainUVVaryingDeclaration-DL3RSfNF.js";var h,g,_,v;e((()=>{t(),p(),o(),s(),i(),f(),a(),h=`skyVertexShader`,g=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
uniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[h]||(n.ShadersStoreWGSL[h]=g),_=[m,l,r,u,d,c];for(let e of _)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);v={name:h,shader:g}}))();export{v as skyVertexShaderWGSL};