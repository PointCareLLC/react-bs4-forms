import {input} from '../validation';

jest.unmock('../validation');

describe('validation.input', function(){
	var value = null;
	var required = null;
	var validator = null;


	describe('validator is not a function', function() {

		beforeEach(function() {
			value = 'Richard';
			required = true;
			validator = undefined;
		});

		it('should return true if value exists and required', function(){
			var result = input(value, required, validator);

			expect(result).toBe(true);
		});

		it('should return false if value is empty and required', function(){
			value = '';
			var result = input(value, required, validator);

			expect(result).toBe(false);
		});

		it('should return true if value is empty and not required', function(){
			value = '';
			required = false;
			var result = input(value, required, validator);

			expect(result).toBe(true);
		});

		it('should return true if value exists and not required', function(){
			required = false;
			var result = input(value, required, validator);

			expect(result).toBe(true);
		});



	});





	describe('text type inputs', function() {

		describe('value is a valid string', function() {

			beforeEach(function() {
				value = 'Richard';
				required = true;
				validator = (value) => { return value.length < 10; };
			});

			it('should return true if required', function() {
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});


			it('should return true if not required', function() {
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});

			it('should return true if required is undefined', function() {
				required = undefined;

				var result = input(value, required, validator);

				expect(result).toBe(true);
			});
		});

		describe('value is an invalid string', function() {
			beforeEach(function() {
				value = 'Richard';
				required = true;
				validator = () => false;
			});

			it('should return false if not required', function() {
				validator = (value) => value.length > 30;
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

			it('should return false if required', function() {
				validator = (value) => value.length > 30;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});


		});

		describe('value is empty', function() {

			beforeEach(function() {
				value = '';
				required = true;
				validator = (value) => { return value.length < 10; };
			});

			it('should return false if value is empty and required', function(){
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

			it('should return true if value is empty and not required', function(){
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});

		});


	});

	describe('number type inputs', function() {
		var value = null;
		var required = null;
		var validator = null;

		describe('value is a valid number', function() {

			beforeEach(function(){
				value = 7;
				required = true;
				validator = (value) => value > 4;
			});

			it('should return true if value is required', function(){
				required = true;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});

			it('should return true if value is not required', function(){
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});

		});

		describe('value is an invalid number', function() {

			beforeEach(function(){
				value = 7;
				required = true;
				validator = () => false;
			});

			it('should return false if required', function(){
				required = true;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

			it('should return false if not required', function(){
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

		});

	});
});
