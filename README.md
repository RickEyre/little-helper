little-helper
=============

[![Build Status](https://travis-ci.org/RickEyre/little-helper.svg?branch=master)](https://travis-ci.org/RickEyre/little-helper) [![npm-version](http://img.shields.io/npm/v/little-helper.svg)](https://www.npmjs.org/package/little-helper) [![Dependency Status](https://david-dm.org/RickEyre/little-helper.svg?theme=shields.io)](https://david-dm.org/RickEyre/little-helper) [![devDependency Status](https://david-dm.org/RickEyre/little-helper/dev-status.svg?theme=shields.io)](https://david-dm.org/RickEyre/little-helper#info=devDependencies)

A command line utility written for `Nodejs` that automates all kinds of
repetitive tasks that a developer might find themselves doing a lot.

Install
=======

```bash
$ npm install -g little-helper
```

Usage
=======

Little-helper is planned to help with a number of different tasks in the future.
Right now it only does a few tasks with `git`.

###Git###

Specify the `-g` option to tell `little-helper` that you want it to do something
with `git`.

####-gu [-o] [--upstream=my-upstream]####

Fetches the specified remote's master branch and rebases the active local branch
against it. Specify the `-o` option to use `origin` as the remote, alternatively
use `--upstream` to specify the remote. The default remote to use if `-o` and
`--upstream` are not used is `upstream`.


####Default Git Aliases####

Little-helper also manages a bunch of default `git` aliases for you via a
[git.mappings.json](https://github.com/RickEyre/little-helper/tree/master/assets/mappings/git.mappings.json)
file. If you'd like more information on how to use those aliases see how `mapping.json`
files work by reading the [command-mapper documentation](https://github.com/RickEyre/command-mapper#mapping-object).

For example:

```bash
$ little-helper g d -h2
```

Would run `git diff HEAD~2`. Better documentation will be coming in the future on how
this works as well.

There are plans to allow customization of this and more aliases in the future, so stay tuned.

####Other Default Aliases####

There are also now default aliases for `npm` and `mocha`. Check the
[mappings directory](https://github.com/RickEyre/little-helper/tree/master/assets/mappings)
for more information and read abovie (git mappings).

License
=======
[MIT](https://github.com/RickEyre/little-helper/blob/master/LICENSE)
