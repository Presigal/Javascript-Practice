var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

console.log(headOne)

headOne.addEventListener('mouseover', function(){
  headOne.textContent = "Mouse currently over";
  headOne.style.color = 'red';
})
headOne.addEventListener('mouseout', function() {
  headOne.textContent = "HOVER OVER ME";
  headOne.style.color = 'black';
})

headTwo.addEventListener('click', function(){
  headTwo.textContent = "clicked!";
  headTwo.style.color = 'red';
})
