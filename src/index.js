/**
  Write your ES6 shits here, you can 
  remove the sample codes below.
  The code below is just an example,
  do not limit your code just by following
  the stupid sample below.
*/

export default class Cat {
  constructor(name) {
    this.name = name;
  }

  talk () {
    console.log(`Cats can't talk... or do they?`);
  }

  meow () {
    console.log(`${ this.name } says 'meow bitch!'`);
  }

  walk () {
    console.log(`${ this.name } is too lazy to walk.`);
  }

  sleep (n) {
    console.log(`${ this.name } will wake up in ${ n } seconds.`);
    setTimeout(() => {
      console.log(`${ this.name } is now awake! Prepare the food!`);
    }, n * 1000);
  }

  feed (food) {
    if(food === 'fish') {
      console.log(`${ this.name } is happily eating ${ food }.`);
      return;
    }
    console.log(`${ this.name } doesn't want to eat ${ food }.`);
  }
}