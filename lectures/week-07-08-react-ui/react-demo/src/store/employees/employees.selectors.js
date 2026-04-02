import { createSelector } from '@reduxjs/toolkit';

export const selectEmployees = (state) => state.employees;

// Example extra selectors
export const selectDevelopers = createSelector(selectEmployees, (employees) =>
  employees.filter((emp) => emp.role === 'Developer'),
);

export const selectDesigners = createSelector(selectEmployees, (employees) =>
  employees.filter((emp) => emp.role === 'Designer'),
);
