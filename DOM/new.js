document.getElementById('add-para').addEventListener('click', function(){
    let fieldData = document.getElementById('new-para')
    let fieldValue = fieldData.value;
    // console.log(fieldValue)
   
    let paraDiv = document.getElementById('all-para');
    let p = document.createElement('p');
    paraDiv.appendChild(p)
    p.innerText = fieldValue;
    fieldData.value = '';
    // fieldValue = '';
    
})
