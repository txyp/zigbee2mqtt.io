"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92328],{557214:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-cca3b412","path":"/devices/RTCGQ01LM.html","title":"Xiaomi RTCGQ01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi RTCGQ01LM control via MQTT","description":"Integrate your Xiaomi RTCGQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]},{"level":3,"title":"Note about occupancy_timeout option","slug":"note-about-occupancy-timeout-option","link":"#note-about-occupancy-timeout-option","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1699039368000},"filePathRelative":"devices/RTCGQ01LM.md"}')},877604:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T});var i=o(166252);const n=(0,i._)("h1",{id:"xiaomi-rtcgq01lm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#xiaomi-rtcgq01lm","aria-hidden":"true"},"#"),(0,i.Uk)(" Xiaomi RTCGQ01LM")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"RTCGQ01LM")],-1),c=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"MiJia human body movement sensor")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, occupancy, voltage, power_outage_count, linkquality")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCGQ01LM.jpg",alt:"Xiaomi RTCGQ01LM"})])],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"White-label"),(0,i._)("td",null,"Xiaomi YTC4041GL, Xiaomi YTC4004CN, Xiaomi YTC4016CN, Xiaomi ZHTZ02LM")],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2450 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul>',8),p={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("h3",{id:"note-about-occupancy-timeout-option",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#note-about-occupancy-timeout-option","aria-hidden":"true"},"#"),(0,i.Uk)(" Note about "),(0,i._)("code",null,"occupancy_timeout"),(0,i.Uk)(" option")],-1),g=(0,i._)("code",null,"occupancy_timeout",-1),b=(0,i._)("code",null,"occupancy: true",-1),y=(0,i._)("code",null,"occupancy: true",-1),f={href:"https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973",target:"_blank",rel:"noopener noreferrer"},v={href:"https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806",target:"_blank",rel:"noopener noreferrer"},k=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),w=(0,i.uE)('<ul><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message the last time occupancy (occupancy: true) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),_={},T=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,i.up)("RouterLink"),_=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[a,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Xiaomi"},{default:(0,i.w5)((()=>[(0,i.Uk)("Xiaomi")])),_:1})])]),r,l,d,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i._)("p",null,[(0,i.Uk)("More detailed information about this can be found "),(0,i._)("a",p,[(0,i.Uk)("here"),(0,i.Wm)(_)]),(0,i.Uk)(".")]),m,(0,i._)("p",null,[g,(0,i.Uk)(" should not be set to lower than 60 seconds. The reason is this: after detecting a motion the sensor ignores any movements for exactly 60 seconds. In case there are movements after this 60 seconds, a new message ("),b,(0,i.Uk)(") will be sent and the sensor will go to sleep for another minute, and so on. Therefore, in order to sustain "),y,(0,i.Uk)(", you need a reasonable window after this 60s sleep to determine continued occupancy. This is expected behaviour (see "),(0,i._)("a",f,[(0,i.Uk)("#270"),(0,i.Wm)(_)]),(0,i.Uk)("). To work around this, a "),(0,i._)("a",v,[(0,i.Uk)("hardware modification"),(0,i.Wm)(_)]),(0,i.Uk)(" is needed.")]),(0,i.kq)(" Notes END: Do not edit below this line "),k,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),w])}]])}}]);