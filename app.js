const express = require('express');
const app = express();

const cities = require('cities.json');
const countries = require('country-json/src/country-by-abbreviation.json')

app.get('/countries', (req, res, next) => {
	res.json(countries);
});

app.get('/countries/:code/cities', (req, res) => {
	const { code } = req.params
	res.json(cities.filter(city => city.country == code));
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});