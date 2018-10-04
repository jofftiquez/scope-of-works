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
// ES 5
const area = require('scope-of-works').areaRectangle;

// or ES 6 - Treeshaking ready.
import { area } from 'scope-of-works';

const length = 20;
const width = 40;
const floorArea = area(length, width);

console.log(floorArea); // 800
```

## Available functions
| name                                                    | params                              |description                                |
| ------------------------------------------------------- | ------------------------------------|-------------------------------------------|
| [areaRectangle](src/modules/area/rectangle/rectangle.js)| length, Width                       |Calculate the area of a Rectangle.         |
| [areaTrapezoid](src/modules/area/trapezoid/trapezoid.js)| a, b, height                        |Calculate the area of a trapezoid.         |
| [diskVol](src/modules/volume/disk/disk.js)              | diameter, height                    |Calculate the volume of a disk.            |
| [blockVol](src/modules/volume/block/block.js)           | lengthX, lengthY, thickness, footing|Calculate the volume of a rectangular box  |


