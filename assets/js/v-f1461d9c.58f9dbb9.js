"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1012],{507872:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-f1461d9c","path":"/devices/IOMZB-110.html","title":"Develco IOMZB-110 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Develco IOMZB-110 control via MQTT","description":"Integrate your Develco IOMZB-110 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-11-01T16:06:49.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Input (binary, l1 endpoint)","slug":"input-binary-l1-endpoint","link":"#input-binary-l1-endpoint","children":[]},{"level":3,"title":"Input (binary, l2 endpoint)","slug":"input-binary-l2-endpoint","link":"#input-binary-l2-endpoint","children":[]},{"level":3,"title":"Input (binary, l3 endpoint)","slug":"input-binary-l3-endpoint","link":"#input-binary-l3-endpoint","children":[]},{"level":3,"title":"Input (binary, l4 endpoint)","slug":"input-binary-l4-endpoint","link":"#input-binary-l4-endpoint","children":[]},{"level":3,"title":"Switch (l11 endpoint)","slug":"switch-l11-endpoint","link":"#switch-l11-endpoint","children":[]},{"level":3,"title":"Switch (l12 endpoint)","slug":"switch-l12-endpoint","link":"#switch-l12-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1699039368000},"filePathRelative":"devices/IOMZB-110.md"}')},526387:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var i=o(166252);const n=(0,i._)("h1",{id:"develco-iomzb-110",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#develco-iomzb-110","aria-hidden":"true"},"#"),(0,i.Uk)(" Develco IOMZB-110")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"IOMZB-110")],-1),a=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"IO module")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"input, switch (state), linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/IOMZB-110.jpg",alt:"Develco IOMZB-110"})])],-1),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="input-binary-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l1-endpoint" aria-hidden="true">#</a> Input (binary, l1 endpoint)</h3><p>State of input 1. Value can be found in the published state on the <code>input_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l2-endpoint" aria-hidden="true">#</a> Input (binary, l2 endpoint)</h3><p>State of input 2. Value can be found in the published state on the <code>input_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l3-endpoint" aria-hidden="true">#</a> Input (binary, l3 endpoint)</h3><p>State of input 3. Value can be found in the published state on the <code>input_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l3&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="input-binary-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#input-binary-l4-endpoint" aria-hidden="true">#</a> Input (binary, l4 endpoint)</h3><p>State of input 4. Value can be found in the published state on the <code>input_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_l4&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> input is ON, if <code>false</code> OFF.</p><h3 id="switch-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l11-endpoint" aria-hidden="true">#</a> Switch (l11 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l11</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l11&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l11&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l11&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l11&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l12-endpoint" aria-hidden="true">#</a> Switch (l12 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l12</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l12&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l12&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l12&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l12&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),h={},b=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[d,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Develco"},{default:(0,i.w5)((()=>[(0,i.Uk)("Develco")])),_:1})])]),u,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);