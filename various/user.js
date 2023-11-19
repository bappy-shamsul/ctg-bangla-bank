// function loadUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => disPlay1(data))
// }

// // function disPlay(result){
// //     const ul = document.getElementById('user-list')
// //     for(let user of result){
// //         const li = document.createElement('li');
// //         li.innerText = user.name;
// //         ul.appendChild(li);
// //         // console.log(li.innerText)
// //     }
// // }
// function disPlay1(result){
//     const ul = document.getElementById('user-list');
//     for(let user of result){
//         let li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//         // console.log(user.name);
//     }

// }

// 2nd Practice

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => displayDetails(json))
}

function displayDetails(result){
    
    const ul = document.getElementById('user-list');
    for(let user of result){
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
        // console.log(user.name)
    }
}
