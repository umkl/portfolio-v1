Array.prototype.forEach||(Array.prototype.forEach=function(r,t){var o,n;if(null==this)throw new TypeError("this is null or not defined");var e=Object(this),i=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(o=t),n=0;i>n;){var a;n in e&&(a=e[n],r.call(o,a,n,e)),n++}});
var mockProcess = new (require('events').EventEmitter)()
mockProcess.nextTick = process.nextTick
mockProcess.hrtime = function (last) {
  var now = typeof performance !== 'undefined' && performance.now ?
    performance.now() : +new Date
  return [now / 1e3 - (last && last[0] || 0), 0]
}
var origSetTimeout = setTimeout
var test = require('tape-catch-onerror')
test('test-timers.js', function (tape) {
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

var inputs = [
  undefined,
  null,
  true,
  false,
  '',
  [],
  {},
  NaN,
  +Infinity,
  -Infinity,
  (1.0 / 0.0),      // sanity check
  parseFloat('x'),  // NaN
  -10,
  -1,
  -0.5,
  -0.0,
  0,
  0.0,
  0.5,
  1,
  1.0,
  10,
  2147483648,     // browser behaviour: timeouts > 2^31-1 run on next tick
  12345678901234  // ditto
];

var timeouts = [];
var intervals = [];

inputs.forEach(function(value, index) {
  setTimeout(function() {
    timeouts[index] = true;
  }, value);

  var handle = setInterval(function() {
    clearInterval(handle); // disarm timer or we'll never finish
    intervals[index] = true;
  }, value);
});

process.on('exit', function() {
  // assert that all timers have run
  inputs.forEach(function(value, index) {
    assert.equal(true, timeouts[index]);
    assert.equal(true, intervals[index]);
  });
});




  origSetTimeout(function () {
    process.emit('exit')
    tape.pass()
    tape.end()
  }, 210)
})
