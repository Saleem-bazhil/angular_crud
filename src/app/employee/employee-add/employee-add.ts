import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
})
export class EmployeeAdd {

  employee = {
    name: '',
    position: '',
  };

  saveEmployee() {
    console.log('Employee saved:', this.employee);
    alert(`Employee saved: ${this.employee.name} - ${this.employee.position}`);
  }
}
