The FRC Event Logging Logger
============================

This bookmarklet gives you an easy way to look at FRC click events. (Event Logging^2, if you will :-)

Usage
-----
1) Create a new bookmark in your browser.

2) Copy 'n Paste the following blob in as the url:

>javascript:(function(){js=document.createElement('SCRIPT');js.type='text/javascript';js.src='https://raw.github.com/kalmas/event-logging-logging/master/ell.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(js);})();

3) Navigate to FRC page you want to inspect and click the bookmark
