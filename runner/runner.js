(function(window, undef){
  	var $ = window.jQuery,
  		c = window.console;
  	window.console = {}; // That's right, can it! 

//	$('<div id="ell-info"></div>').css({
//		'position': 'absolute',
//			'border': '1px solid black',
//			'display': 'none',
//			'background-color': 'white',
//			'padding': '3px',
//			'z-index': '1500',
//	}).appendTo('body');
  	
  	var clickIt = function(elements, current){
  		if(current == elements.length){
  			c.log('done');
  			return;
  		}
  		
  		var element = elements[current];
  		var href = $(element).attr('href');
  		var onclick = $(element).attr('onclick');
  		var onmousedown = $(element).attr('onmousedown');
  		var type = $(element).attr('type');
  		
  		// Get rid of things that might navigate us
//  		if($(element).attr('id') && $(element).attr('id').match(/^watchVideo/)){
//  			var id = $(element).attr('id');
//  			$(element).removeAttr('id');
//  		}
//  		if($(element).attr('class') && $(element).attr('class').match(/lightbox/)){
//  			var cls = $(element).attr('class');
//  			$(element).removeAttr('class');
//  		}  		
  		$(element).removeAttr('href')
  			// .removeAttr('onclick')
  			// .removeAttr('onmousedown')
  			.removeAttr('type');
  		
  		c.log(current + ", "
  			+ Date.now() + ", "	
  			+ onclick + ", "
  			+ onmousedown  		
  		);
  		$(element).css("border", "2px solid orange");
  		$(element).trigger('click');
  		$(element).trigger('mousedown');
  		
  		// Put it back
  		if(href !== undef){
  			$(element).attr('href', href);
  		}
  		if(type !== undef){
  			$(element).prop('type', type);
  		}
//  		if(id !== undef){
//  			$(element).attr('id', id);
//  		}
//  		if(cls !== undef){
//  			$(element).attr('class', cls);
//  		}

  		window.setTimeout(clickIt, 300, elements, current + 1);
  		
  	};
	
  	$('.lightbox').unbind();
  	
  	var elements = $('[onmousedown],[onclick]');
  	c.log("There are " + elements.length + " things to click. "
  			+ "Gotta Click 'Em All!");
  	c.log("");
  	c.log("id, timestamp, onclick, onmousedown");
  	clickIt(elements, 0);

})(this);
