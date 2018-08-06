# scope-of-works

> Math library for construction scope of works.

## Install

**npm**
> `npm install scope-of-works`

**yarn**
> `yarn add scope-of-works`

## Usage

**ES5**

```javascript
const area = require('scope-of-works').area;

const length = 20;
const width = 40;
const floorArea = area(length, width);

console.log(floorArea); // 800
```

**ES6**
> Treeshaking ready.

```javascript
import { area } from 'scope-of-works';

const length = 20;
const width = 40;
const floorArea = area(length, width);

console.log(floorArea); // 800
```
