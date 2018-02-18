// this file isn't transpile so must use common js.

//  Require babel to transpile before our test run
require('babel-register')();



// ignore css/scss
require.extensions['.css'] = function() {}