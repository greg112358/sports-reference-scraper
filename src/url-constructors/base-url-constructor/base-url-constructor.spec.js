import axios from 'axios';
import { getProFootballUrl, getProBasketballUrl } from './base-url-constructor.js';

/**
 * We test the base URL constructor by making a request to a server and checking for 200 status code
 */
describe('Base URL Constructor', () => {
    it('football reference should return a 200 status code', async () => {
        const response = await axios.get(getProFootballUrl());
        expect(response.status).toEqual(200);
    });

    it('basketball reference should return a 200 status code', async () => {
        const response = await axios.get(getProBasketballUrl());
        expect(response.status).toEqual(200);
    });
});