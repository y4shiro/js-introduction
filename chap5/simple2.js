var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Member('taro', 'yamada');
console.log(mem.getName());
