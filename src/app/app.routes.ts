import { Routes } from '@angular/router';
import { EmployeeList } from './employee/employee-list/employee-list';
import { EmployeeAdd } from './employee/employee-add/employee-add';
import { EmployeeEdit } from './employee/employee-edit/employee-edit';
import { EmployeeDetail } from './employee/employee-detail/employee-detail';

export const routes: Routes = [
  { path: 'employees', component: EmployeeList },
  { path: 'employees/add', component: EmployeeAdd },
  { path: 'employees/edit/:id', component: EmployeeEdit },
  { path: 'employees/:id', component: EmployeeDetail },
  { path :'', redirectTo:'employees', pathMatch:'full'},
];
