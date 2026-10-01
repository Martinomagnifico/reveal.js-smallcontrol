export const PLUGIN_ID = "smallcontrol";

/** The class that switches the small controls on for a deck. */
export const DECK_CLASS = "smallcontrol";

/** The class that lets the controls grow with the deck. */
export const AUTOSCALE_CLASS = "smallcontrol-autoscale";

/** The custom properties the `color` and `inversecolor` options are written to. */
export const COLOR_VAR = "--smallcontrol-color";
export const INVERSE_COLOR_VAR = "--smallcontrol-color-inverted";

/** The custom property the `maxscale` option is written to. */
export const MAXSCALE_VAR = "--smallcontrol-maxscale";

export interface Config {
	/** The controls' colour. Empty follows the theme, which colours them like its links. */
	color: string;
	/** The controls' colour on a slide whose background contrasts the theme. Empty follows the theme's own text colour for such a slide. */
	inversecolor: string;
	/** Let the controls grow with the deck when Reveal draws it larger, as it does on a big screen. Never smaller than Reveal's own size. */
	autoscale: boolean;
	/** How large `autoscale` lets the controls get, as a multiple of Reveal's own size. */
	maxscale: number;
	cssautoload: boolean | "auto";
	csspath: string | false;
	debug?: boolean;
}

export const defaultConfig: Config = {
	color: "",
	inversecolor: "",
	// Off, so that decks made before it look as they always have.
	autoscale: false,
	maxscale: 2,
	cssautoload: "auto",
	csspath: "",
	debug: false,
};
