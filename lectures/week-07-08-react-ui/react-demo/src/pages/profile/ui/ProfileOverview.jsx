import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const ProfileOverview = ({ employee, isManager, onRemove }) => {
  const mockDetails = {
    dob: '2000-01-01',
    email: 'doe@example.com',
    phone: '+1 555-555-5555',
    location: 'New York, NY',
  };

  const initials = employee.name
    .split(' ')
    .map((n) => n[1])
    .join('')
    .toUpperCase();

  return (
    <Card className="shadow-xl rounded-2xl p-8 flex flex-col items-center">
      <Avatar className="h-28 w-28 mb-4">
        <AvatarImage
          src={
            employee.avatar || 'https://placehold.co/112x112/000000/FFFFFF/png'
          }
          alt={employee.name}
        />
        <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
      </Avatar>
      <div className="text-2xl font-bold mb-1">{employee.name}</div>
      <div className="font-medium mb-2">{employee.role}</div>
      <div className="flex flex-col gap-1 text-sm mb-4 w-full max-w-xs">
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Birthday">
            🎂
          </span>
          <span>Date of Birth: {mockDetails.dob}</span>
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Email">
            ✉️
          </span>
          <span>{mockDetails.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Phone">
            📞
          </span>
          <span>{mockDetails.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="Location">
            📍
          </span>
          <span>{mockDetails.location}</span>
        </div>
      </div>
      {isManager && (
        <Button variant="destructive" onClick={onRemove}>
          Remove Employee
        </Button>
      )}
    </Card>
  );
};
