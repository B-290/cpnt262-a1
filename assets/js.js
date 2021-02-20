const button = document.getElementsByClassName('.togle');

const classList = document.getElementsByClassName('.dropdown');

document.addEventListener('click', function(){
 //event declaration

button.className = 'togle';
//get button by className
console.log(button);


togle.classList.remove("dropdown");
togle.classList.add("dropdown");

togle.classList.toggle("visible");

//toggle to remove if visible

console.log(classList);

//the target classList "dropdown"
console.log(togle.classList.contains("dropdown"));

});


























