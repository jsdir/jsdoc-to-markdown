'use strict'
var test = require('tape')
var jsdoc2md = require('../')

var inputFile = 'test/fixture/input/globals/ignore.js'

test('simple, no options', function (t) {
  t.plan(1)

  jsdoc2md({ src: inputFile }).on('readable', function () {
    var md = this.read()
    if (md) t.ok(/a visible global/.test(md.toString()))
  })
})

test('json option', function (t) {
  t.plan(1)

  jsdoc2md({ src: inputFile, json: true }).on('readable', function () {
    var md = this.read()
    if (md) t.ok(/"id": "visible"/.test(md.toString()))
  })
})
