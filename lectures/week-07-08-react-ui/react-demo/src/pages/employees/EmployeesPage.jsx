import { useSelector } from 'react-redux';
import { selectEmployees } from '@/store/employees/employees.selectors.js';

import { EmployeeList } from './ui/EmployeeList';

export const EmployeesPage = () => {
  const employees = useSelector(selectEmployees);

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Employees</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};
