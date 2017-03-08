function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '引数radiusは正数でなければいけません。');
  return radius * radius * Math.PI;
}

console.log(circle(1));
console.log(circle(5));
console.log(circle(-5));
