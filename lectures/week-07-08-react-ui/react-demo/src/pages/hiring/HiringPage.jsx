import { useDispatch } from 'react-redux';
import { addEmployee } from '@/store/employees/employees.slice.js';
import { HiringForm } from './ui/HiringForm';

export const HiringPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(
      addEmployee({
        name: formData.name,
        role: formData.role,
        // Only using couple fields for demo purposes
      }),
    );
  };

  return <HiringForm onSubmit={handleSubmit} />;
};
