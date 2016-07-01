import {input, isEmpty, validationToShow} from '../validation';

jest.unmock('../validation');

describe('validation.input', function() {
	var value = null;
	var required = null;
	var validator = null;

	describe('validator is not a function', function() {

		beforeEach(function() {
			value = 'Richard';
			required = true;
			validator = undefined;
		});

		it('should return true if value exists and required', function() {
			var result = input(value, required, validator);

			expect(result).toBe(true);
		});

		it('should return false if value is empty and required', function() {
			value = '';
			var result = input(value, required, validator);

			expect(result).toBe(false);
		});

		it('should return true if value is empty and not required', function() {
			value = '';
			required = false;
			var result = input(value, required, validator);

			expect(result).toBe(true);
		});

		it('should return true if value exists and not required', function() {
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

			it('should return false if value is empty and required', function() {
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

			it('should return true if value is empty and not required', function() {
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

			beforeEach(function() {
				value = 7;
				required = true;
				validator = (value) => value > 4;
			});

			it('should return true if value is required', function() {
				required = true;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});

			it('should return true if value is not required', function() {
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(true);
			});
		});

		describe('value is an invalid number', function() {

			beforeEach(function() {
				value = 7;
				required = true;
				validator = () => false;
			});

			it('should return false if required', function() {
				required = true;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});

			it('should return false if not required', function() {
				required = false;
				var result = input(value, required, validator);

				expect(result).toBe(false);
			});
		});
	});
});

describe('validation.isEmpty', function() {
	var value = null;

	it('should return true if value is a string of length 0', function() {
		value = '';
		var result = isEmpty(value);

		expect(result).toBe(true);
	});

	it('should return false if value is a string with length > 0', function() {
		value = 'hello';
		var result = isEmpty(value);

		expect(result).toBe(false);
	});

	it('should return true if value is null', function() {
		value = null;
		var result = isEmpty(value);

		expect(result).toBe(true);
	});

	it('should return true if value is undefined', function() {
		value = undefined;
		var result = isEmpty(value);

		expect(result).toBe(true);
	});

	it('should return false if value is 0', function() {
		value = 0;
		var result = isEmpty(value);

		expect(result).toBe(false);
	});
});

describe( 'validation.validationToShow', function() {
	var valid = null;
	var required = null;
	var value = null;
	var didBlur = null;

	beforeEach(function () {
		value = 'somevalue';
	});

	describe( 'when required', function() {

		beforeEach(function () {
			required = true;
		});

		describe( 'if empty', function() {

			beforeEach(function () {
				value = '';
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);
			});

			it( 'should return false if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(false);
			});
		});

		describe( 'if valid input', function() {

			beforeEach(function () {
				valid = true;
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);

			});

			it( 'should return true if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(true);
			});
		});

		describe( 'if invalid input', function() {

			beforeEach(function () {
				valid = false;
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);

			});

			it( 'should return false if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(false);
			});
		});
	});

	describe( 'when not required', function() {

		beforeEach(function () {
			required = false;
		});

		describe( 'if empty', function() {

			beforeEach(function () {
				value = '';
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);

			});

			it( 'should return undef if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);
			});
		});

		describe( 'if valid input', function() {

			beforeEach(function () {
				valid = true;
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);

			});

			it( 'should return true if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(true);
			});
		});

		describe( 'if invalid input', function() {

			beforeEach(function () {
				valid = false;
			});

			it( 'should return undef if not blurred', function() {
				didBlur = false;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(undefined);

			});

			it( 'should return false if blurred', function() {
				didBlur = true;
				var result = validationToShow(value, valid, didBlur, required);

				expect(result).toBe(false);
			});
		});
	});
});
