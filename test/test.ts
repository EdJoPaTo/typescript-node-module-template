import test from 'ava';
import {moduleName} from '../source/index.js';

test('title', t => {
	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
