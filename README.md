# Countries JSON API

Countries API is a MongoDB/Express application with full CRUD functionality allowing users to traverse data about every country around the globe including the national flag, currency, languages and population statistics.

## Deployed Site

[Countries JSON API](https://salty-headland-45299.herokuapp.com/api/countries/)

## Getting Started

1. Fork and clone this repository.
2. Change into the new directory.
3. Install dependencies.

## How to Use Countries API

- List all countries with "/api/countries/" at the end of the url
- List a single country with the same url + the id of the country you want to list "/api/countries/${id}"

## Built With

- [Node.js](https://nodejs.org/en/) - Language
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Web framework
- [REST Countries API](https://restcountries.eu/#api-endpoints-all) - API used
- [Axios](https://github.com/axios/axios) - Promise-based HTTP client

## Approach

Countries JSON API allows for users to fetch data related to every country in the world. The data comes from REST Countries API but was tailored to fit my own needs which included information about each country's:
- Name
- Capital
- Population
- Area
- Flag (Image)
- Currencies Used
- Languages Spoken

##Ideas for Enhancement

Currently, my application doesn't have a front-end so that will be my first focus for enhancement. I want to allow users to have an account that will let them save countries to their own lists and search through the database with a typical search bar interface. Also, the image links to the flags make it possible to have the flags populate the page when a country is searched.

## Authors

**Gabriella De Francesco** - [GitHub](https://github.com/gabriella1177)

## Acknowledgements
Thank you to [REST Countries](https://restcountries.eu/#api-endpoints-all) for your intuitively designed API.
