'use strict';

function isObjectType(obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}

module.exports = function (o) {
	var isObject = isObjectType(o);

	if (typeof o !== 'string' && !isObject) {
		return false;
	}
	try {
		if (isObject) {
			o = JSON.stringify(o);
		}
		return JSON.parse(o) && true;
	} catch (e) {
		return false;
	}
};
