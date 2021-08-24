import{r as n,o as a,c as t,d as s,w as l,F as e,a as u,b as o}from"./app.b192d7ee.js";const c={},p=u("h1",{id:"transition-过渡",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#transition-过渡","aria-hidden":"true"},"#"),o(" Transition 过渡")],-1),r=u("h3",{id:"介绍",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),o(" 介绍")],-1),i=u("p",null,[o("常用的过渡动画。"),u("br"),o(" 此组件引入了 "),u("code",null,"animation.css"),o(" 的常用动画")],-1),d=u("h3",{id:"引入",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#引入","aria-hidden":"true"},"#"),o(" 引入")],-1),k=u("div",{class:"language-javascript ext-js line-numbers-mode"},[u("pre",{class:"language-javascript"},[u("code",null,[u("span",{class:"token keyword"},"import"),o(),u("span",{class:"token punctuation"},"{"),o(" createApp "),u("span",{class:"token punctuation"},"}"),o(),u("span",{class:"token keyword"},"from"),o(),u("span",{class:"token string"},"'vue'"),o("\n"),u("span",{class:"token keyword"},"import"),o(),u("span",{class:"token punctuation"},"{"),o(" Transition "),u("span",{class:"token punctuation"},"}"),o(),u("span",{class:"token keyword"},"from"),o(),u("span",{class:"token string"},"'star-ui'"),u("span",{class:"token punctuation"},";"),o("\n"),u("span",{class:"token keyword"},"import"),o(" App "),u("span",{class:"token keyword"},"from"),o(),u("span",{class:"token string"},"'./App.vue'"),u("span",{class:"token punctuation"},";"),o("\n\n"),u("span",{class:"token function"},"createApp"),u("span",{class:"token punctuation"},"("),o("App"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},"."),u("span",{class:"token function"},"use"),u("span",{class:"token punctuation"},"("),o("Transition"),u("span",{class:"token punctuation"},")"),o("\n")])]),u("div",{class:"line-numbers"},[u("span",{class:"line-number"},"1"),u("br"),u("span",{class:"line-number"},"2"),u("br"),u("span",{class:"line-number"},"3"),u("br"),u("span",{class:"line-number"},"4"),u("br"),u("span",{class:"line-number"},"5"),u("br")])],-1),h=u("h2",{id:"代码演示",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),o(" 代码演示")],-1),b=u("h3",{id:"基础使用",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#基础使用","aria-hidden":"true"},"#"),o(" 基础使用")],-1),m=u("p",null,[o("通过设置 "),u("code",null,"name"),o(" 属性修改动画类型。")],-1),g=u("div",{class:"language-vue ext-vue line-numbers-mode"},[u("pre",{class:"language-vue"},[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("template")]),u("span",{class:"token punctuation"},">")]),o("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("star-button")]),o(),u("span",{class:"token attr-name"},"size"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("large"),u("span",{class:"token punctuation"},'"')]),o(),u("span",{class:"token attr-name"},"shape"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("semicircle"),u("span",{class:"token punctuation"},'"')]),o(),u("span",{class:"token attr-name"},"@click"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("handleClickShow"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),o("切换显示/隐藏"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("star-button")]),u("span",{class:"token punctuation"},">")]),o("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("star-transition")]),o(),u("span",{class:"token attr-name"},"name"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("fade"),u("span",{class:"token punctuation"},'"')]),o(),u("span",{class:"token attr-name"},"v-model"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("show"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),o("\n    "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("div")]),o(),u("span",{class:"token attr-name"},"class"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("block"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("div")]),u("span",{class:"token punctuation"},">")]),o("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("star-transition")]),u("span",{class:"token punctuation"},">")]),o("\n"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("template")]),u("span",{class:"token punctuation"},">")]),o("\n\n"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("script")]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token script"},[u("span",{class:"token language-javascript"},[o("\n"),u("span",{class:"token keyword"},"export"),o(),u("span",{class:"token keyword"},"default"),o(),u("span",{class:"token punctuation"},"{"),o("\n  "),u("span",{class:"token function"},"data"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),o(),u("span",{class:"token punctuation"},"{"),o("\n    "),u("span",{class:"token keyword"},"return"),o(),u("span",{class:"token punctuation"},"{"),o("\n      show"),u("span",{class:"token operator"},":"),o(),u("span",{class:"token boolean"},"true"),u("span",{class:"token punctuation"},","),o("\n    "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},";"),o("\n  "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),o("\n  methods"),u("span",{class:"token operator"},":"),o(),u("span",{class:"token punctuation"},"{"),o("\n    "),u("span",{class:"token function"},"handleClickShow"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},")"),o(),u("span",{class:"token punctuation"},"{"),o("\n      "),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),o("show "),u("span",{class:"token operator"},"="),o(),u("span",{class:"token operator"},"!"),u("span",{class:"token keyword"},"this"),u("span",{class:"token punctuation"},"."),o("show"),u("span",{class:"token punctuation"},";"),o("\n    "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),o("\n  "),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),o("\n"),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},";"),o("\n")])]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("script")]),u("span",{class:"token punctuation"},">")]),o("\n")])]),u("div",{class:"line-numbers"},[u("span",{class:"line-number"},"1"),u("br"),u("span",{class:"line-number"},"2"),u("br"),u("span",{class:"line-number"},"3"),u("br"),u("span",{class:"line-number"},"4"),u("br"),u("span",{class:"line-number"},"5"),u("br"),u("span",{class:"line-number"},"6"),u("br"),u("span",{class:"line-number"},"7"),u("br"),u("span",{class:"line-number"},"8"),u("br"),u("span",{class:"line-number"},"9"),u("br"),u("span",{class:"line-number"},"10"),u("br"),u("span",{class:"line-number"},"11"),u("br"),u("span",{class:"line-number"},"12"),u("br"),u("span",{class:"line-number"},"13"),u("br"),u("span",{class:"line-number"},"14"),u("br"),u("span",{class:"line-number"},"15"),u("br"),u("span",{class:"line-number"},"16"),u("br"),u("span",{class:"line-number"},"17"),u("br"),u("span",{class:"line-number"},"18"),u("br"),u("span",{class:"line-number"},"19"),u("br"),u("span",{class:"line-number"},"20"),u("br"),u("span",{class:"line-number"},"21"),u("br")])],-1),f=u("h3",{id:"动画时长",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#动画时长","aria-hidden":"true"},"#"),o(" 动画时长")],-1),v=u("p",null,[o("通过设置 "),u("code",null,"duration"),o(" 属性修改动画时长，单位 "),u("code",null,"ms"),o("。")],-1),w=u("div",{class:"language-vue ext-vue line-numbers-mode"},[u("pre",{class:"language-vue"},[u("code",null,[u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("star-transition")]),o(),u("span",{class:"token attr-name"},"name"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("fade"),u("span",{class:"token punctuation"},'"')]),o(),u("span",{class:"token attr-name"},":duration"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("500"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),o("\n  "),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"<"),o("div")]),o(),u("span",{class:"token attr-name"},"class"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("block"),u("span",{class:"token punctuation"},'"')]),o(),u("span",{class:"token attr-name"},"v-show"),u("span",{class:"token attr-value"},[u("span",{class:"token punctuation attr-equals"},"="),u("span",{class:"token punctuation"},'"'),o("show"),u("span",{class:"token punctuation"},'"')]),u("span",{class:"token punctuation"},">")]),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("div")]),u("span",{class:"token punctuation"},">")]),o("\n"),u("span",{class:"token tag"},[u("span",{class:"token tag"},[u("span",{class:"token punctuation"},"</"),o("star-transition")]),u("span",{class:"token punctuation"},">")]),o("\n")])]),u("div",{class:"line-numbers"},[u("span",{class:"line-number"},"1"),u("br"),u("span",{class:"line-number"},"2"),u("br"),u("span",{class:"line-number"},"3"),u("br")])],-1),x=u("h2",{id:"api",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),o(" API")],-1),y=u("h3",{id:"props",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),o(" Props")],-1),q=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"参数"),u("th",null,"说明"),u("th",null,"类型"),u("th",null,"可选值"),u("th",null,"默认值")])]),u("tbody",null,[u("tr",null,[u("td",null,"model-value / v-model"),u("td",null,"动画显示/隐藏"),u("td",null,"Boolean"),u("td"),u("td",null,"false")]),u("tr",null,[u("td",null,"name"),u("td",null,"动画类型"),u("td",null,"String"),u("td"),u("td",null,"fade")]),u("tr",null,[u("td",null,"duration"),u("td",null,"动画时长"),u("td",null,"String、Number"),u("td"),u("td",null,"500")])])],-1),_=u("h2",{id:"动画列表",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#动画列表","aria-hidden":"true"},"#"),o(" 动画列表")],-1),z=u("h3",{id:"back",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#back","aria-hidden":"true"},"#"),o(" Back")],-1),A=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"back-down"),u("td",null,"从下方退出")]),u("tr",null,[u("td",null,"back-up"),u("td",null,"从上方退出")]),u("tr",null,[u("td",null,"back-left"),u("td",null,"从左侧退出")]),u("tr",null,[u("td",null,"back-right"),u("td",null,"从右侧退出")])])],-1),j=u("h3",{id:"fading",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#fading","aria-hidden":"true"},"#"),o(" Fading")],-1),S=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"fade"),u("td",null,"淡入淡出")]),u("tr",null,[u("td",null,"fade-down"),u("td",null,"从下方淡入淡出")]),u("tr",null,[u("td",null,"fade-up"),u("td",null,"从上方淡入淡出")]),u("tr",null,[u("td",null,"fade-left"),u("td",null,"从左侧淡入淡出")]),u("tr",null,[u("td",null,"fade-right"),u("td",null,"从右侧淡入淡出")])])],-1),B=u("h3",{id:"sliding",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#sliding","aria-hidden":"true"},"#"),o(" Sliding")],-1),T=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"slide-down"),u("td",null,"从下方滑出")]),u("tr",null,[u("td",null,"slide-up"),u("td",null,"从上方滑出")]),u("tr",null,[u("td",null,"slide-left"),u("td",null,"从左侧滑出")]),u("tr",null,[u("td",null,"slide-right"),u("td",null,"从右侧滑出")])])],-1),C=u("h3",{id:"zooming",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#zooming","aria-hidden":"true"},"#"),o(" Zooming")],-1),F=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"zoom"),u("td",null,"变焦")]),u("tr",null,[u("td",null,"zoom-down"),u("td",null,"从下方变焦出")]),u("tr",null,[u("td",null,"zoom-up"),u("td",null,"从上方变焦出")]),u("tr",null,[u("td",null,"zoom-left"),u("td",null,"从左侧变焦出")]),u("tr",null,[u("td",null,"zoom-right"),u("td",null,"从右侧变焦出")])])],-1),P=u("h3",{id:"bouncing",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#bouncing","aria-hidden":"true"},"#"),o(" Bouncing")],-1),I=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"bounce"),u("td",null,"跳跃")]),u("tr",null,[u("td",null,"bounce-down"),u("td",null,"从下方跳出")]),u("tr",null,[u("td",null,"bounce-up"),u("td",null,"从上方跳出")]),u("tr",null,[u("td",null,"bounce-left"),u("td",null,"从左侧跳出")]),u("tr",null,[u("td",null,"bounce-right"),u("td",null,"从右侧跳出")])])],-1),N=u("h3",{id:"rotating",tabindex:"-1"},[u("a",{class:"header-anchor",href:"#rotating","aria-hidden":"true"},"#"),o(" Rotating")],-1),R=u("table",null,[u("thead",null,[u("tr",null,[u("th",null,"名称"),u("th",null,"说明")])]),u("tbody",null,[u("tr",null,[u("td",null,"rotate"),u("td",null,"旋转")]),u("tr",null,[u("td",null,"rotate-down-left"),u("td",null,"从左下方旋转出")]),u("tr",null,[u("td",null,"rotate-down-right"),u("td",null,"从右下方旋转出")]),u("tr",null,[u("td",null,"rotate-up-left"),u("td",null,"从左上方旋转出")]),u("tr",null,[u("td",null,"rotate-up-right"),u("td",null,"从右上方旋转出")])])],-1);c.render=function(u,o){const c=n("card");return a(),t(e,null,[p,s(c,null,{default:l((()=>[r,i])),_:1}),s(c,null,{default:l((()=>[d,k])),_:1}),h,s(c,null,{default:l((()=>[b,m,g,f,v,w])),_:1}),x,s(c,null,{default:l((()=>[y,q])),_:1}),_,s(c,null,{default:l((()=>[z,A])),_:1}),s(c,null,{default:l((()=>[j,S])),_:1}),s(c,null,{default:l((()=>[B,T])),_:1}),s(c,null,{default:l((()=>[C,F])),_:1}),s(c,null,{default:l((()=>[P,I])),_:1}),s(c,null,{default:l((()=>[N,R])),_:1})],64)};export{c as default};
