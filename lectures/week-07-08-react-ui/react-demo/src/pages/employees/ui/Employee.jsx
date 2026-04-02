import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router';

export const Employee = ({ id, name, role }) => {
  const navigate = useNavigate();

  const handleView = (e) => {
    e.preventDefault();
    navigate(`/profile/${id}`);
  };

  // Get initials for fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="w-[320px] m-2">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src="https://placehold.co/64x64/000000/FFFFFF/png"
              alt={name}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-muted-foreground text-sm">{role}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
          euismod euismod nisi nisi euismod.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={handleView}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};
