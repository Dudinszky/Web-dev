menu.onclick = function myFunction(){
  var hamburger = document.getElementById('myTopnav');
      if (hamburger.className === 'header__topnav') {
          hamburger.className += ' responzive';
      } else {
          hamburger.className = 'header__topnav';
      }

}