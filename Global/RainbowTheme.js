var elements = document.getElementsByTagName('*')
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = getRandomColor()
}

function getRandomColor() {
  var topick = '0123456789ABCDEF',
    hex = '#'
  for (var i = 0; i < 6; i++) {
    hex += topick[Math.floor(Math.random() * 16)]
  }
  return hex
}
