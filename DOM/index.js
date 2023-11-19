document.getElementById('add-para').addEventListener('click', function(){
    let inputField = document.getElementById('new-para')
    let inputValue = inputField.value;

    let allParagraphs = document.getElementById('all-para');
    let p = document.createElement('p')
    p.innerText = inputValue;
    allParagraphs.appendChild(p)
    inputField = ''
})