const request = require('supertest');
const app = require('../../app');

const { loadPlanetsData } = require('../../models/planets.model')
const {
	mongoConnect,
	mongoDisconnect
} = require('../../services/mongo');

describe('Planets API', () => {
	beforeAll(async () => {
		await mongoConnect();
		await loadPlanetsData();
		console.log('done')
	});

	afterAll(async() => {
		await mongoDisconnect()
	});

	describe('Test Get /planets', () => {
		test('It should respond with 200 success', async () => {
			const response = await request(app)
				.get('/v1/planets')
				.expect('Content-Type', /json/)
				.expect(200);
		});
	});
});