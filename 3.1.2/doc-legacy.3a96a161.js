System.register(["./vendor-legacy.87645186.js"],(function(t){"use strict";var e,r,o;return{setters:[function(t){e=t.c,r=t.o,o=t.C}],execute:function(){const n={class:"markdown-body"},s=o('<h1>CricleProgress 进度条</h1><h3>介绍</h3><p>展示操作或任务的当前进度。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { CirecleProgress } from &#39;@nutui/nutui&#39;;\n//taro\nimport { CirecleProgress } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(CirecleProgress);\n\n</code></pre><h2>代码示例</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-circleprogress progress=&quot;10&quot;&gt;&lt;/nut-circleprogress&gt;\n</code></pre><h3>环形进度条自定义样式</h3><pre><code class="language-html">&lt;nut-circleprogress progress=&quot;50&quot; :progress-option=&quot;progressOption&quot;&gt;&lt;/nut-circleprogress&gt;\n</code></pre><h3>环形进度条自定义内容</h3><pre><code class="language-html"> &lt;nut-circleprogress progress=&quot;50&quot; :is-auto=&quot;true&quot;&gt;&lt;/nut-circleprogress&gt;\n</code></pre><h3>动态改变环形进度条的进度</h3><pre><code class="language-html">  &lt;nut-circleprogress :progress=&quot;percent&quot; :progress-option=&quot;progressOption&quot; :stroke-inner-width=&quot;strokeInnerWidth&quot;&gt; &lt;/nut-circleprogress&gt;\n  &lt;nut-button type=&quot;primary&quot;  @click=&quot;setReduceVal&quot; &gt;减少&lt;/nut-button&gt;\n  &lt;nut-button type=&quot;primary&quot;  @click=&quot;setAddVal&quot;&gt;增加&lt;/nut-button&gt;\n</code></pre><pre><code class="language-javascript"> setup() {\n    const progressOption = reactive({\n      radius: 50,\n      strokeOutWidth: 10,\n      backColor: &#39;#d9d9d9&#39;,\n      progressColor: &#39;red&#39;\n    });\n    const percent = ref(50);\n    const strokeInnerWidth = ref(10);\n    const isAuto = ref(true);\n    const setAddVal = () =&gt; {\n      strokeInnerWidth.value = 10;\n      if (percent.value &gt;= 100) {\n        return;\n      }\n      percent.value += 10;\n    };\n    const setReduceVal = () =&gt; {\n      if (percent.value - 10 &lt;= 0) {\n        strokeInnerWidth.value = 0;\n        percent.value = 0;\n        return;\n      }\n      percent.value -= 10;\n    };\n    return {\n      progressOption,\n      isAuto,\n      setAddVal,\n      setReduceVal,\n      percent\n    };\n  }\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>progress</td><td>百分比</td><td>Number,String</td><td>必传项，无默认值</td></tr><tr><td>stroke-inner-width</td><td>圆弧的宽度</td><td>Number,String</td><td>10</td></tr><tr><td>is-auto</td><td>是否自定义内容显示（taro暂不支持）</td><td>Boolean</td><td>false</td></tr><tr><td>progress-option</td><td>外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值</td><td>Object</td><td>{radius: 50,strokeOutWidth: 10, backColor: ‘#d9d9d9’,progressColor: ‘red’}</td></tr></tbody></table>',17);t("default",{setup:t=>(t,o)=>(r(),e("div",n,[s]))})}}}));
