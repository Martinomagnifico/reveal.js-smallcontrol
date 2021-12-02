# Smallcontrol

[![Version](https://img.shields.io/npm/v/reveal.js-smallcontrol)]()

A plugin for [Reveal.js](https://revealjs.com) 4 that makes the vertical controls significantly smaller. 

[![Screenshot](https://martinomagnifico.github.io/reveal.js-smallcontrol/screenshot.png)](https://martinomagnifico.github.io/reveal.js-smallcontrol/demo.html)

Sometimes the standard Reveal controls are just a bit too large. It is of course possible to just go and change the styling in the Reveal source files, but if you're not into CSS, that can be quite difficult. This plugin makes it easy. 

The vertical controls get a redesign in a certain way, so it may be opiniated. But of course, you don't have to use it.




## Installation

### Regular installation

Copy the smallcontrol folder to the plugins folder of the reveal.js folder, like this: `plugin/smallcontrol`.

### npm installation

This plugin is published to, and can be installed from, npm.

```console
npm install reveal.js-smallcontrol
```
The Smallcontrol plugin folder can then be referenced from `node_modules/reveal.js-smallcontrol/plugin/smallcontrol `


## Setup

### JavaScript

Smallcontrol works in setups with multiple Reveal instances.

There are two JavaScript files for Smallcontrol, a regular one, `smallcontrol.js`, and a module one, `smallcontrol.esm.js`. You only need one of them:

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
#### As a module 
If you're using ES modules, you can add it like this:

```html
<script type="module">
	// This will need a server
	import Reveal from './dist/reveal.esm.js';
	import Smallcontrol from './plugin/smallcontrol/smallcontrol.esm.js';
	Reveal.initialize({
		// ...
		plugins: [ Smallcontrol ]
	});
</script>
```


## Configuration

There are a few options that you can change from the Reveal.js options. The values below are default and do not need to be set if not changed.

```javascript
Reveal.initialize({
	// ...
	smallcontrol: {
		smalltouch: false,
		thisdeckonly: true
	},
	plugins: [ Smallcontrol ]
	// ... 
	]
});
```

* **`smalltouch`**: By default, Smallcontrol is turned off on touch devices, because these smaller controls seem harder to click on. You can set the value to `true` if you it on touch devices as well. In reality, the click area is just as large as the horizontal controls.
* **`thisdeckonly `**: In embedded presentations, the `thisdeckonly` option defines if the small styling should be set on the current deck only. It is set to `true` by default, but you can set it to `false`. It will then show smaller controls on all embedded decks on the same page.
 

## Like it?

If you like it, please star this repo.


## License
MIT licensed

Copyright (C) 2021 Martijn De Jongh (Martino)
