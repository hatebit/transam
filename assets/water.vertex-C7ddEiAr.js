import{n as e}from"./rolldown-runtime-BWaJ3C7D.js";import{n as t,t as n}from"./shaderStore-BzYzpi6e.js";import{Ct as r,St as i,_t as a,bt as o,gt as s,vt as c,xt as l,yt as u}from"./index-B0b5zFR3.js";import{a as d,f,g as p,h as m,i as h,l as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C,v as w}from"./vertexColorMixing-CjLmkE7c.js";import{D as T,E,O as D,U as O,W as k,_ as A,g as j,k as M}from"./default.vertex-DQ1Y1aWC.js";import{a as N,o as P}from"./mainUVVaryingDeclaration-DL3RSfNF.js";var F,I,L,R;e((()=>{t(),w(),r(),c(),g(),v(),j(),O(),N(),s(),m(),l(),f(),h(),D(),S(),E(),F=`waterVertexShader`,I=`attribute position: vec3f;
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
#ifdef BUMP
varying vNormalUV: vec2f;
#ifdef BUMPSUPERIMPOSE
varying vNormalUV2: vec2f;
#endif
uniform normalMatrix: mat4x4f;uniform vNormalInfos: vec2f;
#endif
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<logDepthDeclaration>
uniform reflectionViewProjection: mat4x4f;uniform windDirection: vec2f;uniform waveLength: f32;uniform time: f32;uniform windForce: f32;uniform waveHeight: f32;uniform waveSpeed: f32;uniform waveCount: f32;varying vRefractionMapTexCoord: vec3f;varying vReflectionMapTexCoord: vec3f;
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
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
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
#ifdef BUMP
if (uniforms.vNormalInfos.x==0.)
{vertexOutputs.vNormalUV=(uniforms.normalMatrix* vec4f((uv*1.0)/uniforms.waveLength+uniforms.time*uniforms.windForce*uniforms.windDirection,1.0,0.0)).xy;
#ifdef BUMPSUPERIMPOSE
vertexOutputs.vNormalUV2=(uniforms.normalMatrix* vec4f((uv*0.721)/uniforms.waveLength+uniforms.time*1.2*uniforms.windForce*uniforms.windDirection,1.0,0.0)).xy;
#endif
}
else
{vertexOutputs.vNormalUV=(uniforms.normalMatrix* vec4f((uv2*1.0)/uniforms.waveLength+uniforms.time*uniforms.windForce*uniforms.windDirection,1.0,0.0)).xy;
#ifdef BUMPSUPERIMPOSE
vertexOutputs.vNormalUV2=(uniforms.normalMatrix* vec4f((uv2*0.721)/uniforms.waveLength+uniforms.time*1.2*uniforms.windForce*uniforms.windDirection,1.0,0.0)).xy;
#endif
}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
var finalWaveCount: f32=1.0/(uniforms.waveCount*0.5);
#ifdef USE_WORLD_COORDINATES
var p: vec3f=worldPos.xyz;
#else
var p: vec3f=vertexInputs.position;
#endif
var newY: f32=(sin(((p.x/finalWaveCount)+uniforms.time*uniforms.waveSpeed))*uniforms.waveHeight*uniforms.windDirection.x*5.0)
+ (cos(((p.z/finalWaveCount)+uniforms.time*uniforms.waveSpeed))*uniforms.waveHeight*uniforms.windDirection.y*5.0);p.y=p.y+abs(newY);
#ifdef USE_WORLD_COORDINATES
vertexOutputs.position=uniforms.viewProjection* vec4f(p,1.0);
#else
vertexOutputs.position=uniforms.viewProjection*finalWorld* vec4f(p,1.0);
#endif
#ifdef REFLECTION
vertexOutputs.vRefractionMapTexCoord=vec3f(
0.5*(vertexOutputs.position.w+vertexOutputs.position.x),
0.5*(vertexOutputs.position.w+vertexOutputs.position.y),
vertexOutputs.position.w
);worldPos=uniforms.reflectionViewProjection*finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.vReflectionMapTexCoord=vec3f(
0.5*(worldPos.w+worldPos.x),
0.5*(worldPos.w+worldPos.y),
worldPos.w
);
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`,n.ShadersStoreWGSL[F]||(n.ShadersStoreWGSL[F]=I),L=[p,i,u,x,d,A,k,P,a,y,o,C,b,M,_,T];for(let e of L)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);R={name:F,shader:I}}))();export{R as waterVertexShaderWGSL};