const area = require('./dist').area;
const circleVol = require('./dist').circleVol;
const rectVol = require('./dist').rectVol;

console.log(require('./dist'));

try {
  console.log(area(10, 10));
  console.log(circleVol(19, 25))
  console.log(rectVol(1, 1, 1, 1))
} catch (e) {
  console.log(e.message)
}