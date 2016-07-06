import Select from '../elements/Select';
import fieldHoc from '../add-ons/field-hoc';
import validatedFieldHoc from '../add-ons/validated-field-hoc';

export default validatedFieldHoc(fieldHoc(Select));
