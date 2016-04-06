# happy-json :smiley:

[![Build Status](https://travis-ci.org/radiovisual/happy-json.svg?branch=master)](https://travis-ci.org/radiovisual/happy-json)

> Check if your string or object is valid JSON, or could happily be valid JSON. :smiley:

This is not a strict JSON validator (although it sort of behaves like one). If you simply want strict JSON validation, then
 there are other modules out there. What this module does is check if your object or string **is valid or could be valid** JSON,
 because sometimes your application wants to know these things in order for it to be truly happy. :smiley:


## Install

```
$ npm install --save happy-json
```


## Usage

```js
const happyAsJSON = require('happy-json');

// valid json objects
happyAsJSON({"happy": "json"});
//=> true

// valid json strings
happyAsJSON(JSON.stringify({happy: 'json'}));
//=> true

// objects that could [happily] be json
happyAsJSON({happy: 'json'});
//=> true

// rejects anything that isn't json
// or anything that couldn't be valid json
happyAsJSON('unicorns');
//=> false
```

Take a look at the [tests](https://github.com/radiovisual/happy-json/blob/master/test/test.js) for more usage examples. 

## API

### happyJson(input)

Returns `true` or `false`

#### input

Type: `string|object`

The string or object that you want to validate as JSON, or check to see if it could be valid JSON.


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
