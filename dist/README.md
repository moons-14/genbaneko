[![CICD](https://github.com/moons-14/genbaneko/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/moons-14/genbaneko/actions/workflows/release.yml)
[![npm version](https://badge.fury.io/js/genbaneko.svg)](https://badge.fury.io/js/genbaneko)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Genbaneko

Let's display "Yoshi!" on the console.
When the code just won't work, when debugging is too tedious, this makes everything better! (It won't).

\*Do not use it in a serious place.
This "Yoshi!" may be a flag that something bad is about to happen!

```
　　　 ∧　　/ヽ
　　　/／￣￣＼|
　　 ∠＿╋＿＿〉
　　/　①八①　ヽ ＿
　 工ﾆf(_人_)ｴ二|′)ヽ
　　＼ヽヽノノ ノ ヘ |
⊂⌒)_＞―――′イ (＿)
　`ー､_ノ/￣ヽ　｜
　　 ＿|｜　 |　｜
　　(　 人＿ノ　Λ
　　 ＼ス￣￣ﾚ-Λ ＼
　　(￣　)　/ /　＼ﾉ＼
　　 ￣￣　(　ヽ　 ＼_)
　　　　　　＼ノ
```

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.11.0
v16.16.0
```

## Table of contents

- [Genbaneko](#Genbaneko)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [ToDo](#ToDo)
  - [Credits](#credits)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install genbaneko
```

Or if you prefer using Yarn:

```sh
$ yarn add genbaneko
```

## Usage

```javascript
import { genbaneko } from 'genbaneko';
// or
const genbaneko = require('genbaneko');

genbaneko();
```

That's all there is to it.
Pull requests to add other kinds of "genbaneko" are welcome!
See [ToDo](#ToDo) for features we would like to add.

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## ToDo

- Addition of "doushite"
- Make the character speak
- Colorful cats

## Contact us

- Twitter:[moons_sub](https://twitter.com/moons_sub)

- Discord:moons#7204

## Credits

I wrote README.md with reference to [this](https://gist.github.com/andreasonny83/7670f4b39fe237d52636df3dec49cf3a#building-a-distribution-version)

## Authors

**moons14** - [moons-14](https://github.com/moons-14)

## License

[MIT License](https://andreasonny.mit-license.org/2022) © 2022 moons14
