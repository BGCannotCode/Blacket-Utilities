var elements = document.getElementsByTagName('*')
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = getRandomColor()
}
function getRandomColor() {
  var _0x4e6f4b = '0123456789ABCDEF',
    _0x5287cd = '#'
  for (var _0x51cc1b = 0; _0x51cc1b < 6; _0x51cc1b++) {
    _0x5287cd += _0x4e6f4b[Math.floor(Math.random() * 16)]
  }
  return _0x5287cd
}
