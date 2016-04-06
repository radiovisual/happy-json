import test from 'ava';
import isJSON from '../';

const nodeVersion = require('node-ver')().major;

const stringified = require('./fixtures/stringify.js')();
const simplejson = require('./fixtures/simple.json');
const complexjson = require('./fixtures/complex.json');
const builtobjstring = require('./fixtures/built-obj-string.js')();
const regularobject = require('./fixtures/regular-object.js')();

test('rejects invalid values', t => {
	t.is(isJSON([]), false);
	t.is(isJSON(new Date()), false);
	t.is(isJSON(true), false);
	t.is(isJSON(false), false);
	t.is(isJSON(() => {}), false);
	t.is(isJSON(100), false);
	t.is(isJSON(100.0), false);
	t.is(isJSON(0), false);
	t.is(isJSON(-100), false);
	t.is(isJSON(-100.0), false);
	t.is(isJSON(Infinity), false);
	t.is(isJSON(null), false);
	t.is(isJSON(undefined), false);
});

test('reject empty strings', t => {
	t.is(isJSON(''), false);
	t.is(isJSON('        '), false);
});

test('accepts empty objects', t => {
	t.is(isJSON({}), true);
});

test('accepts stringified JSON', t => {
	t.is(isJSON(stringified), true);
});

test('accepts simple JSON files', t => {
	t.is(isJSON(simplejson), true);
});

test('accepts complex JSON files', t => {
	t.is(isJSON(complexjson), true);
});

test('accepts built object strings', t => {
	t.is(isJSON(builtobjstring), true);
});

test('accepts objects that could be valid json', t => {
	t.is(isJSON(regularobject), true);
});

if (nodeVersion >= 4) {
	test('accepts built template strings', t => {
		const templateobj = require('./fixtures/built-obj-template.js')();
		t.is(isJSON(templateobj), true);
	});
}
