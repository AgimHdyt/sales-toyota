/* jQuery.marquee - http://aamirafridi.com/jquery/jquery-marquee-plugin */
!function(A){A.fn.marquee=function(k){return this.each(function(){function a(t,e,a){for(var r=["webkit","moz","MS","o",""],n=0;n<r.length;n++)r[n]||(e=e.toLowerCase()),t.addEventListener(r[n]+e,a,!1)}function r(){p.timer=setTimeout(V,d.delayBeforeStart)}var n,i,s,o,u,d=A.extend({},A.fn.marquee.defaults,k),p=A(this),l=3,t="animation-play-state",f=!1,e={pause:function(){f&&d.allowCss3Support?n.css(t,"paused"):A.fn.pause&&n.pause(),p.data("runningStatus","paused"),p.trigger("paused")},resume:function(){f&&d.allowCss3Support?n.css(t,"running"):A.fn.resume&&n.resume(),p.data("runningStatus","resumed"),p.trigger("resumed")},toggle:function(){e["resumed"==p.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(p.timer),p.find("*").addBack().off(),p.html(p.find(".js-marquee:first").html())}};if("string"!=typeof k){var c;A.each(d,function(t,e){if(void 0!==(c=p.attr("data-"+t))){switch(c){case"true":c=!0;break;case"false":c=!1}d[t]=c}}),d.speed&&(d.duration=parseInt(p.width(),10)/d.speed*1e3),o="up"==d.direction||"down"==d.direction,d.gap=d.duplicated?parseInt(d.gap):0,p.wrapInner('<div class="js-marquee"></div>');var m,g,h=p.find(".js-marquee").css({"margin-right":d.gap,float:"left"});if(d.duplicated&&h.clone(!0).appendTo(p),p.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),n=p.find(".js-marquee-wrapper"),o?(m=p.height(),n.removeAttr("style"),p.height(m),p.find(".js-marquee").css({float:"none","margin-bottom":d.gap,"margin-right":0}),d.duplicated&&p.find(".js-marquee:last").css({"margin-bottom":0}),g=p.find(".js-marquee:first").height()+d.gap,d.startVisible&&!d.duplicated?(d._completeDuration=(parseInt(g,10)+parseInt(m,10))/parseInt(m,10)*d.duration,d.duration=parseInt(g,10)/parseInt(m,10)*d.duration):d.duration=(parseInt(g,10)+parseInt(m,10))/parseInt(m,10)*d.duration):(u=p.find(".js-marquee:first").width()+d.gap,i=p.width(),d.startVisible&&!d.duplicated?(d._completeDuration=(parseInt(u,10)+parseInt(i,10))/parseInt(i,10)*d.duration,d.duration=parseInt(u,10)/parseInt(i,10)*d.duration):d.duration=(parseInt(u,10)+parseInt(i,10))/parseInt(i,10)*d.duration),d.duplicated&&(d.duration=d.duration/2),d.allowCss3Support){var v=document.body||document.createElement("div"),y="marqueeAnimation-"+Math.floor(1e7*Math.random()),I="Webkit Moz O ms Khtml".split(" "),x="animation",w="",S="";if(void 0!==v.style.animation&&(S="@keyframes "+y+" ",f=!0),!1===f)for(var b=0;b<I.length;b++)if(void 0!==v.style[I[b]+"AnimationName"]){var q="-"+I[b].toLowerCase()+"-",x=q+x,t=q+t,S="@"+q+"keyframes "+y+" ",f=!0;break}f&&(w=y+" "+d.duration/1e3+"s "+d.delayBeforeStart/1e3+"s infinite "+d.css3easing,p.data("css3AnimationIsSupported",!0))}function j(){n.css("transform","translateY("+("up"==d.direction?m+"px":"-"+g+"px")+")")}function C(){n.css("transform","translateX("+("left"==d.direction?i+"px":"-"+u+"px")+")")}d.duplicated?(o?d.startVisible?n.css("transform","translateY(0)"):n.css("transform","translateY("+("up"==d.direction?m+"px":"-"+(2*g-d.gap)+"px")+")"):d.startVisible?n.css("transform","translateX(0)"):n.css("transform","translateX("+("left"==d.direction?i+"px":"-"+(2*u-d.gap)+"px")+")"),d.startVisible||(l=1)):d.startVisible?l=2:(o?j:C)();var V=function(){var t,e;d.duplicated&&(1===l?(d._originalDuration=d.duration,d.duration=o?"up"==d.direction?d.duration+m/(g/d.duration):2*d.duration:"left"==d.direction?d.duration+i/(u/d.duration):2*d.duration,w=w&&y+" "+d.duration/1e3+"s "+d.delayBeforeStart/1e3+"s "+d.css3easing,l++):2===l&&(d.duration=d._originalDuration,w&&(y+="0",S=A.trim(S)+"0 ",w=y+" "+d.duration/1e3+"s 0s infinite "+d.css3easing),l++)),o?d.duplicated?(2<l&&n.css("transform","translateY("+("up"==d.direction?0:"-"+g+"px")+")"),s={transform:"translateY("+("up"==d.direction?"-"+g+"px":0)+")"}):d.startVisible?2===l?(w=w&&y+" "+d.duration/1e3+"s "+d.delayBeforeStart/1e3+"s "+d.css3easing,s={transform:"translateY("+("up"==d.direction?"-"+g+"px":m+"px")+")"},l++):3===l&&(d.duration=d._completeDuration,w&&(y+="0",S=A.trim(S)+"0 ",w=y+" "+d.duration/1e3+"s 0s infinite "+d.css3easing),j()):(j(),s={transform:"translateY("+("up"==d.direction?"-"+n.height()+"px":m+"px")+")"}):d.duplicated?(2<l&&n.css("transform","translateX("+("left"==d.direction?0:"-"+u+"px")+")"),s={transform:"translateX("+("left"==d.direction?"-"+u+"px":0)+")"}):d.startVisible?2===l?(w=w&&y+" "+d.duration/1e3+"s "+d.delayBeforeStart/1e3+"s "+d.css3easing,s={transform:"translateX("+("left"==d.direction?"-"+u+"px":i+"px")+")"},l++):3===l&&(d.duration=d._completeDuration,w&&(y+="0",S=A.trim(S)+"0 ",w=y+" "+d.duration/1e3+"s 0s infinite "+d.css3easing),C()):(C(),s={transform:"translateX("+("left"==d.direction?"-"+u+"px":i+"px")+")"}),p.trigger("beforeStarting"),f?(n.css(x,w),t=S+" { 100%  "+function(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a+":"+t[a]);return e.push(),"{"+e.join(",")+"}"}(s)+"}",0!==(e=n.find("style")).length?e.filter(":last").html(t):A("head").append("<style>"+t+"</style>"),a(n[0],"AnimationIteration",function(){p.trigger("finished")}),a(n[0],"AnimationEnd",function(){V(),p.trigger("finished")})):n.animate(s,d.duration,d.easing,function(){p.trigger("finished"),(d.pauseOnCycle?r:V)()}),p.data("runningStatus","resumed")};p.on("pause",e.pause),p.on("resume",e.resume),d.pauseOnHover&&(p.on("mouseenter",e.pause),p.on("mouseleave",e.resume)),(f&&d.allowCss3Support?V:r)()}else A.isFunction(e[k])&&(n=n||p.find(".js-marquee-wrapper"),!0===p.data("css3AnimationIsSupported")&&(f=!0),e[k]())})},A.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,startVisible:!1}}(jQuery);

/* Codevz Marquee */
! function( $ ) {

	Codevz_Plus.text_marquee = function() {

		$( document.body ).find( '.cz_text_marquee' ).marquee( 'destroy' ).codevzPlus( 'marquee', function( x ) {

			x.marquee();

			x.hasClass( 'cz_text_marquee_soh' ) && x.on( 'mouseenter mouseleave', function() {
				x.marquee( 'toggle' );
			});

		});

	}, Codevz_Plus.text_marquee();

}(jQuery);