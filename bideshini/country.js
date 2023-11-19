function loadCountry(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

function displayCountry(result){
    const allCountry = document.getElementById('all-country');

//     for(let country of result){
//         console.log(country)
//     }
// }
       result.forEach(country => {
        // console.log(country.ccn3)
        let countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>

        <button onClick = "displayCode('${country.cca3}')">Details</button>
        `;
        allCountry.appendChild(countryDiv)
       })
}

const displayCode = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('The url is ', url)
    fetch(url)
    .then(res => res.json())
    .then(data => detailCountry(data[0]))
}

const detailCountry = country =>{
    console.log(country)
    const countryDetail = document.getElementById('detail-country');
    countryDetail.innerHTML = `
    <h2> Name: ${country.name.common}</h2>
    <h2> Area: ${country.area}</h2>
  
    <img src = "${country.flags.png}">`
    
}
loadCountry();