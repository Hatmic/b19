function calculateRKS() {
    var fixedNumber = parseFloat(document.getElementById('fixedNumber').value);
    var acc = parseFloat(document.getElementById('acc').value);
    if (!isNaN(fixedNumber) && !isNaN(acc)) {
      var rks = fixedNumber * ((acc - 55) / 45);
      document.getElementById('result').innerText = '单曲 RKS: ' + rks.toFixed(2);
    } else {
      document.getElementById('result').innerText = '请输入有效的数字';
    }
  }