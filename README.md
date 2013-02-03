Event Logging Logger
====================

This bookmarklet gives you an easy way to look at click events. (Event Logging^2, if you will :-)

Usage
-----
1. Create a new bookmark in your browser and paste the following in as the url:

javascript:(function(){js=document.createElement('SCRIPT');js.type='text/javascript';js.src='http://localhost/cruzers/event-logging-logging/ell.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(js);css=document.createElement('LINK');css.rel='stylesheet';css.type='text/css';css.href='http://localhost/cruzers/event-logging-logging/ell.css?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(css);})();)

2. Navigate to page you want to inspect and click the bookmark
