import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});

// document.getElementsByClassName("nav-link").addEventListener("mouseover",mouseOver);
// document.getElementsByClassName("nav-link").addEventListener("mouseout",mouseOut);
// function mouseOver() {
//     document.getElementsByClassName("nav-link").style.color = "red";
//   }
//   function mouseOut() {
//     document.getElementsByClassName("nav-link").style.color = "black";
//   }

document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.getElementsByClassName("nav-link");

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseover", mouseOver);
        navLinks[i].addEventListener("mouseout", mouseOut);
    }
    function mouseOver() {this.style.color = "red";}
    function mouseOut() {this.style.color = "black";}
});


