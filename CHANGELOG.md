# Changelog

## [1.1.0] - 2026-10-01
### Changed
- Rewritten in TypeScript and built with Vite, on top of [reveal.js-plugintoolkit](https://github.com/Martinomagnifico/reveal.js-plugintoolkit). The distributed files are now `smallcontrol.js` (UMD) and `smallcontrol.mjs` (ESM). `smallcontrol.esm.js` is still shipped alongside them, as a one-line re-export of `smallcontrol.mjs`, so a deck that loads the old filename by path goes on working untouched.
- The styling is now a real stylesheet, `smallcontrol.css`, instead of a `<style>` block written into the page. Smallcontrol loads it by itself, the same way the other plugins do, and it can also be imported (`import 'reveal.js-smallcontrol/smallcontrol.css'`).
- A deck gets the small controls through the `smallcontrol` class on its `.reveal` element, which the plugin adds. Embedded decks no longer get a generated `id` for this.

### Removed
- `thisdeckonly`. Smallcontrol only ever styles the deck it is loaded in, so a deck shown on a page with others, such as an overview of decks, can no longer change how those look. To give a deck small controls, add the plugin to that deck. `thisdeckonly: false` logs a warning once.
- Reveal.js is a peer dependency again (`>=4.0.0`).
- The controls are now where Reveal itself puts them, at Reveal's own `--r-controls-spacing` from the corner. Earlier versions had a fixed `bottom: 0; right: 18px`, so the controls were higher and further in than Reveal's own. If a deck has vertical slides, then you get Reveal's row with the small up and down arrows in the middle. The left arrow moves out a bit, to make room for them. If a deck has no vertical slides, then the controls are exactly where they are without Smallcontrol. If a deck has only vertical slides, then the small up and down arrows are where the right arrow would be. If you use `controlsLayout: 'edges'`, then the arrows stay where Reveal puts them.
- On a slide whose background contrasts the theme, such as a white slide in a dark deck, the controls get the color of the text on that slide instead of Reveal's plain black or white, through the [reveal.js-plugintoolkit](https://github.com/Martinomagnifico/reveal.js-plugintoolkit) theme colors. Elsewhere they keep the color the theme gives them.

### Added
- `color` and `inversecolor`, and the `--smallcontrol-color` and `--smallcontrol-color-inverted` custom properties, to set the color of the controls.
- Controls in a Simplemenu bar (a `div.controls` in the bar, which Simplemenu fills with Reveal's own controls) have the same layout as in the corner, and get the color of the bar.
- `autoscale`, off by default, which lets the controls grow with the slides on a big screen, following Reveal's own `--slide-scale`. Never smaller than Reveal's own size, and no larger than `maxscale` times it (`2` by default, or `--smallcontrol-maxscale` in CSS). It only works for the controls in the corner: in a Simplemenu bar, they get their size from the bar.
- `cssautoload` and `csspath`, to say whether and from where the stylesheet is loaded.
- `debug`, which logs what Smallcontrol does to the console.
- The small controls also work without the plugin: load the stylesheet and add the `smallcontrol` class to the `.reveal` element yourself.
- An embedded demo (`demo-embed.html`), with one deck that uses Smallcontrol and one that does not.
- A Simplemenu demo (`demo-simplemenu.html`), with the controls in the menubar.


## [1.0.2] - 2021-12-13
### Changed
- Small adjustments.


## [1.0.1] - 2021-12-03
### Changed
- Small adjustments.


## [1.0.0] - 2021-12-02
- First commit
