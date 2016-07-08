
jest.unmock('../mask');

import { toPattern } from '../mask';

describe('helpers/mask', function() {

	it('should return a string equal to expected for SSN format given value as number', function() {

		var format = '999-99-9999';
		var value = 555443333;

		var result = toPattern(value, format);

		expect(result).toBe('555-44-3333');
	});

	it('should return a string equal to expected for SSN format given value as string', function() {

		var format = '999-99-9999';
		var value = '555443333';

		var result = toPattern(value, format);

		expect(result).toBe('555-44-3333');
	});

	it('should return a string equal to expected for DOB format', function() {

		var format = '99/99/9999';
		var value = '07021982';

		var result = toPattern(value, format);

		expect(result).toBe('07/02/1982');
	});

	it('should return a string equal to expected if given string value too long', function() {

		var format = '99999';
		var value = '985123';

		var result = toPattern(value, format);

		expect(result).toBe('98512');
	});
});
