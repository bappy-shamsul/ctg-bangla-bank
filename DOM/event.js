
// document.getElementById('add-event').addEventListener('mousemove', function(){
//     console.log('kam sarse')
// })
// document.getElementById('inpt').addEventListener('focus', function(){
//     console.log('kam sarse focus e')
// })
// document.getElementById('inpt').addEventListener('blur', function(){
//     console.log('kam sarse blur e')
// })
// document.getElementById('add-event').addEventListener('click', function(){
    // document.getElementById('delete-txt').style.display = 'none';

// })

// document.getElementById('inpt').addEventListener('keyup', function(event){
//     let text = event.target.value;
//     const deleteBtn = document.getElementById('add-event');
//     // console.log(text)
//     if(text === 'delete'){
//         deleteBtn.removeAttribute('disabled')
//     }else{
//         deleteBtn.setAttribute('disabled', true)
//     }

// })
// document.getElementById('inpt').addEventListener('keyup', function(event){
//     // document.getElementById('add-event ').
//     console.log(event.target.value)
// })

document.getElementById('inpt').addEventListener('keyup', function(event){
    let text = event.target.value;
    deleteBtn = document.getElementById('add-event');
    if(text === 'Delete'){
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled', true)
    }
})