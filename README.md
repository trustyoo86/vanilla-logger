Vanilla-logger
====

The console controller in javascript using vanilla javascript (pure javascript)

version
----
1.0.0

setup
----
You can install using npm

```bash
npm install vanilla-logger --save-dev
yarn install vanilla-logger --dev
```

#### donwload source

#### import script source(HTML)

```html
<script src="path/to/vanilla-logger.js"></script>
```

#### using common js
```js
require('vanilla-logger');
```

usage
----


```js
require('vanilla-logger');

```

#### DebugMode

```js
//If you were install npm
var vLogger = require('vanilla-logger');
//If you were import html, you don't need module dependency

//set debug mode
vLogger.setDebugMode(false);

console.log('logger log'); //logger log
console.error('logger error'); //logger error
console.info('logger info'); //logger info
```


```js
//If you were install npm
var vLogger = require('vanilla-logger');
//If you were import html, you don't need module dependency

//set debug mode
vLogger.setDebugMode(false);

console.log('logger log'); //not operate
console.error('logger error'); //not operate
console.info('logger info'); //not operate
```

# License
MIT © [KernYoo](http://trustyoo86.github.io)
