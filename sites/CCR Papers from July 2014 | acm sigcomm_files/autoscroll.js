/*The Autoscroll Bookmarket:Tim Harper:http://tim.theenchanter.com*/
var win=document.getElementById("firefoxreader_app_iframe").contentWindow;
var doc=document.getElementById("firefoxreader_app_iframe").contentDocument;
var _ss_interval_pointer;
_ss_speed=1;
_ss_speed_pairs=[[0,0],[1,200.0],[1,120.0],[1,72.0],[1,43.2],[1,25.9],[2,31.0],[4,37.2],[8,44.8],[8,26.4],[16,32.0]];
_ss_last_onkeypress = doc.onkeypress;
_ss_stop=function(){win.clearTimeout(_ss_interval_pointer)};
_ss_start=function(){
_ss_abs_speed=Math.abs(_ss_speed);
_ss_direction=_ss_speed/_ss_abs_speed;
_ss_speed_pair=_ss_speed_pairs[_ss_abs_speed];
_ss_interval_pointer=win.setInterval('document.getElementById("firefoxreader_app_text_box").scrollTop+='+_ss_direction*_ss_speed_pair[0]+'; if((pageYOffset<=1)||(pageYOffset==document.height-innerHeight)) _ss_speed=0;',_ss_speed_pair[1]);
};
_ss_adj=function(q){
_ss_speed+=q;
if(Math.abs(_ss_speed)>=_ss_speed_pairs.length)_ss_speed=(_ss_speed_pairs.length-1)*(_ss_speed/Math.abs(_ss_speed))};
_ss_quit=function(){
_ss_stop();
document.onkeypress=_ss_last_onkeypress;
};
//document.onkeypress=function(e){
doc.onkeypress=function(e){
if(e.keyCode==27){
_ss_quit();
return;
};
if(e.charCode>=48&&e.charCode<=57)_ss_speed=e.charCode-48;
else switch(e.charCode){
case 95:_ss_adj(-2);
case 45:_ss_adj(-1);
break;
case 43:_ss_adj(2);
case 61:_ss_adj(1);
break;
};
_ss_stop();
_ss_start();
};
_ss_stop()
;_ss_start();