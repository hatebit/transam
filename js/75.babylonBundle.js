"use strict";(self.webpackChunktrans_america=self.webpackChunktrans_america||[]).push([[75],{76075:(t,e,a)=>{a.r(e),a.d(e,{_HDRTextureLoader:()=>n});var r=a(60554);class n{constructor(){this.supportCascades=!1}loadCubeData(){throw".env not supported in Cube."}loadData(t,e,a){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),o=(0,r.NK)(n),i=(0,r.LT)(n,o),h=o.width*o.height,s=new Float32Array(4*h);for(let t=0;t<h;t+=1)s[4*t]=i[3*t],s[4*t+1]=i[3*t+1],s[4*t+2]=i[3*t+2],s[4*t+3]=1;a(o.width,o.height,e.generateMipMaps,!1,(()=>{const t=e.getEngine();e.type=1,e.format=5,e._gammaSpace=!1,t._uploadDataToTextureDirectly(e,s)}))}}},60554:(t,e,a)=>{a.d(e,{I9:()=>w,LT:()=>s,NK:()=>i,VH:()=>h});var r=a(76531);function n(t,e,a,r,n,o){n>0?(n=function(t,e){return e>1023?1*Math.pow(2,1023)*Math.pow(2,e-1023):e<-1074?1*Math.pow(2,-1074)*Math.pow(2,e+1074):1*Math.pow(2,e)}(0,n-136),t[o+0]=e*n,t[o+1]=a*n,t[o+2]=r*n):(t[o+0]=0,t[o+1]=0,t[o+2]=0)}function o(t,e){let a="",r="";for(let n=e;n<t.length-e&&(r=String.fromCharCode(t[n]),"\n"!=r);n++)a+=r;return a}function i(t){let e=0,a=0,r=o(t,0);if("#"!=r[0]||"?"!=r[1])throw"Bad HDR Format.";let n=!1,i=!1,h=0;do{h+=r.length+1,r=o(t,h),"FORMAT=32-bit_rle_rgbe"==r?i=!0:0==r.length&&(n=!0)}while(!n);if(!i)throw"HDR Bad header format, unsupported FORMAT";h+=r.length+1,r=o(t,h);const s=/^-Y (.*) \+X (.*)$/g.exec(r);if(!s||s.length<3)throw"HDR Bad header format, no size";if(a=parseInt(s[2]),e=parseInt(s[1]),a<8||a>32767)throw"HDR Bad header format, unsupported size";return h+=r.length+1,{height:e,width:a,dataPosition:h}}function h(t,e,a=!1){const n=new Uint8Array(t),o=i(n),h=s(n,o);return r.D.ConvertPanoramaToCubemap(h,o.width,o.height,e,a)}function s(t,e){return function(t,e){let a=e.height;const r=e.width;let o,i,h,s,w,f=e.dataPosition,c=0,l=0,d=0;const C=new ArrayBuffer(4*r),p=new Uint8Array(C),P=new ArrayBuffer(e.width*e.height*4*3),m=new Float32Array(P);for(;a>0;){if(o=t[f++],i=t[f++],h=t[f++],s=t[f++],2!=o||2!=i||128&h||e.width<8||e.width>32767)return u(t,e);if((h<<8|s)!=r)throw"HDR Bad header format, wrong scan line width";for(c=0,d=0;d<4;d++)for(l=(d+1)*r;c<l;)if(o=t[f++],i=t[f++],o>128){if(w=o-128,0==w||w>l-c)throw"HDR Bad Format, bad scanline data (run)";for(;w-- >0;)p[c++]=i}else{if(w=o,0==w||w>l-c)throw"HDR Bad Format, bad scanline data (non-run)";if(p[c++]=i,--w>0)for(let e=0;e<w;e++)p[c++]=t[f++]}for(d=0;d<r;d++)o=p[d],i=p[d+r],h=p[d+2*r],s=p[d+3*r],n(m,o,i,h,s,(e.height-a)*r*3+3*d);a--}return m}(t,e)}function u(t,e){let a=e.height;const r=e.width;let o,i,h,s,u,w=e.dataPosition;const f=new ArrayBuffer(e.width*e.height*4*3),c=new Float32Array(f);for(;a>0;){for(u=0;u<e.width;u++)o=t[w++],i=t[w++],h=t[w++],s=t[w++],n(c,o,i,h,s,(e.height-a)*r*3+3*u);a--}return c}const w={RGBE_ReadHeader:i,GetCubeMapTextureData:h,RGBE_ReadPixels:s}},76531:(t,e,a)=>{a.d(e,{D:()=>n});var r=a(54983);class n{static ConvertPanoramaToCubemap(t,e,a,r,n=!1){if(!t)throw"ConvertPanoramaToCubemap: input cannot be null";if(t.length!=e*a*3)throw"ConvertPanoramaToCubemap: input size is wrong";return{front:this.CreateCubemapTexture(r,this.FACE_FRONT,t,e,a,n),back:this.CreateCubemapTexture(r,this.FACE_BACK,t,e,a,n),left:this.CreateCubemapTexture(r,this.FACE_LEFT,t,e,a,n),right:this.CreateCubemapTexture(r,this.FACE_RIGHT,t,e,a,n),up:this.CreateCubemapTexture(r,this.FACE_UP,t,e,a,n),down:this.CreateCubemapTexture(r,this.FACE_DOWN,t,e,a,n),size:r,type:1,format:4,gammaSpace:!1}}static CreateCubemapTexture(t,e,a,r,n,o=!1){const i=new ArrayBuffer(t*t*4*3),h=new Float32Array(i),s=o?Math.max(1,Math.round(r/4/t)):1,u=1/s,w=u*u,f=e[1].subtract(e[0]).scale(u/t),c=e[3].subtract(e[2]).scale(u/t),l=1/t;let d=0;for(let o=0;o<t;o++)for(let i=0;i<s;i++){let i=e[0],C=e[2];for(let e=0;e<t;e++)for(let u=0;u<s;u++){const s=C.subtract(i).scale(d).add(i);s.normalize();const u=this.CalcProjectionSpherical(s,a,r,n);h[o*t*3+3*e+0]+=u.r*w,h[o*t*3+3*e+1]+=u.g*w,h[o*t*3+3*e+2]+=u.b*w,i=i.add(f),C=C.add(c)}d+=l*u}return h}static CalcProjectionSpherical(t,e,a,r){let n=Math.atan2(t.z,t.x);const o=Math.acos(t.y);for(;n<-Math.PI;)n+=2*Math.PI;for(;n>Math.PI;)n-=2*Math.PI;let i=n/Math.PI;const h=o/Math.PI;i=.5*i+.5;let s=Math.round(i*a);s<0?s=0:s>=a&&(s=a-1);let u=Math.round(h*r);u<0?u=0:u>=r&&(u=r-1);const w=r-u-1;return{r:e[w*a*3+3*s+0],g:e[w*a*3+3*s+1],b:e[w*a*3+3*s+2]}}}n.FACE_LEFT=[new r.Pq(-1,-1,-1),new r.Pq(1,-1,-1),new r.Pq(-1,1,-1),new r.Pq(1,1,-1)],n.FACE_RIGHT=[new r.Pq(1,-1,1),new r.Pq(-1,-1,1),new r.Pq(1,1,1),new r.Pq(-1,1,1)],n.FACE_FRONT=[new r.Pq(1,-1,-1),new r.Pq(1,-1,1),new r.Pq(1,1,-1),new r.Pq(1,1,1)],n.FACE_BACK=[new r.Pq(-1,-1,1),new r.Pq(-1,-1,-1),new r.Pq(-1,1,1),new r.Pq(-1,1,-1)],n.FACE_DOWN=[new r.Pq(1,1,-1),new r.Pq(1,1,1),new r.Pq(-1,1,-1),new r.Pq(-1,1,1)],n.FACE_UP=[new r.Pq(-1,-1,-1),new r.Pq(-1,-1,1),new r.Pq(1,-1,-1),new r.Pq(1,-1,1)]}}]);