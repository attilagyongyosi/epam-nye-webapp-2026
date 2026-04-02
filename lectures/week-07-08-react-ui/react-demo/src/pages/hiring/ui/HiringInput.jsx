import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export const HiringInput = ({ label, name, value, onChange, ...props }) => (
  <Field>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <Input id={name} name={name} value={value} onChange={onChange} {...props} />
  </Field>
);
