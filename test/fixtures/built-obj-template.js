'use strict';
const date = new Date();
const array = [1, 2, 3, 4];
const number = 1234;
const string = "hello";
const bool = true;

module.exports = function () {
	return `"{\"a\":{\"a1\":${array},\"a2\":{\"b\":${number},\"c\":${array}}},\"b\":\"${string}\",\"c\":[1,2,3],\"d\":\"${date}\",\"e\":${bool}"`;
};
