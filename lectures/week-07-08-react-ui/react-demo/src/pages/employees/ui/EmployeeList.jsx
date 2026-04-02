import { Employee } from './Employee';

export const EmployeeList = ({ employees }) => {
  if (!employees || employees.length === 0) {
    return (
      <h2 className="text-center text-muted-foreground mt-8">No employees!</h2>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {employees.map((emp) => (
        <Employee key={emp.id} {...emp} />
      ))}
    </div>
  );
};
