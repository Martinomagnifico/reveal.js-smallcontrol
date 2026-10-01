import type { RevealApi } from "reveal.js";
// Helper imports
import {
	pluginDebug as debug,
	type RevealInstance,
	themeTools,
	warnOnce,
} from "reveal.js-plugintoolkit";
import type { Config } from "./config";
import {
	AUTOSCALE_CLASS,
	COLOR_VAR,
	DECK_CLASS,
	defaultConfig,
	INVERSE_COLOR_VAR,
	MAXSCALE_VAR,
	PLUGIN_ID,
} from "./config";

/**
 * Write the colours the deck asked for. Anything left out falls through to the
 * theme in the stylesheet.
 */
const setColors = (own: HTMLElement, config: Config): void => {
	if (config.color) {
		own.style.setProperty(COLOR_VAR, config.color);
	}
	if (config.inversecolor) {
		own.style.setProperty(INVERSE_COLOR_VAR, config.inversecolor);
	}
};

/**
 * Let the controls grow with the deck. The growing itself is in the stylesheet,
 * which follows Reveal's own `--slide-scale`, so there is nothing to do on resize.
 */
const setScaling = (own: HTMLElement, config: Config): void => {
	if (!config.autoscale) return;

	own.classList.add(AUTOSCALE_CLASS);

	// Only a usable number is written. Anything else leaves the stylesheet's own
	// default, which is the same as the option's.
	const max = Number(config.maxscale);
	if (Number.isFinite(max) && max > 0) {
		own.style.setProperty(MAXSCALE_VAR, String(max));
	} else {
		warnOnce(
			PLUGIN_ID,
			`\`maxscale\` should be a number, such as ${defaultConfig.maxscale}. Using ${defaultConfig.maxscale}.`
		);
	}
};

export const Smallcontrol = {
	async create(deck: RevealApi, config: Config): Promise<void> {
		const own = deck.getRevealElement() as HTMLElement | null;
		if (!own) return;

		// Only the deck that loads the plugin. A deck shown on a page with others, an
		// overview of decks say, should not change how those look.
		own.classList.add(DECK_CLASS);
		setColors(own, config);
		setScaling(own, config);

		// The toolkit measures the theme and keeps `--c-theme-color` matched to the
		// slide on screen, which the stylesheet follows on a slide that contrasts the
		// theme. Only the first plugin on the deck to ask does the measuring.
		const themeColors = await themeTools.addThemeColor(deck as unknown as RevealInstance);

		if (!themeColors) {
			debug.log(
				"No Reveal theme was found, so no theme colors could be read. If this deck styles itself without a theme, set `color` and `inversecolor` in the Smallcontrol options."
			);
		}
	},
};
