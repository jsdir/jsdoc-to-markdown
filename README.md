[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/jsdoc-to-markdown.svg?branch=next)](https://travis-ci.org/75lb/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-to-markdown.svg)](https://david-dm.org/75lb/jsdoc-to-markdown)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-32/jsdoc-to-markdown/README.md?pixel)

***This documentation is a work-in-progress***

# jsdoc-to-markdown
[jsdoc](http://usejsdoc.org) documented source code in, markdown format API documentation out. 

## Synopsis
write documented code:
```js
/**
a quite wonderful function
@param {object} - privacy gown
@param {object} - security
@returns {survival}
*/
function protection(cloak, dagger){}
```

run a command:
```
$ jsdoc2md example/src/protection.js
```

get markdown docs! (in [github-flavored-markdown](https://help.github.com/articles/github-flavored-markdown/) format by default)
```handlebars
<a name="protection"></a>
##protection(cloak, dagger) ⇒ <code>survival</code>
a quite wonderful function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | privacy gown |
| dagger | <code>object</code> | security     |
```

this command achieves the same result: 
```sh
$ jsdoc-parse example/function.js | dmd
```
## Features

- Insert API documention into a README, or any arbitrary document.
- Customisable to a granular level. If the output doesn't suit you, change it.
- Package your modifications, publish to npm and share with others
- Also documents javascript within html input files (experimental - [more](https://github.com/jsdoc2md/jsdoc-parse/tree/next))
- Extends the jsdoc with some new tags ([more](https://github.com/jsdoc2md/jsdoc-parse/tree/next))

## Example output
Some example output creating using `jsdoc2md`.

### Generated README files
These projects insert jsdoc2md output into a readme template. 

<table>
  <thead>
    <tr><th>Project</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/75lb/handbrake-js">handbrake-js</a></td>
      <td>
        <p>A module exposing two methods and an inner class. The API docs are inserted into <a href="https://github.com/75lb/handbrake-js/tree/master/jsdoc2md">this README template</a> by this command: <br>
        <code>$ jsdoc2md --template jsdoc2md/README.hbs lib/*.js</code></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/array-tools">array-tools</a></td>
      <td>Very simple module exporting a collection of static methods. Demonstrates use of <code>@typicalname</code> (set to <code>a</code>) and the <code>@category</code> tag to group identifiers in the member-list.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/file-set">file-set</a></td>
      <td>Simple module exporting a class.</td>
    </tr>
  </tbody>
</table>

### Tags
You can see an example of how each [jsdoc tag](http://usejsdoc.org) looks when rendered [here](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/tags).

### Examples demonstrating various options

To get an idea of the affects the various options have: 

- [formatting options](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/options/formatting%20options)
  - [module-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/module-index-format/readme.md)
  - [global-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/options/formatting%20options/global-index-format)
  - [member-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/member-index-format/readme.md)
  - [param-list-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/param-list-format/readme.md)
  - [property-list-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/property-list-format/readme.md)
  - [no-gfm](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/no-gfm/readme.md)
  - [separators](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/separators/readme.md)
  - [name format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/next/example/options/formatting%20options/name-format/readme.md)
- [parse options](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/options/parse%20options)
  - [html](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/options/html%20input)
  - [sort-by](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/options/parse%20options/sort-by)

### Scripting examples
If you can't achieve what you need using the command-line tool you can write a custom script.

- [generate one markdown file per class in your documentation](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/scripting/output-file-per-class)

### Templating examples
The default jsdoc2md output might not always suit you. You can supply your using own template using the `template` option. 

#### Selectors
- Cherry-pick which documentation appears in the output using [selector helpers](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/templating/selector%20helpers).
  - [{{#module}}](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/templating/selector%20helpers/module)
  - [{{#class}}](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/next/example/templating/selector%20helpers/class)

## Install and use
First, document your source code using [correct jsdoc syntax](http://usejsdoc.org) then run it through jsdoc-to-markdown using one of the following methods.

### Compatible Platforms
All these methods are tested on Mac OSX, Linux, Windows 8.1 and Windows XP.

### Command-line tool
To install the `jsdoc2md` command-line tool globally, run:
```
$ npm install -g jsdoc-to-markdown
```

Some typical use cases: 

```sh
$ # dump everything you have into a single file
$ jsdoc2md "src/**/*.js" > api.md
```

```sh
$ # split into separate files
$ jsdoc2md src/main-module.js > main-module.md
$ jsdoc2md src/important-class.js > important-class.md
```

```sh
$ # embed documentation into a template you made
$ jsdoc2md "src/**/*.js" --template readme.hbs > README.md
```

#### Note on globbing
General rule: if your file expression contains `**` yet recursion is failing wrap the expression in quotes, e.g. `"lib/**/*.js"`.

If wrapped in quotes, bash (or your shell) will not attempt file-name expansion on the expression. If you do not use quotes you will require bash version 4+ with globstar enabled for recursion to work. 

### Bundled with your project
#### As an `npm run` task
```sh
$ npm install jsdoc-to-markdown --save-dev
```

Then, in the `"scripts"` section of `package.json`, add a `docs` task. For example:
```json
{
  "scripts": {
    "docs": "jsdoc2md lib/*.js > api.md"
  }
}
```
Now, project documentation is generated like so:

```sh
$ npm run docs
```

#### As a grunt plug-in
See [grunt-jsdoc-to-markdown](https://github.com/jsdoc2md/grunt-jsdoc-to-markdown).

#### As a gulp task
Currently, the most reliable and natural way of using jsdoc2md with gulp. If your source code contains `@module` tags, use this method *only* ([reason](https://github.com/jsdoc2md/gulp-jsdoc-to-markdown#warning)). You should only need to edit `src`, `dest` and `options`: 

```js
var jsdoc2md = require("jsdoc-to-markdown");
var gutil = require("gulp-util");
var fs = require("fs");

gulp.task("docs", function(done){
    var src = "lib/**/*.js";
    var dest = "api.md";
    var options = {};
    
    gutil.log("writing documentation to " + dest);
    return jsdoc2md.render(src, options)
        .on("error", function(err){
            gutil.log(gutil.colors.red("jsdoc2md failed"), err.message);
        })
        .pipe(fs.createWriteStream(dest));
});
```

#### As a gulp plug-in
See [gulp-jsdoc-to-markdown](https://github.com/jsdoc2md/gulp-jsdoc-to-markdown).

## Contributing
Issue reports and patches are encouraged. And the project would benefit from an additional maintainer.. 

### Composition
Essentially, it connects the output of [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) to the input of [dmd](https://github.com/jsdoc2md/dmd). dmd uses the [ddata](https://github.com/jsdoc2md/ddata) helper library (also shared by [dhtml](https://github.com/jsdoc2md/dhtml)) and [stream-handlebars](https://github.com/75lb/stream-handlebars) to generate the output. 

## API Reference
**Example**  
```js
var jsdoc2md = require("jsdoc-to-markdown");
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
  * _static_
    * [.render(src, options)](#module_jsdoc-to-markdown.render) ⇒ <code>[Transform](https://nodejs.org/api/stream.html#stream_class_stream_transform)</code>
  * _inner_
    * [~renderOptions](#module_jsdoc-to-markdown..renderOptions) : <code>object</code>

<a name="module_jsdoc-to-markdown.render"></a>
### jsdoc2md.render(src, options) ⇒ <code>[Transform](https://nodejs.org/api/stream.html#stream_class_stream_transform)</code>
Transforms jsdoc into markdown documentation.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Params**

- src <code>string</code> | <code>Array.&lt;string&gt;</code> - The javascript source file(s).  
- options <code>[renderOptions](#module_jsdoc-to-markdown..renderOptions)</code> | <code>[parseOptions](#module_jsdoc-parse--parse..parseOptions)</code> - the options  

**Example**  
Two ways to use `render`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md.render()).pipe(process.stdout);
```
<a name="module_jsdoc-to-markdown..renderOptions"></a>
### jsdoc2md~renderOptions : <code>object</code>
**Kind**: inner typedef of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| template | <code>string</code> | A custom handlebars template to insert the rendered documentation into. |
| heading-depth | <code>number</code> | root heading depth, defaults to 1 (`#`) |
| plugin | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | Use an installed package containing helper and/or partial overrides |
| helper | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | handlebars helper files to override or extend the default set |
| partial | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | handlebars partial files to override or extend the default set |
| module-index-format | <code>string</code> | - |
| global-index-format | <code>string</code> | - |
| param-list-format | <code>string</code> | - |
| property-list-format | <code>string</code> | - |
| member-index-format | <code>string</code> | - |
| group-by | <code>Array.&lt;string&gt;</code> | - |

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
