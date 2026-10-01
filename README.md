# Smallcontrol

[![Version](https://img.shields.io/npm/v/reveal.js-smallcontrol)](#) [![Downloads](https://img.shields.io/npm/dt/reveal.js-smallcontrol)](https://github.com/Martinomagnifico/reveal.js-smallcontrol/archive/refs/heads/master.zip)

A plugin for [Reveal.js](https://revealjs.com) that makes the vertical controls significantly smaller.

[<img src="https://martinomagnifico.github.io/reveal.js-smallcontrol/screenshot.png" width="100%">](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo/demo.html)

* [Demo](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo/demo.html)
* [Embedded demo](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo/demo-embed.html)
* [Simplemenu demo](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo/demo-simplemenu.html)

Sometimes the standard Reveal controls are just a bit too large. It is of course possible to just go and change the styling in the Reveal source files, but if you're not into CSS, that can be quite difficult. This plugin makes it easy.

The vertical controls get a redesign in a certain way, so it may be opinionated. But of course, you don't have to use it.


## Installation

### Regular installation

Copy the smallcontrol folder to the plugins folder of the reveal.js folder, like this: `plugin/smallcontrol`.

### npm installation

This plugin is published to, and can be installed from, npm.

```console
npm install reveal.js-smallcontrol
```

The Smallcontrol plugin folder can then be referenced from `node_modules/reveal.js-smallcontrol/plugin/smallcontrol`


## Setup

### JavaScript

There are two JavaScript files to choose between, a regular one, `smallcontrol.js`, and a module one, `smallcontrol.mjs`. You only need one of them.

#### Regular

If you're not using ES modules, for example, to be able to run your presentation from the filesystem, you can add it like this:

```html
<script type="text/javascript" src="dist/reveal.js"></script>
<script src="plugin/smallcontrol/smallcontrol.js"></script>
<script>
	Reveal.initialize({
		// ...
		plugins: [ Smallcontrol ]
	});
</script>
```

#### From npm

You can run it directly from npm:

```html
<script type="module">
	import Reveal from 'reveal.js';
	import Smallcontrol from 'reveal.js-smallcontrol';
	import 'reveal.js-smallcontrol/smallcontrol.css';
	Reveal.initialize({
		// ...
		plugins: [ Smallcontrol ]
	});
</script>
```

Otherwise, you may want to copy the plugin into a plugin folder or another location:

```html
<script type="module">
	import Reveal from './dist/reveal.mjs';
	import Smallcontrol from './plugin/smallcontrol/smallcontrol.mjs';
	import './plugin/smallcontrol/smallcontrol.css';
	Reveal.initialize({
		// ...
		plugins: [ Smallcontrol ]
	});
</script>
```

### Styling

The styling of Smallcontrol is automatically inserted from the included CSS styles, either loaded through npm or from the plugin folder.

Smallcontrol finds and loads its own stylesheet, so most decks never set anything here. If it cannot find it, maybe because the plugin is in a bundle, or it is somewhere the plugin cannot work out, then use `csspath`.

```js
smallcontrol: {
    csspath: "plugin/smallcontrol/smallcontrol.css"
}
```

If you import the stylesheet yourself, then set `csspath: false` so that Smallcontrol does not load a second copy. A stylesheet of your own can also say so, which is useful when you cannot reach the plugin’s options:

```css
:root {
    --cssimported-smallcontrol: true;
}
```

`csspath` loads that file *instead of* Smallcontrol’s own.

The styles only apply to a deck whose `.reveal` element has the `smallcontrol` class. The plugin adds that class for you, but you can also add it yourself and use only the stylesheet, without the plugin:

```html
<div class="reveal smallcontrol">
```

Load the Smallcontrol stylesheet after the one from Reveal. If you have your own rules for the controls, then load those after Smallcontrol's.

### Position

Reveal has two versions of the controls. If a deck has no vertical slides, then you see just a left and right arrow. If a deck does have vertical slides, then you see four arrows/chevrons. Like a big rotated rectangle.

Smallcontrol only changes the version where there is any vertical navigation, but its position will be more like if it did not have vertical navigation. 

You do not need to move the controls yourself: that goes automatically. If you want to change it, then change Reveal's own `--r-controls-spacing`. If you use `controlsLayout: 'edges'`, then the arrows stay where Reveal puts them. Only the up and down arrows get smaller.

If an arrow appears, then Reveal slides it in from a little distance. The small arrows slide in from closer by: `0.5em`. You can change that distance with `--smallcontrol-nudge`.

### Scaling

Reveal always shows the controls at the same size, no matter how large the screen is. On a big screen they might end up small and far away.

With `autoscale`, you can let Smallcontrol grow along with the slides. The controls never get smaller than Reveal's own controls. They grow up to twice their size, or up to whatever you set as a maximum with `maxscale`.

```javascript
Reveal.initialize({
	// ...
	smallcontrol: {
		autoscale: true,
		maxscale: 2
	},
	plugins: [ Smallcontrol ]
});
```

Scaling is off by default. So if you do not switch it on, then your deck looks the same as before. Reveal has its own `maxScale` option, which is `2` by default. That option limits how large the slides can get, so it also limits how large the controls can get. You can also set the maximum in CSS, with `--smallcontrol-maxscale`.

`autoscale` only works for the controls in the corner. If the controls are somewhere else, for example in a [Simplemenu bar](#in-a-simplemenu-bar), then `autoscale` does nothing. In the bar, the controls get their size from the bar, and the bar already grows with the slides. If you want the controls larger or smaller compared to the bar, then use `--smallcontrol-bar-size`.

### Colors

Standard Reveal themes give the arrows the same color that it uses for links. In the demo it is very blue. Reveal also defines what color the controls should be on slides where the user has set another background color: If that background color is very dark, the controls become white, and if it is very light, the controls become black.

Smallcontrol keeps the color that your theme gives the arrows, the color of its links. Only on slides that contrast the theme does it do something different: there the arrows get the color of the text on that slide, instead of plain black or white, like Reveal normally does. For an example, see the [light slide](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo/demo.html#/2) in the demo.

If you have your own `.reveal .controls` rule, then it still wins over the normal color, as long as it comes after the Smallcontrol stylesheet. The color on a contrasting slide is stronger. If you want to change that one, then use `inversecolor` or the CSS variable below.

You can set both colors with the `color` and `inversecolor` options, or in CSS:

```css
.reveal {
    --smallcontrol-color: orange;
    --smallcontrol-color-inverted: darkred;
}
```

### In a Simplemenu bar

You can also put the controls in a [Simplemenu](https://github.com/Martinomagnifico/reveal.js-simplemenu) bar. Simplemenu moves them there, the same way it does with the slide number. If the bar has an empty `div` with the class `controls`, then Simplemenu puts Reveal's controls in that place. Smallcontrol then gives them a style that fits the bar:

```javascript
Reveal.initialize({
	// ...
	simplemenu: {
		barhtml: {
			header: "<nav class='menubar'>"
				+ "<div class='padbox'></div>"
				+ "<ul class='menu'></ul>"
				+ "<div class='padbox'><div class='controls'></div></div>"
				+ "</nav>"
		}
	},
	plugins: [ Simplemenu, Smallcontrol ]
});
```

In the bar, the controls have the same layout as in the corner. They get the color of the bar, also on a slide that contrasts the theme. Their size follows the font size of the bar. If you want them larger or smaller, then use `--smallcontrol-bar-size` (`0.3em` by default). This works for controls in any place other than directly in the `.reveal` element. So if you move them into a bar of your own, then it works there too.

If the bar is hidden, then the controls are hidden too, for example on a slide with `data-state="hide-menubar"`.

## Configuration

There are a few options that you can change from the Reveal.js options. The values below are default and do not need to be set if not changed.

```javascript
Reveal.initialize({
	// ...
	smallcontrol: {
		color: '',
		inversecolor: '',
		autoscale: false,
		maxscale: 2,
		cssautoload: 'auto',
		csspath: '',
		debug: false
	},
	plugins: [ Smallcontrol ]
});
```

* **`color`**: The color of the controls. If you leave it empty, then they get the color that your theme gives them. You can use any CSS color.
* **`inversecolor`**: The color of the controls on a slide that contrasts the theme. If you leave it empty, then they get the color of the text on that slide. You can use any CSS color.
* **`autoscale`**: If this is on, then the controls grow with the slides on a big screen. It is off by default. It only works for the controls in the corner: in a Simplemenu bar, they get their size from the bar. See [Scaling](#scaling).
* **`maxscale`**: How large `autoscale` can make the controls, compared to Reveal's own size. It is `2` by default.
* **`cssautoload`**: Smallcontrol loads its own stylesheet when this is on. If you bundle Smallcontrol, or import its CSS yourself, it works this out and does not load a second copy, so this normally does not need setting. If you do want it to autoload in a bundled deck, then setting it to `true` yourself turns it back on.
* **`csspath`**: Where Smallcontrol's stylesheet is, for the cases where it cannot find it by itself. You can also set `csspath: false` if the styling is already on the page through some other file.
* **`debug`**: If this is on, then Smallcontrol logs what it does to the console.


## Like it?

If you like it, please star this repo.


## License

MIT licensed

Copyright (C) 2026 Martijn De Jongh (Martino)
