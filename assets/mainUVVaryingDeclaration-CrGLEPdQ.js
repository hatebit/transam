import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";var i=t({logDepthDeclaration:()=>s}),a,o,s,c=e((()=>{n(),a=`logDepthDeclaration`,o=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`,r.IncludesShadersStore[a]||(r.IncludesShadersStore[a]=o),s={name:a,shader:o}})),l,u,d,f=e((()=>{n(),l=`sceneUboDeclaration`,u=`layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};
`,r.IncludesShadersStore[l]||(r.IncludesShadersStore[l]=u),d={name:l,shader:u}})),p,m,h,g=e((()=>{n(),p=`meshUboDeclaration`,m=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`,r.IncludesShadersStore[p]||(r.IncludesShadersStore[p]=m),h={name:p,shader:m}})),_,v,y,b=e((()=>{n(),f(),g(),_=`defaultUboDeclaration`,v=`layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;vec4 cameraInfo;vec4 vTextureRepetitionHexTilingParams;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionPosition;vec3 vReflectionSize;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`,r.IncludesShadersStore[_]||(r.IncludesShadersStore[_]=v),y={name:_,shader:v}})),x,S,C,w=e((()=>{n(),x=`mainUVVaryingDeclaration`,S=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`,r.IncludesShadersStore[x]||(r.IncludesShadersStore[x]=S),C={name:x,shader:S}}));export{g as a,d as c,i as d,b as i,c as l,C as n,h as o,y as r,f as s,w as t,s as u};