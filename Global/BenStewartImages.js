javascript:(function() {
  var images = document.getElementsByTagName('img');
  var imgURL = 'https://cdn.discordapp.com/attachments/965434104365608960/1091840803015491676/252d6c0a-868e-4e4d-b5ec-3f096fa8499e.png'; // Bean stew face lmao
  for (var i = 0; i < images.length; i++) {
    images[i].src = imgURL;
  }
})();
