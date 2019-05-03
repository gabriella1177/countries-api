const axios = require('axios')
const fs = require('fs')

let url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;population;currencies;languages;area;flag';

axios.get(url)
.then(function(res){
  let stringified = JSON.stringify(res.data)
  fs.writeFile(__dirname + '/countries.json', stringified, 'utf8', (err) => {
    if(err) {
        console.error(err)
    }
    else {
        console.log(`successfully wrote records to db/countries.json`)
    }
}) 
})
.catch(function(){
  console.log("ERR")
})
