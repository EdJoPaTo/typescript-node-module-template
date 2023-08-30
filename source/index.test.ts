import test from 'ava';
import {moduleName} from './index.js';

test('simple string input', t => {
	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});

test('javascript users without typings get error on number', t => {
	t.throws(() => {
		// @ts-expect-error moduleName expects a string not a number
		moduleName(123);
	}, {
		message: 'Expected a string, got number',
	});
});
