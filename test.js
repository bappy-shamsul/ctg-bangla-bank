let mainPert = document.getElementById('abc-sec');
// console.log(mainPert)
let newSection = document.createElement('section');
newSection.innerHTML = `
<h1> My name is Khan </h1>
<ul>
<li> love</li>
<li> prem </li>
</ul>
`
console.log(mainPert.appendChild(newSection))