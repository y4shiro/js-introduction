var Animal = function() {};

Animal.prototype = {
  walk : function() {
    console.log('トコトコ...');
  }
};

var Dog = function() {
  Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('ワンワン!');
}

var d = new Dog();
d.walk();
d.bark();

var Cat = function() {
  Animal.call(this);
};
Cat.prototype = new Animal();
Cat.prototype.bark = function() {
  console.log('ニャーン');
}

var c = new Cat();
c.walk();
c.bark();

var Serval = function() {
  Cat.call(this);
};
Serval.prototype = new Cat();
Serval.prototype.talk = function() {
  console.log('サーバルだよ!');
}

var s = new Serval();
s.walk();
s.bark();
s.talk();
