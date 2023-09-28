// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import tinycolor from "tinycolor2";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} hexValue1 - e.g. #FF0000
 * @param {string} hexValue2 - e.g. #FF0000
 * @param {Big} mixPercentage
 * @returns {Promise.<string>}
 */
export async function JS_Color_Mix(hexValue1, hexValue2, mixPercentage) {
	// BEGIN USER CODE
	return tinycolor.mix(hexValue1, hexValue2, mixPercentage).toHexString(); // "#ff00ff"
	// END USER CODE
}