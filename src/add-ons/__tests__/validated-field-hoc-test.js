
jest.unmock('../validated-field-hoc');
jest.unmock('../../elements/Input');
jest.unmock('../../helpers/validation');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Hoc from '../validated-field-hoc';
import InputEl from '../../elements/Input';

describe('validated-field-hoc', () => {

	var Input = null;
	var props = null;
	var updateName = null;
	var updateValue = null;
	var updateValid = null;

	beforeEach(function() {

		Input = Hoc(InputEl);

		props = {
			name: 'ssn',
			onUpdate: (name, value, valid) => {
				updateName = name;
				updateValue = value;
				updateValid = valid;
			}
		};
	});

	describe('render', function() {

		it('should have expected id', () => {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.id).toEqual('ssn');
		});
	});

	describe('onUpdate from componentWillMount', function() {

		it('should give expected name', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			expect(updateName).toBe('ssn');
		});

		it('should give expected value', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			expect(updateValid).toEqual(true);
		});

		it('should give expected valid if not required and no value', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} required={false} value={undefined} />
			);

			expect(updateValid).toEqual(true);
		});


		it('should give expected valid if required and no value', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} required={true} value={undefined} />
			);

			expect(updateValid).toEqual(false);
		});

		it('should give expected valid if required and has value', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} required={true} value="123-456-7890" />
			);

			expect(updateValid).toEqual(true);
		});


		it('should give expected valid if given validator returns true', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} value="123-456-7890" validator={() => true}/>
			);

			expect(updateValid).toEqual(true);
		});

		it('should give expected valid if given validator returns false', function() {

			TestUtils.renderIntoDocument(
				<Input {...props} value="123-456-7890" validator={() => false}/>
			);

			expect(updateValid).toEqual(false);
		});
	});
});
