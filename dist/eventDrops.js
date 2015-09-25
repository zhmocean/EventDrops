!function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="http://localhost:8080",e(0)}([function(t,e,n){t.exports=n(3)},function(t,e){"use strict";t.exports=function(t,e,n){n=n||{};for(var a in e)!function(a){t[a]=function(r){return arguments.length?(e[a]=r,n.hasOwnProperty(a)&&n[a](r),t):e[a]}}(a)}},function(t,e,n){"use strict";var a=n(1),r={xScale:null,dateFormat:null};t.exports=function(t){return function(e){function n(n){n.each(function(n){t.select(this).selectAll("text").remove();var a=e.xScale.domain();t.select(this).append("text").text(function(){return e.dateFormat(a[0])}).classed("start",!0),t.select(this).append("text").text(function(){return e.dateFormat(a[1])}).attr("text-anchor","end").attr("transform","translate("+e.xScale.range()[1]+")").classed("end",!0)})}e=e||{};for(var o in r)e[o]=e[o]||r[o];return a(n,e),n}}},function(t,e,n){"use strict";var a=n(1),r=n(6);t.exports=function(t){var e=n(4)(t),o=n(2)(t),l={start:new Date(0),end:new Date,minScale:0,maxScale:1/0,width:1e3,margin:{top:60,left:200,bottom:40,right:50},locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%a %d",function(t){return t.getDay()&&1!=t.getDate()}],["%b %d",function(t){return 1!=t.getDate()}],["%B",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,eventZoom:null,eventClick:null,hasDelimiter:!0,hasTopAxis:!0,hasBottomAxis:function(t){return t.length>=10},eventLineColor:"black",eventColor:null};return function(n){function i(a){a.each(function(a){function l(){t.event.sourceEvent&&"[object MouseEvent]"===t.event.sourceEvent.toString()&&f.translate([t.event.translate[0],0]),t.event.sourceEvent&&"[object WheelEvent]"===t.event.sourceEvent.toString()&&f.scale(t.event.scale),m()}function i(){D.call(o({xScale:c,dateFormat:n.locale?n.locale.timeFormat("%d %B %Y"):t.time.format("%d %B %Y")}))}function u(){n.eventZoom&&n.eventZoom(c),n.hasDelimiter&&i(c)}function m(){var t="function"==typeof n.hasTopAxis?n.hasTopAxis(a):n.hasTopAxis;t&&p.drawXAxis();var r="function"==typeof n.hasBottomAxis?n.hasBottomAxis(a):n.hasBottomAxis;r&&v.drawXAxis(),M.call(e({xScale:c,eventColor:n.eventColor}))}var f=t.behavior.zoom().center(null).scaleExtent([n.minScale,n.maxScale]).on("zoom",l);f.on("zoomend",u);var p,v,d=n.width-n.margin.right-n.margin.left,x=40*a.length,h=x+n.margin.top+n.margin.bottom;t.select(this).select("svg").remove();var g=t.select(this).append("svg").attr("width",n.width).attr("height",h),y=g.append("defs"),A=y.append("filter").attr("id","metaball");A.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",10).attr("result","blur"),A.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 80 -7").attr("result","contrast"),A.append("feBlend").attr("in","SourceGraphic").attr("in2","contrast");var S=g.append("g").attr("transform","translate(0, 25)"),b=[],F=[];a.forEach(function(t,e){b.push(t.name),F.push(40*e)}),s.domain(b).range(F);var w=S.append("g").classed("y-axis",!0).attr("transform","translate(0, 60)"),B=w.append("g").selectAll("g").data(b);B.enter().append("g").attr("transform",function(t){return"translate(0, "+s(t)+")"}).append("line").classed("y-tick",!0).attr("x1",n.margin.left).attr("x2",n.margin.left+d),B.exit().remove();var C,k,E=g.append("rect").call(f).classed("zoom",!0).attr("width",d).attr("height",h).attr("transform","translate("+n.margin.left+", 35)");"function"==typeof n.eventHover&&E.on("mousemove",function(e,a){var r=t.event;if(C!=r.clientX||k!=r.clientY){C=r.clientX,k=r.clientY,E.attr("display","none");var o=document.elementFromPoint(t.event.clientX,t.event.clientY);E.attr("display","block"),"circle"===o.tagName&&n.eventHover(o)}}),"function"==typeof n.eventClick&&E.on("click",function(){E.attr("display","none");var e=document.elementFromPoint(t.event.clientX,t.event.clientY);E.attr("display","block"),"circle"===e.tagName&&n.eventClick(e)}),c.range([0,d]).domain([n.start,n.end]),f.x(c),g.select(".delimiter").remove();var D=g.append("g").classed("delimiter",!0).attr("width",d).attr("height",10).attr("transform","translate("+n.margin.left+", "+(n.margin.top-45)+")").call(o({xScale:c,dateFormat:n.locale?n.locale.timeFormat("%d %B %Y"):t.time.format("%d %B %Y")})),Y="function"==typeof n.hasTopAxis?n.hasTopAxis(a):n.hasTopAxis;Y&&(p=r(t,n,c,S,x,"top"));var T="function"==typeof n.hasBottomAxis?n.hasBottomAxis(a):n.hasBottomAxis;T&&(v=r(t,n,c,S,x,"bottom")),f.size([n.width,h]),S.select(".graph-body").remove();var X=S.append("g").classed("graph-body",!0).attr("transform","translate("+n.margin.left+", "+(n.margin.top-15)+")"),M=X.selectAll("g").data(a);M.enter().append("g").classed("line",!0).attr("transform",function(t){return"translate(0,"+s(t.name)+")"}).style("fill",n.eventLineColor).call(e({xScale:c,eventColor:n.eventColor})),M.exit().remove(),m(),n.hasDelimiter&&i(c),n.eventZoom&&n.eventZoom(c)})}var c=t.time.scale(),s=t.scale.ordinal();n=n||{};for(var u in l)n[u]=n[u]||l[u];return a(i,n),i}}},function(t,e,n){"use strict";var a=n(1),r=n(5),o={xScale:null};t.exports=function(t){return function(e){e=e||{xScale:null,eventColor:null};for(var n in o)e[n]=e[n]||o[n];var l=function(n){n.each(function(n){t.select(this).selectAll("text").remove(),t.select(this).append("text").text(function(t){var n=r(t.dates,e.xScale).length;return t.name+(n>0?" ("+n+")":"")}).attr("text-anchor","end").attr("transform","translate(-20)").style("fill","black"),t.select(this).selectAll("circle").remove();var a=t.select(this).append("g").style("filter","url(#metaball)");a.append("rect").attr("width","40px").attr("height","40px").attr("transform","translate(0,-25)").style("fill","none");var o=a.selectAll("circle").data(function(t){return r(t.dates,e.xScale)});o.enter().append("circle").attr("cx",function(t){return e.xScale(t)}).style("fill",e.eventColor).attr("cy",-5).attr("r",5),o.exit().remove()})};return a(l,e),l}}},function(t,e){"use strict";t.exports=function(t,e){t=t||[];var n=[],a=e.range(),r=a[0],o=a[1];return t.forEach(function(t){var a=e(t);r>a||a>o||n.push(t)}),n}},function(t,e){"use strict";t.exports=function(t,e,n,a,r,o){var l={},i={},c=[];e.tickFormat.forEach(function(t){var e=t.slice(0);c.push(e)});var s=e.locale?e.locale.timeFormat.multi(c):t.time.format.multi(c);l[o]=t.svg.axis().scale(n).orient(o).tickFormat(s),"function"==typeof e.axisFormat&&e.axisFormat(l);var u=("bottom"==o?parseInt(r):0)+e.margin.top-40;i[o]=a.append("g").classed("x-axis",!0).classed(o,!0).attr("transform","translate("+e.margin.left+", "+u+")").call(l[o]);var m=function(){i[o].call(l[o])};return{drawXAxis:m}}}]);
//# sourceMappingURL=eventDrops.js.map