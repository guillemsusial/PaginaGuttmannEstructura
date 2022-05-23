
function reveal() {

  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    
    var windowHeightT = window.innerHeight;
    
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementBottom =reveals[i].getBoundingClientRect().bottom;
    var elementVisibleT = 6;
    var elementVisibleB = 1;   
   
    
    if (elementTop < windowHeightT - elementVisibleT ) {
      
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }

   if (elementBottom < windowHeightT - elementVisibleB) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.onload = reveal();

window.addEventListener("scroll", reveal);

