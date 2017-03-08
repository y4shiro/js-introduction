window.addEventListener('storage', function(e) {
  console.log('変更されたキー' + e.key);
  console.log('変更前の値' + e.oldvalue);
  console.log('変更後の値' + e.newvalue);
  console.log('発生元ページ' + e.url);
}, false);
