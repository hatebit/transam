import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";var i=t({clipPlaneFragment:()=>s}),a,o,s,c=e((()=>{n(),a=`clipPlaneFragment`,o=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{discard;}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{discard;}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{discard;}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{discard;}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{discard;}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{discard;}
#endif
`,r.IncludesShadersStore[a]||(r.IncludesShadersStore[a]=o),s={name:a,shader:o}})),l=t({clipPlaneFragmentDeclaration:()=>f}),u,d,f,p=e((()=>{n(),u=`clipPlaneFragmentDeclaration`,d=`#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`,r.IncludesShadersStore[u]||(r.IncludesShadersStore[u]=d),f={name:u,shader:d}})),m=t({fogFragmentDeclaration:()=>_}),h,g,_,v=e((()=>{n(),h=`fogFragmentDeclaration`,g=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()
{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)
{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}
else if (FOGMODE_EXP==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}
else if (FOGMODE_EXP2==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}
return clamp(fogCoeff,0.0,1.0);}
#endif
`,r.IncludesShadersStore[h]||(r.IncludesShadersStore[h]=g),_={name:h,shader:g}})),y,b,x,S=e((()=>{n(),y=`fogFragment`,b=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`,r.IncludesShadersStore[y]||(r.IncludesShadersStore[y]=b),x={name:y,shader:b}}));export{v as a,p as c,c as d,m as i,s as l,S as n,f as o,_ as r,l as s,x as t,i as u};