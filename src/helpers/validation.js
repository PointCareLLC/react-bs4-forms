export const input = function (value, required, validator) {
	if (typeof validator !== 'function') {
		if(required) {
			return value ? true : false;
		}
		else {
			return true;
		}
	}
	else {
		if(required) {
			if(value === undefined || value === null || value === '') {
				return false;
			}
			else {
				return  validator(value);
			}
		}
		else {
			if(value === undefined || value === null || value === '') {
				return true;
			}
			else {
				return  validator(value);
			}
		}
	}
};

export const isEmpty = function(value) {
	return (value === undefined || value === null || value === '');
};

export const validationToShow = function(value, valid, didBlur, required) {

	if(didBlur) {
		var displayValid = valid;

		if (required && isEmpty(value)) {
			displayValid = false;
		}
		else if (isEmpty(value)) {
			displayValid = undefined;
		}
	}
	else{
		displayValid = undefined;
	}

	return displayValid;
};
