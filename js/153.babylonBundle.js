"use strict";(self.webpackChunktrans_america=self.webpackChunktrans_america||[]).push([[153],{46153:(e,r,a)=>{a.r(r),a.d(r,{lodPixelShaderWGSL:()=>n});const t="lodPixelShader",m="const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,fragmentInputs.vUV,uniforms.lod);if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}\n";a(43862).l.ShadersStoreWGSL[t]=m;const n={name:t,shader:m}}}]);