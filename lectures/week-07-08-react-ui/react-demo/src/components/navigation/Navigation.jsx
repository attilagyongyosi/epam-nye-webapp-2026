import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { UserControls } from './UserControls';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export const Navigation = () => {
  const { isManager } = useSelector((state) => state.auth);

  // This function will be called with { isActive }
  const navLinkClass = useCallback(
    ({ isActive }) =>
      isActive ? 'underline underline-offset-4' : '',
    [],
  );
  return (
    <header className="flex items-center p-4 border-b">
      <NavigationMenu>
        <Link to="/">
          <h1 className="font-bold mr-4">Our Company</h1>
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/" className={navLinkClass}>
              <NavigationMenuLink asChild>
                <span>Home</span>
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="/employees" className={navLinkClass}>
              <NavigationMenuLink asChild>
                <span>Employees</span>
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          {isManager && (
            <NavigationMenuItem>
              <NavLink to="/hire" className={navLinkClass}>
                <NavigationMenuLink asChild>
                  <span>Hire</span>
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <UserControls />
    </header>
  );
};
