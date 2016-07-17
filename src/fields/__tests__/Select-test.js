
jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../Select';

describe('field/Masked-Input', () => {

	var props = null;
	var updateName = null;
	var updateValue = null;
	var updateValid = null;

	beforeEach(function() {

		props = {
			name: 'color',
			label: 'Favorite Color',
			value: 'red',
			options: [{ value: 'red', text: 'Red' }, { value: 'blue', text: 'Blue' }, { value: 'green', text: 'Green' }],
			onUpdate: (name, value, valid) => {
				updateName = name;
				updateValue = value;
				updateValid = valid;
			}
		};

		updateName = null;
		updateValue = null;
		updateValid = null;
	});

	describe('onUpdate - prop.value is a valid option', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('color');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('red');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is valid & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('color');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('red');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is undefined', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value={undefined} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('color');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is undefined & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value={undefined} required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('color');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(false);
		});
	});

	describe('onUpdate - prop.value is not an optional value', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="black" required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('color');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(false);
		});
	});
});
