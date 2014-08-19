[![Build Status](https://secure.travis-ci.org/OliBridgman/bespoke-timeline.png?branch=master)](https://travis-ci.org/OliBridgman/bespoke-timeline) [![Coverage Status](https://coveralls.io/repos/OliBridgman/bespoke-timeline/badge.png)](https://coveralls.io/r/OliBridgman/bespoke-timeline)

# bespoke-timeline

Timeline feature for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/OliBridgman/bespoke-timeline/master/dist/bespoke-timeline.min.js
[max]: https://raw.github.com/OliBridgman/bespoke-timeline/master/dist/bespoke-timeline.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  timeline = require('bespoke-timeline');

bespoke.from('#presentation', [
  timeline()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.timeline()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-timeline
```

### Bower

```bash
$ bower install bespoke-timeline
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
