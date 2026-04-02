import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { TodoItem } from './TodoItem';

export const TodosList = ({ todos, isLoading, error }) => {
  return (
    <Card className="shadow-lg rounded-xl">
      <CardHeader>
        <h3 className="text-lg font-semibold">To-Do List</h3>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="text-muted-foreground py-4">Loading todos...</div>
        )}
        {error && (
          <div className="text-destructive py-4">Error: {error.toString()}</div>
        )}
        {!isLoading && !error && (
          <ul className="space-y-2">
            {todos.length === 0 && (
              <li className="text-muted-foreground">No todos found.</li>
            )}
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
