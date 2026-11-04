import { expect } from '@wdio/globals';

describe('API Login Test', () => {
    it('should return user data', async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.id).toBe(1);
        expect(data.name).toBe('Leanne Graham');
    });
});