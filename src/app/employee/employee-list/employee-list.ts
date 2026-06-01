import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager' },
    { id: 3, name: 'Alice Johnson', position: 'UX Designer' },
  ];

  editEmployee(employee:any){
    const newName = prompt('Enter new name:', employee.name);
    const newPosition = prompt('Enter new position:', employee.position);
    if (newName){
      employee.name = newName;
    }
    if (newPosition){
      employee.position = newPosition;
    }
  }

    deleteEmployee(id: number) {
    this.employees = this.employees.filter(
      employee => employee.id !== id
    );
  }

  addEmployee() {
    const name = prompt('Enter employee name:');
    const position = prompt('Enter employee position:');
    if (name && position) {
      const newEmployee = {
        id: this.employees.length + 1,
        name,
        position
      };
      this.employees.push(newEmployee);
    }
  }
}
