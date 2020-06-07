import test from 'ava';
import moduleName from '../source';

test('title', t => {
	t.throws(() => {
		// @ts-expect-error
		moduleName(123);
	}, {
		message: 'Expected a string, got number'
	});
});
