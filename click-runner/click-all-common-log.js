(function(window, undef){
  	var $ = window.jQuery,
  		nativeC = window.console,
  		sessionId = window.getCookie("PHPSESSID"),
  		userAgent = window.navigator.userAgent,
  		rowNumber = 0;
  	window.console = {}; // Can you please just be quiet for a moment?
  	
  	/**
  	 * Log to native console and to bottom of document
  	 */
	var log = function(string){
		nativeC.log(string);
		$('body').append('<div>' + string + '</div>');	  			
	};
	
	/**
  	 * Filter elements to those bound to a "common_log" function
  	 */
	var filterElements = function(){
		if(typeof $(this).attr('onmousedown') === 'string'){
  			if($(this).attr('onmousedown').match(/common_log_event|common_log_timed_event/)){
  				return true;
  			}
  		}
  		if(typeof $(this).attr('onclick') === 'string'){
  			if($(this).attr('onclick').match(/common_log_event|common_log_timed_event/)){
  				return true;
  			}
  		}
  		return false;
	};
	
	/**
	 * From a string of bound javascript, fetch an array of "events" that will be
	 * logged on click
	 */
	var getEvents = function(string){
		var events = [];
		var funcCalls = string.match(/common_log_(timed_)?event\(.*?\)/g);
		for (var i = 0; i < funcCalls.length; i++){
			var callString = funcCalls[i].replace(/common_log_(timed_)?event\(/, '').replace(')', '').replace(/'/g, '');
			params = callString.split(',');
			event = {};
			event.eventid = params[0];
			event.someid = params[1];
			event.type = params[2];
			event.page = params[3];
			event.source = params[4];
			events.push(event);
		}
		return events;
	};
	
	/**
	 * Simulate a click on the current element and log the result
	 */
  	var clickIt = function(elements, currentElement){
  		if(currentElement == elements.length){
  			finish(currentElement);
  			return;
  		}
  		
  		var element = elements[currentElement];
  		var href = $(element).attr('href');
  		var onclick = $(element).attr('onclick');
  		var onmousedown = $(element).attr('onmousedown');
  		var type = $(element).attr('type');
  		
  		var events = getEvents(onclick + onmousedown);
  		
  		// Remove things that cause the page to navigate
  		$(element).removeAttr('href')
  			.removeAttr('type');
  		
  		// Trigger a click
  		$(element).css("border", "2px solid orange");
  		$(element).trigger('click');
  		$(element).trigger('mousedown');
  		var clicktime = Date.now();
  		
  		// Print results
  		for (var i = 0; i < events.length; i++){
  	  		log(rowNumber + ", "
  	    			+ clicktime + ", "	
  	    			+ events[i].eventid + ", "
  	    			+ events[i].someid + ", "
  	    			+ events[i].type + ", "
  	    			+ events[i].page + ", "
  	    			+ events[i].source + ", "
  	    			+ sessionId + ", "
  	    			+ userAgent
  	    		);
  	  		rowNumber = rowNumber + 1;
  		}
  		
  		// Put back stripped attributes
  		if(href !== undef){	$(element).attr('href', href); }
  		if(type !== undef){	$(element).prop('type', type); }

  		// Do it agian
  		window.setTimeout(clickIt, 300, elements, currentElement + 1);  		
  	};
  	
  	var finish = function(currentElement){
		log('Done clicking!');
  		log(currentElement	 + ' simulated clicks yieled ' + rowNumber + ' fired events.');
  		window.console = nativeC; // Ok, now you can talk
  	};
  	
  	// Unbind some troublesome events
  	$('.lightbox').unbind();
  	
  	// Get all elements with a bound "common_log" function
  	var elements = $('[onmousedown],[onclick]').filter(filterElements);
  	
  	log("There are " + elements.length + " things to click. "
  			+ "Gotta Click 'Em All!");
  	log("");
  	log("id, timestamp, eventid, someid, type, page, source, sessionId, userAgent");
  	
  	clickIt(elements, 0);

})(this);
