export default class SwapiService {

	_apiBase = 'https://swapi.co/api';

	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}


	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.map( this._transformPerson );
	}

	async getPerson(id) {
		return this.getResource(`/people/${id}/`);
	}


		_transformPerson = person => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.blue
		};
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results.map( this._transformPlanet );
	}

	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}

	_transformPlanet = planet => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	}

	_transformStarship = starship => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			cost: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargo: starship.cargo_capacity,
		};
	}



	async getAllStarships() {
		const res = await this.getResource(`${this._apiBase}/starships/`);
		return res.results.map( this._transformStarship );
	}

	async getStarship(id) {
		const starship = await this.getResource(`${this._apiBase}/starships/${id}/`);
		return this._transformStarship(starship);
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error('Could not fetch ' + url + ', received ' + res.status);
		}
		const body = await res.json();
		return body;
	}
};


// const swapi = new SwapiService();
// swapi.getStarship(9).then( (people) => {
// 		console.log(people);
// });
// https://swapi.co/api/starships/9/


// swapi.getAllPlanets().then( (people) => {
// 	people.forEach(people => {
// 		console.log(people);
// 	});
// });