const loadInfo = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayInfo(data))
}

const displayInfo = result =>{
    // const picLady = document.getElementById('img-lady');
    
    // picLady.innerHTML = `<img src = ${result.results[0].picture.medium}>`;

    const gender = document.getElementById('sex-lady');
    gender.innerHTML = result.results[0].gender;

    const nameLady = document.getElementById('name-lady');
    nameLady.innerHTML = result.results[0].name.title + " " + result.results[0].name.first + " " + result.results[0].name.last;
    console.log(result.results)

    const cityLady = document.getElementById('city-lady');
    cityLady.innerHTML = result.results[0].location.city

    const stateLady = document.getElementById('state-lady');
   stateLady.innerHTML = result.results[0].location.state

    

}
loadInfo()