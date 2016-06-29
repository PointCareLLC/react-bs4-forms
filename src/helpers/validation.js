
export const input = function (value, required, validator) {
	if (typeof validator !== 'function'){
		if(required){
			return value ? true : false;
		}
		else {
			return true;
		}
	}
	else {

		if(required){
			if(value === undefined || value === null || value === ''){
				return false;
			}
			else {
				return  validator(value);
			}
		}
		else {
			if(value === undefined || value === null || value === ''){
				return true;
			}
			else {
				return  validator(value);
			}
		}
	}

};
