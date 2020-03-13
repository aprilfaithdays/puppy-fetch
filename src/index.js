console.log("%c🐶PUPPIES ARE AMAZING!!!🐶", "color: turquoise; font-size: 20px; font-family: Monaco;")


document.addEventListener("DOMContentLoaded", function() {

    fetch("http://localhost:3000/puppies") 
    .then(resp => resp.json()) 
    .then(json => console.log(json[4]));


    fetch("http://localhost:3000/puppies") 
    .then(resp => resp.json()) 
    .then(json => console.log(`My dog is a ${json[4].breed} named ${json[4].name}. They are ${json[4].ageInMonths} months old and they are pretty ${json[4].personality} .`));




})
