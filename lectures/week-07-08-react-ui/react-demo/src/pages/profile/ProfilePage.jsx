import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectEmployees } from '@/store/employees/employees.selectors';
import { removeEmployee } from '@/store/employees/employees.slice';
import { useCallback, useMemo } from 'react';
import { useGetTodosByUserQuery } from '@/store/todos/todos.api';
import { useNavigate } from 'react-router';

import { ProfileOverview } from './ui/ProfileOverview';
import { TodosList } from './ui/TodosList';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const employees = useSelector(selectEmployees);
  const employee = useMemo(
    () => employees.find((e) => e.id === id),
    [employees, id],
  );
  const { isManager } = useSelector((state) => state.auth);
  const { data: todos = [], isLoading, error } = useGetTodosByUserQuery(id);

  const onClickRemove = useCallback(() => {
    dispatch(removeEmployee(id));
    navigate(`/employees`);
  }, [dispatch, id, navigate]);

  if (!employee) {
    return (
      <h3 className="text-center text-destructive mt-8">Employee not found!</h3>
    );
  }

  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <ProfileOverview
          employee={employee}
          isManager={isManager}
          onRemove={onClickRemove}
        />
      </div>
      <div className="md:w-2/3">
        <TodosList todos={todos} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};
