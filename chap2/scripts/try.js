var i = 1;
try {
  i = j * j;
} catch(e) {
  console.log(e.message);
} finally {
  console.log('処理は終了しました。');
}
