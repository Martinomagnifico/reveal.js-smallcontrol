import "../css/index.scss";

// Basic imports
import type { RevealApi } from "reveal.js";
// Helper imports
import { pluginDebug as debug, PluginBase, pluginCSS, warnOnce } from "reveal.js-plugintoolkit";
import type { Config } from "./config";
import { defaultConfig, PLUGIN_ID } from "./config";
// Function imports
import { Smallcontrol } from "./main";

const init = async (plugin: PluginBase<Config>, deck: RevealApi, config: Config): Promise<void> => {
	if (debug && config.debug) {
		debug.initialize(true, PLUGIN_ID);
	}

	// Removed in 1.1.0: Smallcontrol only ever styles its own deck now. `true` was
	// that already, so only `false` asks for something that no longer happens.
	if ((plugin.userConfig as Record<string, unknown>).thisdeckonly === false) {
		warnOnce(
			PLUGIN_ID,
			"`thisdeckonly` has been removed. Smallcontrol only styles the deck it is loaded in; add the plugin to every deck that should have small controls."
		);
	}

	await pluginCSS(plugin, config);
	await Smallcontrol.create(deck, config);
};

export default () => {
	const plugin = new PluginBase(PLUGIN_ID, init, defaultConfig);
	return plugin.createInterface();
};

export type { Config } from "./config";
