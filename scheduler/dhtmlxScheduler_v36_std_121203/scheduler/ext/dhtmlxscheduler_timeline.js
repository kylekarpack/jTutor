/*
This software is allowed to use under GPL or you need to obtain Commercial or Enterise License
to use it in non-GPL project. Please contact sales@dhtmlx.com for details
*/
(function(){function G(){for(var a=scheduler.get_visible_events(),c=[],b=0;b<this.y_unit.length;b++)c[b]=[];c[d]||(c[d]=[]);for(b=0;b<a.length;b++){for(var d=this.order[a[b][this.y_property]],h=0;this._trace_x[h+1]&&a[b].start_date>=this._trace_x[h+1];)h++;for(;this._trace_x[h]&&a[b].end_date>this._trace_x[h];)c[d][h]||(c[d][h]=[]),c[d][h].push(a[b]),h++}return c}function C(a){for(var c=0,b=this._trace_x;c<b.length-1&&+a>=+b[c+1];)c++;return c}function v(a,c,b){var d=0,h=b._step,e=b.round_position,
i=0,g=c?a.end_date:a.start_date;if(g.valueOf()>scheduler._max_date.valueOf())g=scheduler._max_date;var k=g-scheduler._min_date_timeline;if(k>0){for(var n=C.call(b,g),m=0;m<n;m++)d+=scheduler._cols[m];var l=scheduler.date.add(scheduler._min_date_timeline,scheduler.matrix[scheduler._mode].x_step*n,scheduler.matrix[scheduler._mode].x_unit);e?+g>+l&&c&&(i=scheduler._cols[n]):(k=g-l,i=Math.round(k/h))}d+=c?k!=0?i-12:i-14:i+1;return d}function x(a,c){var b=C.call(this,a),d=this._trace_x[b];c&&+a!=+this._trace_x[b]&&
(d=this._trace_x[b+1]?this._trace_x[b+1]:scheduler.date.add(this._trace_x[b],this.x_step,this.x_unit));return new Date(d)}function H(a){var c="";if(a&&this.render!="cell"){a.sort(this.sort||function(a,b){return a.start_date.valueOf()==b.start_date.valueOf()?a.id>b.id?1:-1:a.start_date>b.start_date?1:-1});for(var b=[],d=a.length,h=0;h<d;h++){var e=a[h];e._inner=!1;for(var i=this.round_position?x.apply(this,[e.start_date,!1]):e.start_date,g=this.round_position?x.apply(this,[e.end_date,!0]):e.end_date;b.length;){var k=
b[b.length-1];if(k.end_date.valueOf()<=i.valueOf())b.splice(b.length-1,1);else break}for(var n=!1,m=0;m<b.length;m++){var l=b[m];if(l.end_date.valueOf()<=i.valueOf()){n=!0;e._sorder=l._sorder;b.splice(m,1);e._inner=!0;break}}if(b.length)b[b.length-1]._inner=!0;if(!n)if(b.length)if(b.length<=b[b.length-1]._sorder){if(b[b.length-1]._sorder)for(var f=0;f<b.length;f++){for(var o=!1,p=0;p<b.length;p++)if(b[p]._sorder==f){o=!0;break}if(!o){e._sorder=f;break}}else e._sorder=0;e._inner=!0}else{for(var o=
b[0]._sorder,j=1;j<b.length;j++)if(b[j]._sorder>o)o=b[j]._sorder;e._sorder=o+1;e._inner=!1}else e._sorder=0;b.push(e);b.length>(b.max_count||0)?(b.max_count=b.length,e._count=b.length):e._count=e._count?e._count:1}for(var q=0;q<a.length;q++)a[q]._count=b.max_count;for(var r=0;r<d;r++)c+=scheduler.render_timeline_event.call(this,a[r],!1)}return c}function I(a){var c="<table style='table-layout:fixed;' cellspacing='0' cellpadding='0'>",b=[];scheduler._load_mode&&scheduler._load();if(this.render=="cell")b=
G.call(this);else for(var d=scheduler.get_visible_events(),h=this.order,e=0;e<d.length;e++){var i=d[e],g=i[this.y_property],k=this.order[g];if(this.show_unassigned&&!g)for(var n in h){if(h.hasOwnProperty(n)){k=h[n];b[k]||(b[k]=[]);var m=scheduler._lame_copy({},i);m[this.y_property]=n;b[k].push(m)}}else b[k]||(b[k]=[]),b[k].push(i)}for(var l=0,f=0;f<scheduler._cols.length;f++)l+=scheduler._cols[f];var o=new Date;this._step=o=(scheduler.date.add(o,this.x_step*this.x_size,this.x_unit)-o)/l;this._summ=
l;var p=scheduler._colsS.heights=[];this._events_height={};this._section_height={};for(f=0;f<this.y_unit.length;f++){var j=this._logic(this.render,this.y_unit[f],this);scheduler._merge(j,{height:this.dy});if(this.section_autoheight){if(this.y_unit.length*j.height<a.offsetHeight)j.height=Math.max(j.height,Math.floor((a.offsetHeight-1)/this.y_unit.length));this._section_height[this.y_unit[f].key]=j.height}scheduler._merge(j,{tr_className:"",style_height:"height:"+j.height+"px;",style_width:"width:"+
(this.dx-1)+"px;",td_className:"dhx_matrix_scell"+(scheduler.templates[this.name+"_scaley_class"](this.y_unit[f].key,this.y_unit[f].label,this.y_unit[f])?" "+scheduler.templates[this.name+"_scaley_class"](this.y_unit[f].key,this.y_unit[f].label,this.y_unit[f]):""),td_content:scheduler.templates[this.name+"_scale_label"](this.y_unit[f].key,this.y_unit[f].label,this.y_unit[f]),summ_width:"width:"+l+"px;",table_className:""});var q=H.call(this,b[f]);if(this.fit_events){var r=this._events_height[this.y_unit[f].key]||
0;j.height=r>j.height?r:j.height;j.style_height="height:"+j.height+"px;";this._section_height[this.y_unit[f].key]=j.height}c+="<tr class='"+j.tr_className+"' style='"+j.style_height+"'><td class='"+j.td_className+"' style='"+j.style_width+" height:"+(j.height-1)+"px;'>"+j.td_content+"</td>";if(this.render=="cell")for(e=0;e<scheduler._cols.length;e++)c+="<td class='dhx_matrix_cell "+scheduler.templates[this.name+"_cell_class"](b[f][e],this._trace_x[e],this.y_unit[f])+"' style='width:"+(scheduler._cols[e]-
1)+"px'><div style='width:"+(scheduler._cols[e]-1)+"px'>"+scheduler.templates[this.name+"_cell_value"](b[f][e])+"</div></td>";else{c+="<td><div style='"+j.summ_width+" "+j.style_height+" position:relative;' class='dhx_matrix_line'>";c+=q;c+="<table class='"+j.table_className+"' cellpadding='0' cellspacing='0' style='"+j.summ_width+" "+j.style_height+"' >";for(e=0;e<scheduler._cols.length;e++)c+="<td class='dhx_matrix_cell "+scheduler.templates[this.name+"_cell_class"](b[f],this._trace_x[e],this.y_unit[f])+
"' style='width:"+(scheduler._cols[e]-1)+"px'><div style='width:"+(scheduler._cols[e]-1)+"px'></div></td>";c+="</table>";c+="</div></td>"}c+="</tr>"}c+="</table>";this._matrix=b;a.innerHTML=c;scheduler._rendered=[];for(var s=scheduler._obj.getElementsByTagName("DIV"),f=0;f<s.length;f++)s[f].getAttribute("event_id")&&scheduler._rendered.push(s[f]);this._scales={};for(f=0;f<a.firstChild.rows.length;f++){p.push(a.firstChild.rows[f].offsetHeight);var t=this.y_unit[f].key,y=this._scales[t]=scheduler._isRender("cell")?
a.firstChild.rows[f]:a.firstChild.rows[f].childNodes[1].getElementsByTagName("div")[0];scheduler.callEvent("onScaleAdd",[y,t])}}function J(a){var c=scheduler.xy.scale_height,b=this._header_resized||scheduler.xy.scale_height;scheduler._cols=[];scheduler._colsS={height:0};this._trace_x=[];var d=scheduler._x-this.dx-18,h=[this.dx],e=scheduler._els.dhx_cal_header[0];e.style.width=h[0]+d+"px";for(var i=scheduler._min_date_timeline=scheduler._min_date,g=0;g<this.x_size;g++)this._trace_x[g]=new Date(i),
i=scheduler.date.add(i,this.x_step,this.x_unit),scheduler._cols[g]=Math.floor(d/(this.x_size-g)),d-=scheduler._cols[g],h[g+1]=h[g]+scheduler._cols[g];a.innerHTML="<div></div>";if(this.second_scale){for(var k=this.second_scale.x_unit,n=[this._trace_x[0]],m=[],l=[this.dx,this.dx],f=0,o=0;o<this._trace_x.length;o++){var p=this._trace_x[o],j=D(k,p,n[f]);j&&(++f,n[f]=p,l[f+1]=l[f]);var q=f+1;m[f]=scheduler._cols[o]+(m[f]||0);l[q]+=scheduler._cols[o]}a.innerHTML="<div></div><div></div>";var r=a.firstChild;
r.style.height=b+"px";var s=a.lastChild;s.style.position="relative";for(var t=0;t<n.length;t++){var y=n[t],z=scheduler.templates[this.name+"_second_scalex_class"](y),w=document.createElement("DIV");w.className="dhx_scale_bar dhx_second_scale_bar"+(z?" "+z:"");scheduler.set_xy(w,m[t]-1,b-3,l[t],0);w.innerHTML=scheduler.templates[this.name+"_second_scale_date"](y);r.appendChild(w)}}scheduler.xy.scale_height=b;for(var a=a.lastChild,u=0;u<this._trace_x.length;u++){i=this._trace_x[u];scheduler._render_x_header(u,
h[u],i,a);var A=scheduler.templates[this.name+"_scalex_class"](i);A&&(a.lastChild.className+=" "+A)}scheduler.xy.scale_height=c;var v=this._trace_x;a.onclick=function(a){var b=E(a);b&&scheduler.callEvent("onXScaleClick",[b.x,v[b.x],a||event])};a.ondblclick=function(a){var b=E(a);b&&scheduler.callEvent("onXScaleDblClick",[b.x,v[b.x],a||event])}}function D(a,c,b){switch(a){case "hour":return c.getHours()!=b.getHours()||D("day",c,b);case "day":return!(c.getDate()==b.getDate()&&c.getMonth()==b.getMonth()&&
c.getFullYear()==b.getFullYear());case "week":return!(scheduler.date.getISOWeek(c)==scheduler.date.getISOWeek(b)&&c.getFullYear()==b.getFullYear());case "month":return!(c.getMonth()==b.getMonth()&&c.getFullYear()==b.getFullYear());case "year":return c.getFullYear()!=b.getFullYear();default:return!1}}function K(a){if(a){scheduler.set_sizes();F();var c=scheduler._min_date;J.call(this,scheduler._els.dhx_cal_header[0]);I.call(this,scheduler._els.dhx_cal_data[0]);scheduler._min_date=c;scheduler._els.dhx_cal_date[0].innerHTML=
scheduler.templates[this.name+"_date"](scheduler._min_date,scheduler._max_date);scheduler.markNow&&scheduler.markNow()}B()}function B(){if(scheduler._tooltip)scheduler._tooltip.style.display="none",scheduler._tooltip.date=""}function L(a,c,b){if(a.render=="cell"){var d=c.x+"_"+c.y,h=a._matrix[c.y][c.x];if(!h)return B();h.sort(function(a,b){return a.start_date>b.start_date?1:-1});if(scheduler._tooltip){if(scheduler._tooltip.date==d)return;scheduler._tooltip.innerHTML=""}else{var e=scheduler._tooltip=
document.createElement("DIV");e.className="dhx_tooltip";document.body.appendChild(e);e.onclick=scheduler._click.dhx_cal_data}for(var i="",g=0;g<h.length;g++){var k=h[g].color?"background-color:"+h[g].color+";":"",n=h[g].textColor?"color:"+h[g].textColor+";":"";i+="<div class='dhx_tooltip_line' event_id='"+h[g].id+"' style='"+k+""+n+"'>";i+="<div class='dhx_tooltip_date'>"+(h[g]._timed?scheduler.templates.event_date(h[g].start_date):"")+"</div>";i+="<div class='dhx_event_icon icon_details'>&nbsp;</div>";
i+=scheduler.templates[a.name+"_tooltip"](h[g].start_date,h[g].end_date,h[g])+"</div>"}scheduler._tooltip.style.display="";scheduler._tooltip.style.top="0px";scheduler._tooltip.style.left=document.body.offsetWidth-b.left-scheduler._tooltip.offsetWidth<0?b.left-scheduler._tooltip.offsetWidth+"px":b.left+c.src.offsetWidth+"px";scheduler._tooltip.date=d;scheduler._tooltip.innerHTML=i;scheduler._tooltip.style.top=document.body.offsetHeight-b.top-scheduler._tooltip.offsetHeight<0?b.top-scheduler._tooltip.offsetHeight+
c.src.offsetHeight+"px":b.top+"px"}}function F(){dhtmlxEvent(scheduler._els.dhx_cal_data[0],"mouseover",function(a){var c=scheduler.matrix[scheduler._mode];if(c&&c.render=="cell"){if(c){var b=scheduler._locate_cell_timeline(a),a=a||event,d=a.target||a.srcElement;if(b)return L(c,b,getOffset(b.src))}B()}});F=function(){}}function M(a){for(var c=a.parentNode.childNodes,b=0;b<c.length;b++)if(c[b]==a)return b;return-1}function E(a){for(var a=a||event,c=a.target?a.target:a.srcElement;c&&c.tagName!="DIV";)c=
c.parentNode;if(c&&c.tagName=="DIV"){var b=c.className.split(" ")[0];if(b=="dhx_scale_bar")return{x:M(c),y:-1,src:c,scale:!0}}}scheduler.matrix={};scheduler._merge=function(a,c){for(var b in c)typeof a[b]=="undefined"&&(a[b]=c[b])};scheduler.createTimelineView=function(a){scheduler._merge(a,{section_autoheight:!0,name:"matrix",x:"time",y:"time",x_step:1,x_unit:"hour",y_unit:"day",y_step:1,x_start:0,x_size:24,y_start:0,y_size:7,render:"cell",dx:200,dy:50,event_dy:scheduler.xy.bar_height-5,event_min_dy:scheduler.xy.bar_height-
5,resize_events:!0,fit_events:!0,show_unassigned:!1,second_scale:!1,round_position:!1,_logic:function(a,b,c){var d={};scheduler.checkEvent("onBeforeViewRender")&&(d=scheduler.callEvent("onBeforeViewRender",[a,b,c]));return d}});a._original_x_start=a.x_start;scheduler.checkEvent("onTimelineCreated")&&scheduler.callEvent("onTimelineCreated",[a]);var c=scheduler.render_data;scheduler.render_data=function(b,e){if(this._mode==a.name)if(e&&!a.show_unassigned&&a.render!="cell")for(var d=0;d<b.length;d++)this.clear_event(b[d]),
this.render_timeline_event.call(this.matrix[this._mode],b[d],!0);else scheduler.renderMatrix.call(a,!0,!0);else return c.apply(this,arguments)};scheduler.matrix[a.name]=a;scheduler.templates[a.name+"_cell_value"]=function(a){return a?a.length:""};scheduler.templates[a.name+"_cell_class"]=function(){return""};scheduler.templates[a.name+"_scalex_class"]=function(){return""};scheduler.templates[a.name+"_second_scalex_class"]=function(){return""};scheduler.templates[a.name+"_scaley_class"]=function(){return""};
scheduler.templates[a.name+"_scale_label"]=function(a,b){return b};scheduler.templates[a.name+"_tooltip"]=function(a,b,c){return c.text};scheduler.templates[a.name+"_date"]=function(a,b){return a.getDay()==b.getDay()&&b-a<864E5||+a==+scheduler.date.date_part(new Date(b))?scheduler.templates.day_date(a):a.getDay()!=b.getDay()&&b-a<864E5?scheduler.templates.day_date(a)+" &ndash; "+scheduler.templates.day_date(b):scheduler.templates.week_date(a,b)};scheduler.templates[a.name+"_scale_date"]=scheduler.date.date_to_str(a.x_date||
scheduler.config.hour_date);scheduler.templates[a.name+"_second_scale_date"]=scheduler.date.date_to_str(a.second_scale&&a.second_scale.x_date?a.second_scale.x_date:scheduler.config.hour_date);scheduler.date["add_"+a.name]=function(b,c){var d=scheduler.date.add(b,(a.x_length||a.x_size)*c*a.x_step,a.x_unit);if((a.x_unit=="minute"||a.x_unit=="hour")&&!a.x_length)if(+scheduler.date.date_part(new Date(b))==+scheduler.date.date_part(new Date(d)))a.x_start+=c*a.x_size;else{var g=a.x_unit=="hour"?a.x_step*
60:a.x_step,k=1440/(a.x_size*g)-1;c>0?a.x_start-=k*a.x_size:a.x_start=k*a.x_size+a.x_start}return d};scheduler.attachEvent("onBeforeTodayDisplayed",function(){a.x_start=a._original_x_start;return!0});scheduler.date[a.name+"_start"]=function(b){var c=scheduler.date[a.x_unit+"_start"]||scheduler.date.day_start,d=c.call(scheduler.date,b);return d=scheduler.date.add(d,a.x_step*a.x_start,a.x_unit)};scheduler.attachEvent("onSchedulerResize",function(){return this._mode==a.name?(scheduler.renderMatrix.call(a,
!0,!0),!1):!0});scheduler.attachEvent("onOptionsLoad",function(){a.order={};scheduler.callEvent("onOptionsLoadStart",[]);for(var b=0;b<a.y_unit.length;b++)a.order[a.y_unit[b].key]=b;scheduler.callEvent("onOptionsLoadFinal",[]);scheduler._date&&a.name==scheduler._mode&&scheduler.setCurrentView(scheduler._date,scheduler._mode)});scheduler.callEvent("onOptionsLoad",[a]);scheduler[a.name+"_view"]=function(){scheduler.renderMatrix.apply(a,arguments)};var b=new Date,d=scheduler.date.add(b,a.x_step,a.x_unit).valueOf()-
b.valueOf();scheduler["mouse_"+a.name]=function(b){var c=this._drag_event;if(this._drag_id)c=this.getEvent(this._drag_id),this._drag_event._dhx_changed=!0;b.x-=a.dx;for(var d=0,g=0,k=0;g<=this._cols.length-1;g++){var n=this._cols[g];d+=n;if(d>b.x){var m=(b.x-(d-n))/n,m=m<0?0:m;break}}for(d=0;k<this._colsS.heights.length;k++)if(d+=this._colsS.heights[k],d>b.y)break;b.fields={};a.y_unit[k]||(k=a.y_unit.length-1);if(k>=0&&a.y_unit[k]&&(b.section=b.fields[a.y_property]=a.y_unit[k].key,c))c[a.y_property]=
b.section;b.x=0;b.force_redraw=!0;b.custom=!0;var l;if(g>=a._trace_x.length)l=scheduler.date.add(a._trace_x[a._trace_x.length-1],a.x_step,a.x_unit);else{var f=a._trace_x[g+1]?a._trace_x[g+1]:scheduler.date.add(a._trace_x[a._trace_x.length-1],a.x_step,a.x_unit),o=Math.ceil(m*(f-a._trace_x[g]));l=new Date(+a._trace_x[g]+o)}if(this._drag_mode=="move"&&this._drag_id&&this._drag_event){var c=this.getEvent(this._drag_id),p=this._drag_event;if(!p._move_delta)p._move_delta=(c.start_date-l)/6E4;l=scheduler.date.add(l,
p._move_delta,"minute")}if(this._drag_mode=="resize"&&c)b.resize_from_start=!!(Math.abs(c.start_date-l)<Math.abs(c.end_date-l));if(a.round_position)switch(this._drag_mode){case "move":l=x.call(a,l,!1);b.custom=!1;break;case "resize":if(this._drag_event._resize_from_start==null)this._drag_event._resize_from_start=b.resize_from_start;b.resize_from_start=this._drag_event._resize_from_start;l=x.call(a,l,!this._drag_event._resize_from_start)}b.y=Math.round((l-this._min_date)/(6E4*this.config.time_step));
b.shift=this.config.time_step;return b}};scheduler.render_timeline_event=function(a,c){var b=a[this.y_property];if(!b)return"";var d=a._sorder,h=v(a,!1,this),e=v(a,!0,this),i=this.event_dy;this.event_dy=="full"&&(i=this.section_autoheight?this._section_height[b]-6:this.dy-3);this.resize_events&&(i=Math.max(Math.floor(i/a._count),this.event_min_dy));var g=i-2;!a._inner&&this.event_dy=="full"&&(g=(g+2)*(a._count-d)-2);var k=2+d*i+(d?d*2:0);scheduler.config.cascade_event_display&&(k=2+d*scheduler.config.cascade_event_margin+
(d?d*2:0));var n=i+k+2;if(!this._events_height[b]||this._events_height[b]<n)this._events_height[b]=n;var m=scheduler.templates.event_class(a.start_date,a.end_date,a),m="dhx_cal_event_line "+(m||""),l=a.color?"background:"+a.color+";":"",f=a.textColor?"color:"+a.textColor+";":"",o=scheduler.templates.event_bar_text(a.start_date,a.end_date,a),p='<div event_id="'+a.id+'" class="'+m+'" style="'+l+""+f+"position:absolute; top:"+k+"px; height: "+g+"px; left:"+h+"px; width:"+Math.max(0,e-h)+"px;"+(a._text_style||
"")+'">';if(scheduler.config.drag_resize&&!scheduler.config.readonly){var j="dhx_event_resize";p+="<div class='"+j+" "+j+"_start' style='height: "+g+"px;'></div><div class='"+j+" "+j+"_end' style='height: "+g+"px;'></div>"}p+=o+"</div>";if(c){var q=document.createElement("DIV");q.innerHTML=p;var r=this.order[b],s=scheduler._els.dhx_cal_data[0].firstChild.rows[r].cells[1].firstChild;scheduler._rendered.push(q.firstChild);s.appendChild(q.firstChild)}else return p};scheduler.renderMatrix=function(a,
c){if(!c)scheduler._els.dhx_cal_data[0].scrollTop=0;scheduler._min_date=scheduler.date[this.name+"_start"](scheduler._date);scheduler._max_date=scheduler.date.add(scheduler._min_date,this.x_size*this.x_step,this.x_unit);scheduler._table_view=!0;if(this.second_scale){if(a&&!this._header_resized)this._header_resized=scheduler.xy.scale_height,scheduler.xy.scale_height*=2,scheduler._els.dhx_cal_header[0].className+=" dhx_second_cal_header";if(!a&&this._header_resized){scheduler.xy.scale_height/=2;this._header_resized=
!1;var b=scheduler._els.dhx_cal_header[0];b.className=b.className.replace(/ dhx_second_cal_header/gi,"")}}K.call(this,a)};scheduler._locate_cell_timeline=function(a){for(var a=a||event,c=a.target?a.target:a.srcElement,b={},d=scheduler.matrix[scheduler._mode],h=scheduler.getActionData(a),e=0;e<d._trace_x.length-1;e++)if(+h.date<d._trace_x[e+1])break;b.x=e;b.y=d.order[h.section];var i=scheduler._isRender("cell")?1:0;b.src=d._scales[h.section]?d._scales[h.section].getElementsByTagName("td")[e+i]:null;
if(c.className.split(" ")[0]=="dhx_matrix_scell")b.x=-1,b.src=c,b.scale=!0;return b};var N=scheduler._click.dhx_cal_data;scheduler._click.dhx_marked_timespan=scheduler._click.dhx_cal_data=function(a){var c=N.apply(this,arguments),b=scheduler.matrix[scheduler._mode];if(b){var d=scheduler._locate_cell_timeline(a);d&&(d.scale?scheduler.callEvent("onYScaleClick",[d.y,b.y_unit[d.y],a||event]):scheduler.callEvent("onCellClick",[d.x,d.y,b._trace_x[d.x],(b._matrix[d.y]||{})[d.x]||[],a||event]))}return c};
scheduler.dblclick_dhx_marked_timespan=scheduler.dblclick_dhx_matrix_cell=function(a){var c=scheduler.matrix[scheduler._mode];if(c){var b=scheduler._locate_cell_timeline(a);b&&(b.scale?scheduler.callEvent("onYScaleDblClick",[b.y,c.y_unit[b.y],a||event]):scheduler.callEvent("onCellDblClick",[b.x,b.y,c._trace_x[b.x],(c._matrix[b.y]||{})[b.x]||[],a||event]))}};scheduler.dblclick_dhx_matrix_scell=function(a){return scheduler.dblclick_dhx_matrix_cell(a)};scheduler._isRender=function(a){return scheduler.matrix[scheduler._mode]&&
scheduler.matrix[scheduler._mode].render==a};scheduler.attachEvent("onCellDblClick",function(a,c,b,d,h){if(!(this.config.readonly||h.type=="dblclick"&&!this.config.dblclick_create)){var e=scheduler.matrix[scheduler._mode],i={};i.start_date=e._trace_x[a];i.end_date=e._trace_x[a+1]?e._trace_x[a+1]:scheduler.date.add(e._trace_x[a],e.x_step,e.x_unit);i[e.y_property]=e.y_unit[c].key;scheduler.addEventNow(i,null,h)}});scheduler.attachEvent("onBeforeDrag",function(){return!scheduler._isRender("cell")});
scheduler.attachEvent("onEventChanged",function(a,c){c._timed=this.is_one_day_event(c)});var O=scheduler._render_marked_timespan;scheduler._render_marked_timespan=function(a,c,b){if(!scheduler.config.display_marked_timespans)return[];if(scheduler.matrix&&scheduler.matrix[scheduler._mode]){if(!scheduler._isRender("cell")){var d=scheduler.matrix[scheduler._mode],h=[],e=[],i=[];if(b)i=[c],e=[b];else{var g=d.order,k;for(k in g)g.hasOwnProperty(k)&&(e.push(k),i.push(d._scales[k]))}var n=scheduler._min_date,
m=scheduler._max_date,l=[];if(a.days>6){var f=new Date(a.days);scheduler.date.date_part(new Date(n))<=+f&&+m>=+f&&l.push(f)}else l.push.apply(l,scheduler._get_dates_by_index(a.days));for(var o=a.zones,p=scheduler._get_css_classes_by_config(a),j=0;j<e.length;j++)for(var c=i[j],b=e[j],q=0;q<l.length;q++)for(var r=l[q],s=0;s<o.length;s+=2){var t=o[s],y=o[s+1],z=new Date(+r+t*6E4),w=new Date(+r+y*6E4);if(scheduler._min_date<w&&scheduler._max_date>z){var u=scheduler._get_block_by_config(a);u.className=
p;var A=v({start_date:z},!1,d)-1,x=v({start_date:w},!1,d)-1,B=Math.max(1,x-A-1),C=d._section_height[b]-1;u.style.cssText="height: "+C+"px; left: "+A+"px; width: "+B+"px; top: 0;";c.insertBefore(u,c.firstChild);h.push(u)}}return h}}else return O.apply(scheduler,[a,c,b])};var P=scheduler._append_mark_now;scheduler._append_mark_now=function(a,c){if(scheduler.matrix&&scheduler.matrix[scheduler._mode]){var b=new Date,d=scheduler._get_zone_minutes(b),h={days:+scheduler.date.date_part(b),zones:[d,d+1],css:"dhx_matrix_now_time",
type:"dhx_now_time"};return scheduler._render_marked_timespan(h)}else return P.apply(scheduler,[a,c])};scheduler.attachEvent("onScaleAdd",function(a,c){var b=scheduler._marked_timespans;if(b&&scheduler.matrix&&scheduler.matrix[scheduler._mode])for(var d=scheduler._mode,h=scheduler._min_date,e=scheduler._max_date,i=b.global,g=scheduler.date.date_part(new Date(h));g<e;g=scheduler.date.add(g,1,"day")){var k=+g,n=g.getDay(),m=[],l=i[k]||i[n];m.push.apply(m,scheduler._get_configs_to_render(l));if(b[d]&&
b[d][c]){var f=scheduler._get_types_to_render(b[d][c][n],b[d][c][k]);m.push.apply(m,scheduler._get_configs_to_render(f))}for(var o=0;o<m.length;o++){var p=m[o],j=p.days;j<7?(j=k,scheduler._render_marked_timespan(p,a,c),j=n):scheduler._render_marked_timespan(p,a,c)}}})})();
