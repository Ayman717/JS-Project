let nav = document.getElementById("nav")
let btnNav = document.querySelector(".btn-nav")

btnNav.addEventListener("click",function(){
    let drop = document.querySelector(".drop-nav")
    drop.classList.toggle("d-block");
})


// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display="block";
}



// let categories=[section8,section10,section11,section12,section13,section14,
//     section15,section16,section17,section18,section19,section20,section21,section22];
    
//   function allCategory(){
//     section7.innerHTML="";
//    for(let i=0;i<categories.length;i++){
//     section7.append(categories[i]);
  
//   }
//   }


/////////======================== filter categories=========================/////////////
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card ");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("four-buttons");
var btns = btnContainer.getElementsByClassName("four-btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


let buy = document.querySelectorAll(".card #cack-btn")
console.log(buy);
// let undo = document.querySelectorAll(".cards .btn-undo")
// console.log(undo);
let sum = 0 ;
for(let i = 0 ; i < buy.length ; i++){
    buy[i].addEventListener("click",function(){
      // alert("hello  ")
        sum++
        // buy[i].setAttribute("disabled",true)

        
        // buy[i].style.backgroundColor = "#929692"; 
        document.querySelectorAll(".count")[0].innerHTML = sum 
        document.querySelectorAll(".count")[0].style.display = "block"; 
        document.querySelectorAll(".count")[1].innerHTML = sum 
        document.querySelectorAll(".count")[1].style.display = "block"; 
        undo[i].style.display = "inline"; 
        
    })
};
// for(let i = 0 ; i < undo.length ; i++){
//     undo[i].addEventListener("click",function(){
//         sum--
//         buy[i].removeAttribute("disabled")
//         undo[i].style.display = "none"; 

        
//         buy[i].style.backgroundColor = ""; 
//         document.querySelectorAll(".count")[0].innerHTML = sum 
//         document.querySelectorAll(".count")[1].innerHTML = sum 
//         if(sum == 0){
//             document.querySelectorAll(".count")[0].style.display = "none"; 
//             document.querySelectorAll(".count")[1].style.display = "none"; 

//         }
        
//     })
// };
