# Springer
A spring that generates realistic easing functions

<a href="https://travis-ci.org/tannerlinsley/springer" target="\_parent">
  <img alt="" src="https://travis-ci.org/tannerlinsley/springer.svg?branch=master" />
</a>
<a href="https://npmjs.com/package/springer" target="\_parent">
  <img alt="" src="https://img.shields.io/npm/dm/springer.svg" />
</a>
<a href="https://react-chat-signup.herokuapp.com/" target="\_parent">
  <img alt="" src="https://img.shields.io/badge/slack-react--chat-blue.svg" />
</a>
<a href="https://github.com/tannerlinsley/springer" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/tannerlinsley/springer.svg?style=social&label=Star" />
</a>
<a href="https://twitter.com/tannerlinsley" target="\_parent">
  <img alt="" src="https://img.shields.io/twitter/follow/tannerlinsley.svg?style=social&label=Follow" />
</a>
<a href="https://cash.me/$tannerlinsley" target="\_parent">
  <img alt="" src="https://img.shields.io/badge/%24-Donate-brightgreen.svg" />
</a>

## Features

- **1 kb!** (minified)
- Tension & Wobble parameters
- No dependencies
- Compatible with any animation library

## Demo
- [Greensock + Springer (Codepen)](http://codepen.io/tannerlinsley/pen/MmyMEK)
- [React-Move + Springer Playground (Codepen)](http://codepen.io/tannerlinsley/pen/VbayBw?editors=0010)

## Installation
```bash
$ yarn add springer
# or
$ npm install springer --only=dev
```
##### CDN
```html
<script src='https://unpkg.com/springer@latest/springer.js'></script>
```

## Usage
- `springer(tension, wobble)`
  - `tension`
    - The percentage of force the spring has before release.
    - Min: `0`
    - Max: `1`
    - Default: `0.5`
  - `wobble`
    - The percentage of wobble, or malleability the spring exhibits
    - Min: `0`
    - Max: `1`
    - Default: `0.5`
- Returns an spring-based easing function

## Example
```javascript
import springer from 'springer'

const spring = springer(0.5, 0.8)

console.log(spring(0))   // 0
console.log(spring(0.2)) // 0.80516
console.log(spring(0.4)) // 1.01897
console.log(spring(0.6)) // 1.00010
console.log(spring(0.8)) // 0.99974
console.log(spring(1))   // 1
```

## Contributing
To suggest a feature, create an issue if it does not already exist.
If you would like to help develop a suggested feature follow these steps:

- Fork this repo
- `$ yarn`
- Implement your changes to files in the `src/` directory
- Submit PR for review

#### Scripts

- `$ yarn run test` Runs the test suite
- `$ yarn run prepublish` Builds for NPM distribution

## Used By

<a href='https://nozzle.io' target="\_parent">
  <img src='https://nozzle.io/img/logo-blue.png' alt='Nozzle Logo' style='width:300px;'/>
</a>
