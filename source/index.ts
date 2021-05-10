export default function moduleName(input: string): string {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input + ' & rainbows';
}

// For CommonJS default export support
/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-unsafe-member-access */
module.exports = moduleName;
module.exports.default = moduleName;
/* eslint-enable */
