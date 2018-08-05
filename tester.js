const Cat = require('./dist').default;

const cat = new Cat('Kidlat');

cat.talk();
cat.meow();
cat.walk();
cat.sleep(3);
cat.feed('fish');
cat.feed('dog food');