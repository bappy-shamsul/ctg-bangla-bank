function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        // postDiv.classList.add('post');
        div.innerHTML = `
        <h5> user- ${post.userId} </h5>
        <h4> post- ${post.title}</h4>
        <h6> post details-${post.body} </h6>`;
        postContainer.appendChild(postDiv);
    }
    // console.log(posts)
}
loadPost()