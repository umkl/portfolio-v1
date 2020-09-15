var mockProcess = new (require('events').EventEmitter)()
mockProcess.nextTick = process.nextTick
mockProcess.hrtime = function (last) {
  var now = typeof performance !== 'undefined' && performance.now ?
    performance.now() : +new Date
  return [now / 1e3 - (last && last[0] || 0), 0]
}
var origSetTimeout = setTimeout
var test = require('tape-catch-onerror')
test('test-timers-first-fire.js', function (tape) {
  var process = mockProcess
  var timers = require('../timers')
  var setTimeout = timers.setTimeout
  var clearTimeout = timers.clearTimeout
  var setInterval = timers.setInterval
  var clearInterval = timers.clearInterval
  var setImmediate = timers.setImmediate
  var clearImmediate = timers.clearImmediate


// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// var common = require('../common');
var assert = require('assert');

var TIMEOUT = 50;
var last = process.hrtime();
setTimeout(function() {
  var hr = process.hrtime(last);
  var ms = (hr[0] * 1e3) + (hr[1] / 1e6);
  var delta = ms - TIMEOUT;
//   console.log('timer fired in', delta);
  assert.ok(delta > -0.001, 'Timer fired early');
}, TIMEOUT);




  origSetTimeout(function () {
    process.emit('exit')
    tape.pass()
    tape.end()
  }, 250)
})
