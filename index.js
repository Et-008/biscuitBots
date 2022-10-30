var win = window;
var doc = win.document;

var length = win.innerWidth;
var height = win.innerHeight;
var divtag;

win.onload = function () {
    'use strict';
    var head = doc.getElementsByTagName('head')[0];
    var link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'index.css';
    link.media = 'all';
    head.appendChild(link);

    divtag = doc.createElement('div');
    divtag.innerText = 'Cookie policy statement with agreement and actions';
    divtag.classList = 'cookie-police';
    win.document.body.appendChild(divtag);
};