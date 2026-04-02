import { Badge } from '@/components/ui/badge';

export const TodoItem = ({ title, completed }) => {
  return (
    <li className="flex items-center justify-between rounded px-3 py-2 border shadow-sm hover:shadow transition">
      <span className={completed ? 'line-through text-muted-foreground' : ''}>
        {title}
      </span>
      {completed ? (
        <Badge variant="success" className="ml-2">
          ✅ Done
        </Badge>
      ) : (
        <Badge variant="outline" className="ml-2">
          ⏳ Pending
        </Badge>
      )}
    </li>
  );
};
