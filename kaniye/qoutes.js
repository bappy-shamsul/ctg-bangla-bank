function loadQoutes(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoutes(data))
}

function displayQoutes(qoute){
    const blockQuote = document.getElementById('quote-holder');
    blockQuote.innerHTML = qoute.quote;
}

