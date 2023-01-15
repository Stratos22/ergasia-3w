function loadContent(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainContent").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

loadContent('home.html');
const navLinks = document.querySelectorAll('.nav-link'); //kanei load to periexomeno toy home.html otan protempenoyme sto site  


const currentUrl = window.location.pathname;

document.getElementById("button2").addEventListener("click", function() { //buttons for bio
  var element = document.getElementById("section1");
  element.classList.remove("hide");
  element.classList.add("show");
  var element = document.getElementById("section2");
  element.classList.remove("hide");
  element.classList.add("show");
  var element = document.getElementById("section3");
  element.classList.remove("hide");
  element.classList.add("show");
  var element = document.getElementById("section4");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section5");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section6");
  element.classList.remove("show");
  element.classList.add("hide");
});
document.getElementById("button1").addEventListener("click", function() { //buttons for home
  var element = document.getElementById("section4");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section5");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section1");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section2");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section3");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section6");
  element.classList.remove("show");
  element.classList.add("hide");
});
document.getElementById("button4").addEventListener("click", function() { //buttons for photos
  var element = document.getElementById("section3");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section1");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section2");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section4");
  element.classList.remove("hide");
  element.classList.add("show");
  var element = document.getElementById("section5");
  element.classList.remove("hide");
  element.classList.add("show");
  var element = document.getElementById("section6");
  element.classList.remove("hide");
  element.classList.add("show");
});
document.getElementById("button3").addEventListener("click", function() { //buttons for works
  var element = document.getElementById("section4");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section5");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section1");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section2");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section3");
  element.classList.remove("show");
  element.classList.add("hide");
  var element = document.getElementById("section6");
  element.classList.remove("show");
  element.classList.add("hide");
});
