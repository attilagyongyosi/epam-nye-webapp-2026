import { Field, FieldLabel } from '@/components/ui/field';
import { NativeSelect } from '@/components/ui/native-select';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export const HiringSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  ...props
}) => (
  <Field>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <NativeSelect
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </NativeSelect>
    {/*
    // To use the custom Select component from shadcn/ui, uncomment below:
    <Select value={value} onValueChange={val => onChange({ target: { name, value: val } })}>
      <SelectTrigger id={name}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {options.map(opt => (
          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
        ))}
      </SelectContent>
    </Select>
    */}
  </Field>
);
