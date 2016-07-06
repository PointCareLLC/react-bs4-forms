import Textarea from '../elements/Textarea';
import fieldHoc from '../add-ons/field-hoc';
import validatedFieldHoc from '../add-ons/validated-field-hoc';

export default validatedFieldHoc(fieldHoc(Textarea));
