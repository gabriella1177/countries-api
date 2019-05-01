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



// // execute all promises, writing to disk if successful
// Promise.all(calls)
// .then(success => {
// 	let collectedData = success.map(res => res.data)
// 	let stringified = JSON.stringify(collectedData)
// 	fs.writeFile(__dirname + '/countries.json', stringified, 'utf8', (err) => {
// 		if(err) {
// 			console.error(err)
// 		}
// 		else {
// 			console.log(`successfully wrote ${collectedData.length} records to db/countries.json`)
// 		}
// 	}) 
// })
// .catch(err => {
// 	console.error(err)
// 	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
// })

