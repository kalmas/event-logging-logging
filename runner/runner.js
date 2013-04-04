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
  		$(element).removeAttr('href')
  			// .removeAttr('onclick')
  			// .removeAttr('onmousedown')
  			.removeAttr('type');
  		
  		c.log('clicking ' + current);
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

  		window.setTimeout(clickIt, 300, elements, current + 1);
  		
  	};
	
  	var elements = $('[onmousedown],[onclick]');
  	
  	clickIt(elements, 0);

})(this);
