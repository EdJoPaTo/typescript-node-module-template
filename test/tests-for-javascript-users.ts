import test from 'ava';
import {moduleName} from '../source/index.js';

test('title', t => {
	t.throws(() => {
		// @ts-expect-error moduleName expects a string not a number
		moduleName(123);
	}, {
		message: 'Expected a string, got number',
	});
});
