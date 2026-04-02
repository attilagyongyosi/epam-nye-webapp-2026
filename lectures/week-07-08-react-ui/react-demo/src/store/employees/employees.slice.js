import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  {
    id: '1',
    name: 'Anikó',
    role: 'Developer',
  },
  {
    id: '2',
    name: 'Gergő',
    role: 'Designer',
  },
  {
    id: '3',
    name: 'Zoltán',
    role: 'Developer',
  },
  {
    id: '4',
    name: 'Eszter',
    role: 'Manager',
  },
  {
    id: '5',
    name: 'Dávid',
    role: 'Developer',
  },
];

const employeesSlice = createSlice({
  name: 'employees',
  initialState: INITIAL_STATE,
  reducers: {
    addEmployee: (state, action) => {
      const { payload } = action;

      return [
        ...state,
        {
          name: payload.name,
          role: payload.role,
          id: `${state.length + 1}`,
          joinDate: new Date().toISOString(),
        },
      ];
    },
    removeEmployee: (state, action) => {
      const { payload } = action;

      return state.filter((emp) => emp.id !== payload);
    },
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
