var collection = document.getElementsByClassName("clicknav");

var showNavMobile = function() {
    var nav = document.getElementById("smallnav");
    if (nav.style.display == "none"){
        nav.style.display = "flex"
    }
    else{
        nav.style.display = "none"
    }

};

Array.from(collection).forEach(function(element) {
    element.addEventListener('click', showNavMobile);
  });