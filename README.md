The Event Logging Logger
========================

This bookmarklet gives you an easy way to look at FRC click events. (Event Logging^2, if you will :-)

Usage
-----
1) Create a new bookmark in your browser.

2) Copy 'n Paste the following in as the url:

```javascript
javascript:(function(){js=document.createElement('SCRIPT');js.type='text/javascript';js.src='https://raw.github.com/kalmas/event-logging-logging/master/ell.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(js);css=document.createElement('LINK');css.rel='stylesheet';css.type='text/css';css.href='https://raw.github.com/kalmas/event-logging-logging/master/ell.css?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(css);})();
```

3) Navigate to page you want to inspect and click the bookmark
