import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from '@/store/auth/auth.slice';

import { ThemeToggle } from '@/theme/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export const UserControls = () => {
  const dispatch = useDispatch();
  const { profile, isManager } = useSelector((state) => state.auth);

  return (
    <div className="ml-auto flex justify-end gap-2">
      <ThemeToggle />
      {!profile ? (
        <Button onClick={() => dispatch(login({ isManager: false }))}>
          Login
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>My Profile</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem disabled>Profile</DropdownMenuItem>
              <DropdownMenuCheckboxItem
                checked={isManager}
                onCheckedChange={(checked) =>
                  dispatch(login({ isManager: checked }))
                }
                // https://www.radix-ui.com/primitives/docs/components/dropdown-menu#itemindicator
                // Check the implementation change on DropdownMenuCheckboxItem for how this is possible
                // This is possible because of full control over components we grab into our own repo,
                // instead of built, packaged and imported ones like Bootstrap/Other component libraries: MaterialUI, ChakraUI, etc.
                ItemIndicator={Switch}
                forceMount
              >
                Manager Mode
              </DropdownMenuCheckboxItem>
              <DropdownMenuItem disabled>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => dispatch(logout())}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
