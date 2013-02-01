(function(){
  var $ = window.jQuery;
	
	function init(){
		$('[onmousedown],[onclick]').each(function(){makeItPop($(this))});
	}
	
	function makeItPop(target){
		target.css("border", "2px solid red");
		target.mouseenter(function(){
			$(this).css("background-color","grey");
		});
		target.mouseleave(function(){
			$(this).css("background-color","");
		});
		if(typeof target.attr("onmousedown") == "undefined"){
			var scriptText = target.attr("onclick");
		} else if(typeof target.attr("onclick") == "undefined"){
			var scriptText = target.attr("onmousedown");
		} else {
			var scriptText = target.attr("onclick") + "|" + target.attr("onmousedown");
		}
		
		target.attr("title", scriptText);
		
		if(scriptText.match(/linkTrack/i)){
			target.css("border", "2px solid pink");
		}
		if(scriptText.match(/scLogger/i)){
			target.css("border", "2px solid yellow");
		}
		if(scriptText.match(/common_log_event/i)){
			target.css("border", "2px solid orange");
		}
	}

	$(document).ready(init);
})
