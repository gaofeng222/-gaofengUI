import{f as e,r as t,D,h as A,i as r,G as E,B as l,u as y,a1 as B,z as a,F as i,O as d}from"./chunks/framework.bb017a9c.js";const h=a("h2",null,"this is a title",-1),u=a("div",null,"这是头部信息",-1),g=a("div",null,"这是脚步信息",-1),m=e({__name:"drawer1",setup(c){let s=t(!0);t(!1);const n=()=>{s.value=!0};return(C,o)=>{const F=D("g-drawer");return A(),r(i,null,[E(F,{visible:y(s),"onUpdate:visible":o[0]||(o[0]=p=>B(s)?s.value=p:s=p),direction:"rtl"},{head:l(()=>[u]),footer:l(()=>[g]),default:l(()=>[h]),_:1},8,["visible"]),a("button",{onClick:n},"click")],64)}}}),v=a("p",null,"第一个示例：",-1),b=d('<h2 id="组件-api" tabindex="-1">组件 API <a class="header-anchor" href="#组件-api" aria-label="Permalink to &quot;组件 API&quot;">​</a></h2><h3 id="attributes-属性" tabindex="-1">Attributes 属性 <a class="header-anchor" href="#attributes-属性" aria-label="Permalink to &quot;Attributes 属性&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="methods-方法" tabindex="-1">Methods 方法 <a class="header-anchor" href="#methods-方法" aria-label="Permalink to &quot;Methods 方法&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="events-事件" tabindex="-1">Events 事件 <a class="header-anchor" href="#events-事件" aria-label="Permalink to &quot;Events 事件&quot;">​</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="slots-插槽" tabindex="-1">Slots 插槽 <a class="header-anchor" href="#slots-插槽" aria-label="Permalink to &quot;Slots 插槽&quot;">​</a></h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>',9),w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/g-drawer.md","lastUpdated":1681354805000}'),f={name:"components/g-drawer.md"},q=e({...f,setup(c){return(s,n)=>{const C=D("demo-preview");return A(),r("div",null,[v,E(C,{title:"基本使用",description:"测试使用 drawer 组件",code:"%3Ctemplate%3E%0D%0A%20%20%3Cg-drawer%20v-model:visible=%22show%22%20direction=%22rtl%22%3E%0D%0A%20%20%20%20%3Ch2%3Ethis%20is%20a%20title%3C/h2%3E%0D%0A%20%20%20%20%3Ctemplate%20#head%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E8%BF%99%E6%98%AF%E5%A4%B4%E9%83%A8%E4%BF%A1%E6%81%AF%3C/div%3E%0D%0A%20%20%20%20%3C/template%3E%0D%0A%20%20%20%20%3Ctemplate%20#footer%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E8%BF%99%E6%98%AF%E8%84%9A%E6%AD%A5%E4%BF%A1%E6%81%AF%3C/div%3E%0D%0A%20%20%20%20%3C/template%3E%0D%0A%20%20%3C/g-drawer%3E%0D%0A%20%20%3Cbutton%20@click=%22showHandle%22%3Eclick%3C/button%3E%0D%0A%3C/template%3E%0D%0A%20%20%0D%0A%3Cscript%20lang=%22ts%22%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22;%0D%0Alet%20show%20=%20ref(true);%0D%0A%0D%0Aconst%20visible%20=%20ref(false);%0D%0Aconst%20showHandle%20=%20()%20=%3E%20%7B%0D%0A%20%20show.value%20=%20true;%0D%0A%7D;%0D%0A%3C/script%3E",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eg-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Ev-model%3Avisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ertl%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eh2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3Ethis%20is%20a%20title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eh2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Ehead%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%E8%BF%99%E6%98%AF%E5%A4%B4%E9%83%A8%E4%BF%A1%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Efooter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%E8%BF%99%E6%98%AF%E8%84%9A%E6%AD%A5%E4%BF%A1%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eg-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3EshowHandle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23DBD7CAEE%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C98A7D99%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Elet%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2380A665%22%3EshowHandle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CB7676%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23666666%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20vitesse-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eg-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Ev-model%3Avisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Edirection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ertl%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eh2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3Ethis%20is%20a%20title%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eh2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Ehead%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%E8%BF%99%E6%98%AF%E5%A4%B4%E9%83%A8%E4%BF%A1%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Efooter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%E8%BF%99%E6%98%AF%E8%84%9A%E6%AD%A5%E4%BF%A1%E6%81%AF%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eg-drawer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3EshowHandle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Ebutton%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23393A34%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B56959%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B5695999%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Elet%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2359873A%22%3EshowHandle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B07D48%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23AB5959%22%3E%20%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231E754F%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23999999%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:l(()=>[E(m)]),_:1}),b])}}});export{w as __pageData,q as default};