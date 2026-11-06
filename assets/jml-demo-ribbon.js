(function(){
'use strict';
if(document.getElementById('jmlDemoRibbon'))return;
const style=document.createElement('style');
style.textContent=`
#jmlDemoRibbon{position:fixed;inset:0 0 auto;z-index:100000;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:8px 16px;padding:8px 40px 8px 16px;background:#4c0099;color:#fff;text-align:center;font:13px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.02em}
#jmlDemoRibbon .jml-by{display:inline-flex;align-items:center;gap:9px;white-space:nowrap;font-weight:700}
#jmlDemoRibbon .jml-mark{height:24px;width:17px;display:block;fill:#fff}
#jmlDemoRibbon .jml-note{font-weight:400;color:#fff}
#jmlDemoRibbon b{color:#b1eb1e;font-weight:700}
#jmlDemoRibbon .jml-sep{opacity:.45}
#jmlDemoRibbon button{position:absolute;right:6px;top:50%;transform:translateY(-50%);border:0;border-radius:50%;background:transparent;color:#fff;font:20px/1 Arial;cursor:pointer;width:30px;height:30px;padding:0}
#jmlDemoRibbon button:focus-visible{outline:2px solid #b1eb1e;outline-offset:1px}
body.jml-demo-ribbon{padding-top:calc(var(--jml-original-padding,0px) + var(--jml-ribbon-height,40px))!important}
[data-jml-offset]{top:calc(var(--jml-original-top,0px) + var(--jml-ribbon-height,40px))!important}
@media(max-width:600px){#jmlDemoRibbon{font-size:11px;gap:2px;padding:6px 36px 6px 10px}#jmlDemoRibbon .jml-by{width:100%;justify-content:center}#jmlDemoRibbon .jml-sep{display:none}#jmlDemoRibbon .jml-mark{height:19px;width:14px}}
@media print{#jmlDemoRibbon{display:none}body.jml-demo-ribbon{padding-top:0!important}[data-jml-offset]{top:0!important}}
`;
document.head.append(style);
const ribbon=document.createElement('div');ribbon.id='jmlDemoRibbon';ribbon.setAttribute('role','note');
ribbon.innerHTML="<span class=\"jml-by\"><svg class=\"jml-mark\" viewBox=\"16 38 124 180\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#fff\" aria-hidden=\"true\"><path d=\"M128.35,161.75v-64.39l-6.46-6.46c-1.23,5.82-6.4,10.18-12.58,10.18-4.67,0-8.75-2.49-11.01-6.22v66.6c0,4.01-.91,7.99-2.87,11.5-2.78,4.96-8.19,10.26-18.59,10.26-11.63,0-16.74-7.19-18.96-13.03-1.19-3.1-1.7-6.41-1.7-9.73v-9.43h-28.91c0,14.21-.61,61.17,50.91,61.17s50.18-50.45,50.18-50.45ZM118.39,183.49c-.15.56-.81.8-1.28.46-.08-.05-.14-.12-.21-.18-1.14-1.13-2.27-2.27-3.41-3.41-.06-.06-.1-.12-.15-.2-1.77,1.31-3.7,1.75-5.79,1.23-1.63-.4-2.92-1.33-3.88-2.7-1.88-2.69-1.49-6.39.93-8.68,2.42-2.29,6.13-2.46,8.78-.36,1.43,1.13,2.25,2.63,2.48,4.44.22,1.81-.27,3.45-1.39,4.94.07.05.14.08.2.14,1.15,1.14,2.29,2.29,3.43,3.43.26.25.39.54.3.9Z\"/><path d=\"M109.22,169.83c-2.81-.03-5.12,2.32-5.06,5.04-.05,2.65,2.16,5.03,4.99,5.04,2.82.01,5.1-2.25,5.1-5.04s-2.26-5.02-5.02-5.04ZM109.19,172.34c-1.42.03-2.51,1.11-2.54,2.5,0,.5-.36.87-.84.86-.47,0-.82-.38-.82-.87v-.08c.01-1.9,1.51-3.68,3.39-4,.27-.05.54-.07.81-.08.46,0,.83.39.83.84-.01.46-.37.81-.83.82Z\"/><path d=\"M53.46,130.29c-1.08-.73-2.23-1.36-3.43-1.86-2.49-1.05-5.14-1.59-7.86-1.59s-5.37.53-7.86,1.59c-1.2.51-2.35,1.13-3.43,1.86-.29.19-.57.39-.84.6-.68.51-.78,1.49-.21,2.12h0c.5.57,1.35.65,1.96.19,1.13-.85,2.35-1.55,3.66-2.11,2.13-.9,4.4-1.36,6.73-1.36s4.6.46,6.73,1.36c1.31.55,2.53,1.26,3.65,2.1.6.45,1.46.37,1.96-.19h0c.56-.63.47-1.61-.21-2.12-.27-.21-.55-.4-.83-.59Z\"/><path d=\"M47.79,133.72c-1.78-.75-3.68-1.14-5.63-1.14s-3.84.38-5.63,1.14c-.93.39-1.81.88-2.64,1.46-.71.5-.83,1.5-.25,2.15h0c.49.55,1.31.65,1.91.23.66-.46,1.36-.85,2.1-1.16,1.42-.6,2.94-.91,4.5-.91s3.07.31,4.5.91c.74.31,1.44.7,2.1,1.16.6.42,1.42.32,1.91-.23h0c.58-.65.46-1.66-.25-2.15-.82-.57-1.7-1.06-2.63-1.45Z\"/><path d=\"M45.55,139.02c-1.07-.45-2.21-.68-3.39-.68s-2.31.23-3.39.68c-.31.13-.6.28-.89.44-.8.45-.98,1.54-.36,2.22h0c.45.51,1.2.64,1.79.3.86-.49,1.84-.75,2.85-.75s1.99.26,2.84.74c.59.33,1.34.2,1.79-.3h0c.61-.69.44-1.77-.37-2.22-.28-.16-.58-.3-.88-.43Z\"/><circle cx=\"42.16\" cy=\"145.3\" r=\"1.75\"/><path d=\"M93.1,68.99l15.24.92-7.34,15.35c-.93,1.96-.1,4.32,1.85,5.25,1.96.94,4.32.1,5.25-1.85l7.5-15.69,12.75,12.88-.02-30.12h0s0-.62,0-.62v-1.44s0-4.24,0-4.24v-4.11s0-6.86,0-6.86l-3.91,3.17-1.1.89-.3.24-1.12.91-2.07,1.68-1.12.91-2.18,1.76-1.12.91-.77.63-23.78,19.33s1.43.06,2.24.11Z\"/></svg>Designed by Jay Marketing Lab</span><span class=\"jml-sep\">\u00b7</span><span class=\"jml-note\">Client demo build \u2014 <b>sample data, not real</b></span><button type=\"button\" aria-label=\"Dismiss demo banner\">\u00d7</button>";
const body=document.body;body.style.setProperty('--jml-original-padding',getComputedStyle(body).paddingTop);body.classList.add('jml-demo-ribbon');body.prepend(ribbon);
const shifted=[];
document.querySelectorAll('header,nav,.nav,.hdr,.header').forEach(el=>{const c=getComputedStyle(el);if((c.position==='fixed'||c.position==='sticky') && parseFloat(c.top)>=0 && parseFloat(c.top)<30){el.style.setProperty('--jml-original-top',c.top);el.setAttribute('data-jml-offset','');shifted.push(el)}});
function size(){document.documentElement.style.setProperty('--jml-ribbon-height',ribbon.getBoundingClientRect().height+'px')}
size();const observer=new ResizeObserver(size);observer.observe(ribbon);
ribbon.querySelector('button').onclick=()=>{observer.disconnect();ribbon.remove();body.classList.remove('jml-demo-ribbon');shifted.forEach(el=>el.removeAttribute('data-jml-offset'));document.documentElement.style.setProperty('--jml-ribbon-height','0px')};
})();