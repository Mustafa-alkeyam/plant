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



// var addToCart = document.getElementById("addToCart")
// var imgSrc = document.querySelector('.card .card-img-top').src;
// var title = document.querySelector('.card .card-title').textContent;
// var text = document.querySelector('.card .card-text').textContent;

// addToCart.addEventListener('submit',function(e){
//     e.preventDefault{}
//     localStorage.setItem('addToCart' ,)
// })


