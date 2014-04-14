little-helper
=============

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

License
=======
[MIT](https://github.com/RickEyre/little-helper/blob/master/LICENSE)
