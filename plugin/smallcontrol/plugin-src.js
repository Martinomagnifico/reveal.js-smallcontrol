const Plugin = () => {

	const smallcontrols = function (deck, options) {

		let thisid = ".reveal";

		if (deck.getConfig().embedded == true) {
			const generateID = () => {
				return Date.now().toString(36) + Math.random().toString(36).substr(2);
			}

			let unid = "";

			if (options.thisdeckonly == true) {
				unid = deck.getRevealElement().id ? deck.getRevealElement().id : generateID()
				thisid = "#" + unid + ".reveal";
				if (!deck.getRevealElement().id) {
					deck.getRevealElement().setAttribute("id", unid);
				}
			}
		}

		let style = document.createElement('style');
		style.innerHTML = `/* Styles added by Smallcontrol */
${thisid} .controls{font-size:10px;bottom:0;right:18px}${thisid} .controls button{margin:0}${thisid} .controls .navigate-up{right:3.2em;bottom:5em}${thisid} .controls .navigate-up .controls-arrow:after,${thisid} .controls .navigate-up .controls-arrow:before{width:1.1em;height:.4em}${thisid} .controls .navigate-up .controls-arrow:before{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);transform:translateY(-50%) translateX(1.8em) rotate(-45deg)}${thisid} .controls .navigate-up .controls-arrow:after{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(45deg);transform:translateY(-50%) translateX(1.8em) rotate(45deg)}${thisid} .controls .navigate-up .controls-arrow:hover:before{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-40deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-40deg);transform:translateY(-50%) translateX(1.8em) rotate(-40deg)}${thisid} .controls .navigate-up .controls-arrow:hover:after{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(40deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(40deg);transform:translateY(-50%) translateX(1.8em) rotate(40deg)}${thisid} .controls .navigate-up .controls-arrow:active:before{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-36deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-36deg);transform:translateY(-50%) translateX(1.8em) rotate(-36deg)}${thisid} .controls .navigate-up .controls-arrow:active:after{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(36deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(36deg);transform:translateY(-50%) translateX(1.8em) rotate(36deg)}${thisid} .controls .navigate-down{bottom:1.4em;padding-bottom:0}${thisid} .controls .navigate-down .controls-arrow:after,${thisid} .controls .navigate-down .controls-arrow:before{width:1.1em;height:.4em}${thisid} .controls .navigate-down .controls-arrow:before{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-45deg);transform:translateY(-50%) translateX(1.8em) rotate(-45deg)}${thisid} .controls .navigate-down .controls-arrow:after{top:50%;-webkit-transform:translateY(-50%) translateX(1.8em) rotate(45deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(45deg);transform:translateY(-50%) translateX(1.8em) rotate(45deg)}${thisid} .controls .navigate-down .controls-arrow:hover:before{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-40deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-40deg);transform:translateY(-50%) translateX(1.8em) rotate(-40deg)}${thisid} .controls .navigate-down .controls-arrow:hover:after{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(40deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(40deg);transform:translateY(-50%) translateX(1.8em) rotate(40deg)}${thisid} .controls .navigate-down .controls-arrow:active:before{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(-36deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(-36deg);transform:translateY(-50%) translateX(1.8em) rotate(-36deg)}${thisid} .controls .navigate-down .controls-arrow:active:after{-webkit-transform:translateY(-50%) translateX(1.8em) rotate(36deg);-ms-transform:translateY(-50%) translateX(1.8em) rotate(36deg);transform:translateY(-50%) translateX(1.8em) rotate(36deg)}${thisid}:not(.has-vertical-slides) .controls .navigate-left,${thisid}[data-navigation-mode=linear].has-horizontal-slides .navigate-left{bottom:3.15em;right:5.5em}${thisid}:not(.has-vertical-slides) .controls .navigate-right,${thisid}[data-navigation-mode=linear].has-horizontal-slides .navigate-right{bottom:3.15em;right:.5em}`

		document.head.appendChild(style);

	};

	const init = function (deck) {

		let defaultOptions = {
			thisdeckonly: true
		};

		const defaults = function (options, defaultOptions) {
			for (let i in defaultOptions) {
				if (!options.hasOwnProperty(i)) {
					options[i] = defaultOptions[i];
				}
			}
		}

		let options = deck.getConfig().smallcontrol || {};

		defaults(options, defaultOptions);
		smallcontrols(deck, options);

	};

	return {
		id: 'smallcontrol',
		init: init
	};
};

export default Plugin;