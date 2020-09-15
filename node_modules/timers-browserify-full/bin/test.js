#!/usr/bin/env node

/*
This file is from https://github.com/feross/buffer/blob/master/bin/test.js
with minor modifications.

The MIT License (MIT)

Copyright (c) Feross Aboukhadijeh, and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var cp = require('child_process')

var runBrowserTests = !process.env.TRAVIS_PULL_REQUEST ||
  process.env.TRAVIS_PULL_REQUEST === 'false'

// http://stackoverflow.com/a/17537559
var npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

var node = cp.spawn(npm, ['run', 'test-node'], { stdio: 'inherit' })
node.on('close', function (code) {
  if (code === 0 && runBrowserTests) {
    var browser = cp.spawn(npm, ['run', 'test-browser'], { stdio: 'inherit' })
    browser.on('close', function (code) {
      process.exit(code)
    })
  } else {
    process.exit(code)
  }
})
