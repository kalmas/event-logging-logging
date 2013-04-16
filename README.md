The FRC Event Logging Inspector
==============================

This bookmarklet gives you an easy way to look at FRC click events.

Usage
-----
1) Create a new bookmark in your browser.

2) Copy 'n Paste the following blob in as the url:

>javascript:(function(){js=document.createElement('SCRIPT');js.type='text/javascript';js.src='http://kalmas.github.io/event-logging-logging/ell.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(js);})();

3) Navigate to FRC page you want to inspect and click the bookmark


Extra: Click Simulation
-----------------------

The following bookmark takes the above inspector a step further by simulating a click on all elements bound to a "common_log" method.
Additionally it will log all fired events.
Install the same as above.

>javascript:(function(){js=document.createElement('SCRIPT');js.type='text/javascript';js.src='http://kalmas.github.io/event-logging-logging/click-runner/click-all-common-log.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(js);})();
