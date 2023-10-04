var All = document.getElementById("All");
var Rosaceae = document.getElementById("Rosaceae");
var Rutaceae = document.getElementById("Rutaceae");
var Forest = document.getElementById("Forest");
var RosaceaeId = document.getElementById("RosaceaeId");
var RutaceaeId = document.getElementById("RutaceaeId");
var ForestId = document.getElementById("ForestId");

All.addEventListener("click", function() {
    RosaceaeId.style.display = "block";
    RutaceaeId.style.display = "block";
    ForestId.style.display = "block";
});

Rosaceae.addEventListener("click", function() {
    RosaceaeId.style.display = "block";
    RutaceaeId.style.display = "none";
    ForestId.style.display = "none";
});

Rutaceae.addEventListener("click", function() {
    RosaceaeId.style.display = "none";
    RutaceaeId.style.display = "block";
    ForestId.style.display = "none";
});


Forest.addEventListener("click", function() {
    RosaceaeId.style.display = "none";
    RutaceaeId.style.display = "none";
    ForestId.style.display = "block";
});





// document.addEventListener("DOMContentLoaded", function() {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");

//     addToCartButtons.forEach(button => {
//       button.addEventListener("click", function() {
//         const card = this.closest(".card");
//         const imgSrc = card.querySelector(".card-img-top").getAttribute("src");
//         const title = card.querySelector(".card-title").textContent;
//         const text = card.querySelector(".card-text").textContent;

//         const item = {
//           img: imgSrc,
//           title: title,
//           text: text
//         };

//         // Add the 'item' object to your shopping cart or perform other actions here
//         console.log("Added to cart:", item);
//       });
//     });
//   });