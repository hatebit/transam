import{n as e,r as t}from"./rolldown-runtime-BWaJ3C7D.js";import{n,t as r}from"./shaderStore-BzYzpi6e.js";var i=t({passPixelShader:()=>s}),a,o,s,c=e((()=>{n(),a=`passPixelShader`,o=`varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`,r.ShadersStore[a]||(r.ShadersStore[a]=o),s={name:a,shader:o}}));export{s as n,i as r,c as t};