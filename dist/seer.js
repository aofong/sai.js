(function(e){function p(a){return(a=String(a).match(q))?a[0]:""}function g(a,h,d,e,k){if(!k&&arguments.callee.caller){for(var c=arguments.callee.caller,f=[],g=0;c.arguments&&c.arguments.callee&&c.arguments.callee.caller;){c=c.arguments.callee.caller;f.push("at "+p(c));if(c.caller===c)break;if(20<g++)break}k=f.join("\n")}c={profile:"jserror",msg:a||"",file:h||"",line:d||0,num:e||"",stack:k||"",lost:l.join(",")};f=h+":"+d+":"+a;m.hasOwnProperty(f)||(c.uv=1,m[f]=!0);b._DATAS.push(c);return c}if(!e.monitor){var b=
e.monitor={};b._DATAS=[];var l=[],n={};b.lost=function(a){n.hasOwnProperty(a)||(n[a]=!0,l.push(a))};var r=b._EVENTS=[];b.on=function(a,b){r.push([a,b])};b.off=function(){};b.log=function(a,h){if(a&&!(3<=arguments.length)){var d;"[object Object]"===Object.prototype.toString.call(a)?(d=a,d.profile=a.profile||"log"):d={profile:h||"log",seed:a};b._DATAS.push(d);return d}};var q=/^function\b[^\)]+\)/,m={};b.error=function(a){if(a instanceof Error)return g(a.message||a.description,a.fileName,a.lineNumber||
a.line,a.number,a.stack||a.stacktrace)};e.onerror=function(a,b,d){g(a,b,d);return!1}}})(this);
