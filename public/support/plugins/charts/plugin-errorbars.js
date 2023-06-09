!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("chart.js")):"function"==typeof define&&define.amd?define(["chart.js"],a):(e=e||self).PluginErrorbars=a(e.Chart)}(this,function(e){"use strict";var a={color:void 0,width:10,lineWidth:2,absoluteValues:!1},t={id:"chartJsPluginErrorBars",_getBarchartBaseCoords:function(e){var a=[];return e.data.datasets.forEach(function(t,r){var o=e.getDatasetMeta(r).data,l=t.data;a.push(o.map(function(a,t){return{label:a._model.label?a._model.label:e.data.labels[t],value:l[t],x:a._model.x,y:a._model.y,color:a._model.borderColor}}))}),a},_isHorizontal:function(e){return"horizontalBar"===e.config.type},_computeWidth:function(e,a,t){var r=t;try{if("string"==typeof t)if(t.match(/px/))r=parseInt(t.replace(/px/,""),10);else{var o=Math.min(100,Math.abs(Number(t.replace(/%/,"")))),l=e.getDatasetMeta(0).data[0]._model;"line"===e.config.type?r=parseInt(l.controlPointPreviousX+l.controlPointNextX,10):a?r=parseInt(l.height,10):a||(r=parseInt(l.width,10)),r*=o/100}}catch(e){console.error(e)}finally{Number.isNaN(r)&&(r=t)}return r},_drawErrorBar:function(e,a,t,r,o,l,n,i){e.save(),e.lineWidth=l,e.strokeStyle=o,e.lineWidth=l,e.beginPath(),i?(e.moveTo(r,a.y-n/2),e.lineTo(r,a.y+n/2),e.moveTo(r,a.y),e.lineTo(t,a.y),e.moveTo(t,a.y-n/2),e.lineTo(t,a.y+n/2)):(e.moveTo(a.x-n/2,t),e.lineTo(a.x+n/2,t),e.moveTo(a.x,t),e.lineTo(a.x,r),e.moveTo(a.x-n/2,r),e.lineTo(a.x+n/2,r)),e.stroke(),e.restore()},afterDatasetsDraw:function(e,t,r){var o=this;if(e.__renderedOnce=e.__renderedOnce||1===t,e.__renderedOnce){r=Object.assign({},a,r);var l=e.data.datasets.map(function(e){return e.errorBars}),n=this._getBarchartBaseCoords(e);if(n&&n[0]&&n[0][0]&&l){var i=this._isHorizontal(e),s=i?e.scales["x-axis-0"]:e.scales["y-axis-0"],d=(Array.isArray(r.width)?r.width:[r.width]).map(function(a){return o._computeWidth(e,i,a)}),u=Array.isArray(r.lineWidth)?r.lineWidth:[r.lineWidth],c=Array.isArray(r.color)?r.color:[r.color],h=e.ctx;h.save(),n.forEach(function(a,t){if(null!=e.data.datasets[t]._meta&&e.data.datasets[t]._meta.length>0&&e.data.datasets[t]._meta[0].hidden)return;a.forEach(function(e){var a=l[t];if(a){var n=a.hasOwnProperty(e.label),f=null;if(n?f=a[e.label]:!n&&e.label&&e.label.label&&a.hasOwnProperty(e.label.label)&&(f=a[e.label.label]),f){var m=Array.isArray(f)?f:[f],y=s.getRightValue(e.value);m.forEach(function(a,t){var l=c[t%c.length]?c[t%c.length]:e.color,n=u[t%u.length],f=d[t%d.length],m=r.absoluteValues?a.plus:y+Math.abs(a.plus),p=r.absoluteValues?a.minus:y-Math.abs(a.minus),b=s.getPixelForValue(m),v=s.getPixelForValue(p);o._drawErrorBar(h,e,b,v,l,n,f,i)})}}})}),h.restore()}}}};return(e=e&&e.hasOwnProperty("default")?e.default:e).pluginService.register(t),t});