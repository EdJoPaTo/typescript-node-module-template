const test = require('ava');
const moduleName = require('../dist/source');

test('title', t => {
	t.throws(() => {
		moduleName(123);
	}, {
		message: 'Expected a string, got number'
	});
});
