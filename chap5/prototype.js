var Member  =function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

var mem = new Member('taro', 'yamada');
console.log(mem.getName());
var mem2 = new Member('jiro', 'tanaka');
console.log(mem2.getName());
