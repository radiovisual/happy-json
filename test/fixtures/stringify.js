'use strict';
module.exports = function () {
	const obj = {
		a: {
			a1: [1, 2, 3, 4],
			a2: {
				b: 1234,
				c: [1, 2, 3, 4]
			}
		},
		b: "hello",
		c: [1, 2, 3],
		d: new Date(),
		e: true
	};
	return JSON.stringify(obj);
};
