function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値: ${value}`);
      } else {
        reject('入力は空です');
      }
    }, 500);
  });
}

Promise.race([
  asyncProcess('1'),
  asyncProcess('2'),
  asyncProcess('3')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー: ${error}`);
  }
);
