
/*****************************************************************
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/Martinomagnifico
 *
 * Smallcontrol.js for Reveal.js 
 * Version 1.0.1
 * 
 * @license 
 * MIT licensed
 *
 * Thanks to:
 *  - Hakim El Hattab, Reveal.js 
 ******************************************************************/


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.Smallcontrol = factory());
}(this, (function () { 'use strict';

	var Plugin = function Plugin() {
	  var smallcontrols = function smallcontrols(deck, options) {
	    var thisid = ".reveal";

	    if (deck.getConfig().embedded == true) {
	      var generateID = function generateID() {
	        return Date.now().toString(36) + Math.random().toString(36).substr(2);
	      };

	      var unid = "";

	      if (options.thisdeckonly == true) {
	        unid = deck.getRevealElement().id ? deck.getRevealElement().id : generateID();
	        thisid = "#" + unid + ".reveal";

	        if (!deck.getRevealElement().id) {
	          deck.getRevealElement().setAttribute("id", unid);
	        }
	      }
	    }

	    var style = document.createElement('style');
	    style.innerHTML = "".concat(thisid, " .controls{bottom:0;right:18px}").concat(thisid, " .controls button{margin:0}").concat(thisid, " .controls .navigate-up{right:3.2em;bottom:5em}").concat(thisid, " .controls .navigate-up .controls-arrow{display:-webkit-box;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}").concat(thisid, " .controls .navigate-up .controls-arrow:before{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);transform:translateY(-50%) translateX(1.8em) rotate(-45deg)}").concat(thisid, " .controls .navigate-up .controls-arrow:after{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(45deg);transform:translateY(-50%) translateX(1.8em) rotate(45deg)}").concat(thisid, " .controls .navigate-up .controls-arrow:after,").concat(thisid, " .controls .navigate-up .controls-arrow:before{width:1.1em;height:.4em}").concat(thisid, " .controls .navigate-down{bottom:1.4em;padding-bottom:0}").concat(thisid, " .controls .navigate-down .controls-arrow:before{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);transform:translateY(-50%) translateX(1.8em) rotate(-45deg)}").concat(thisid, " .controls .navigate-down .controls-arrow:after{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(45deg);transform:translateY(-50%) translateX(1.8em) rotate(45deg)}").concat(thisid, " .controls .navigate-down .controls-arrow:after,").concat(thisid, " .controls .navigate-down .controls-arrow:before{width:1.1em;height:.4em}").concat(thisid, ":not(.has-vertical-slides) .controls .navigate-left,").concat(thisid, "[data-navigation-mode=linear].has-horizontal-slides .navigate-left{bottom:3.15em;right:5.5em}").concat(thisid, ":not(.has-vertical-slides) .controls .navigate-right,").concat(thisid, "[data-navigation-mode=linear].has-horizontal-slides .navigate-right{bottom:3.15em;right:.5em}");
	    document.head.appendChild(style);
	  };

	  var init = function init(deck) {
	    var defaultOptions = {
	      thisdeckonly: true
	    };

	    var defaults = function defaults(options, defaultOptions) {
	      for (var i in defaultOptions) {
	        if (!options.hasOwnProperty(i)) {
	          options[i] = defaultOptions[i];
	        }
	      }
	    };

	    var options = deck.getConfig().smallcontrol || {};
	    defaults(options, defaultOptions);
	    smallcontrols(deck, options);
	  };

	  return {
	    id: 'smallcontrol',
	    init: init
	  };
	};

	return Plugin;

})));
