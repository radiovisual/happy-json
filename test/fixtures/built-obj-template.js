'use strict';
var date = new Date();
var array = [1, 2, 3, 4];
var number = 1234;
var string = "hello";
var bool = true;

module.exports = function () {
	return `"{a:{a1:${array},a2:{b:${number},c:${array}}},b:${string},c:[1,2,3],d:${date},e:${bool}}"`;
};
