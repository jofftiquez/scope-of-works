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
import { areaRectangle } from 'scope-of-works';


const areaRectangle = require('scope-of-works').areaRectangle;
const areaTrapezoid = require('scope-of-works').areaTrapezoid;
const diskVol = require('scope-of-works').diskVol;
const blockVol = require('scope-of-works').blockVol;

// Area of a rectangle
const floorLength = 20;
const floorWidth = 40;
const floorArea = areaRectangle(floorLength, floorWidth);
console.log(floorArea); // 800

//Area of a Trapezoid
const a = 20;
const b = 30;
const h = 40
const trapezoidArea = areaTrapezoid(a, b, h);
console.log(trapezoidArea); // 1000

//Volume of a disk 
const diameter = 19;
const height = 25;
const diskVolume = diskVol(diameter, height);
console.log(diskVolume); // 7084.625
 
//Volume of a cuboid or block
const cuboidWidth = 2;
const cuboidDepth = 4;
const cuboidHeight = 6;
const cuboidFooting = 2;
const blockVolume = blockVol(cuboidWidth, cuboidHeight, cuboidDepth, cuboidFooting)
console.log(blockVolume); // 32

```
