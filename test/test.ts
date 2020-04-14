import test from 'ava';
import moduleName from '../source';

test('title', t => {
	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
