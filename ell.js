(function(){
  	var $ = window.jQuery;
	// methods	

	function init(){
		$('<div id="ell-info"></div>').css({
			'position': 'absolute',
    			'border': '1px solid black',
    			'display': 'none',
    			'background-color': 'white',
    			'padding': '3px',
    			'z-index': '1500',
		}).appendTo('body');
		$('[onmousedown],[onclick]').each(function(){highlight($(this), 'inline')});

	}
	
	function showInfo(event){
		target = $(event.target);
		target.removeAttr('alt');
		target.removeAttr('title');
		// Image elements are a bit wacky, so move the target up the dom
		if(target.is('img')){
			target = target.parent();
		}
		target.css('background-color', 'grey');
		$('#ell-info').css("display", "block");
		$('#ell-info').empty();
		var stmts = JSON.parse(target.data('ell-statements'));
		for(var i = 0; i < stmts.length; i++){
			$('#ell-info').append('<li>' + stmts[i] + '</li>');
		}
		target.bind('mousemove', function(e){
		    $('#ell-info').css({
		       left:  e.pageX - 20,
		       top:   e.pageY + 20
		    });
		});
	}
	
	function hideInfo(event){
		target = $(event.target);
		target.css('background-color', '');
		$('#ell-info').css("display", "none");
		target.unbind('mousemove');
	}

	function highlight(target, bindingType){
		target.css("border", "2px solid grey");

		if(bindingType == 'inline'){
			var scriptTexts = [];
			if(typeof target.attr("onmousedown") != "undefined"){
				scriptTexts.push(target.attr("onmousedown"));
			} 			
			if(typeof target.attr("onclick") != "undefined"){
				scriptTexts.push(target.attr("onclick"));
			}
			
			var statements = [];
			for(var i = 0; i < scriptTexts.length; i++){
				var str = scriptTexts[i].replace(/^javascript:/, '');
				str = str.replace(/;$/, '');
				str = $.trim(str);
				statements = statements.concat(str.split(";"));
			}
			
		} else {
			// TODO: Grab functions for unobtrusivly bound events
			var statements = [];
		}
		
		target.data("ell-statements", JSON.stringify(statements));
		target.mouseenter(showInfo);
		target.mouseleave(hideInfo);

		if(statements.length == 1){
			if(statements[0].match(/^common_log_event/)){
				target.css("border", "2px solid pink");
			} else if(statements[0].match(/^linkTrack/)){
				target.css("border", "2px solid yellow");
			} else if(statements[0].match(/^scLogger/)){
				target.css("border", "2px solid orange");
			}
		} else {
			target.css("border", "2px solid red");
		}
		
//		if(scriptText.match(/linkTrack/i)){
//			target.css("border", "2px solid pink");
//		}
//		if(scriptText.match(/scLogger/i)){
//			target.css("border", "2px solid yellow");
//		}
//		if(scriptText.match(/common_log_event/i)){
//			target.css("border", "2px solid orange");
//		}
	}
	
	$(document).ready(init);

}());
