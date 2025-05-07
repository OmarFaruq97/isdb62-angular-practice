import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Employee {
  emp_name: string;
  phone_number: string;
  joining_date: string;
  salary: number;
}

@Component({
  selector: 'app-employee',  
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emp_name: string = '';
  phone_number: string = '';
  joining_date: string = '';
  salary: number = 0;
  employeeList: Employee[] = [];
  employeeForm: any;
  submitted: any;
  employeeData: any;

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    this.employeeList = employees;
  }

  onSubmit(): void {
    const employeeData: Employee = {
      emp_name: this.emp_name,
      phone_number: this.phone_number,
      joining_date: this.joining_date,
      salary: this.salary
    };

    let employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.push(employeeData);
    localStorage.setItem('employees', JSON.stringify(employees));

    // Reset form
    this.emp_name = '';
    this.phone_number = '';
    this.joining_date = '';
    this.salary = 0;

    alert('Employee added successfully!');
    this.loadEmployees();
  }

  deleteEmployee(index: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeList.splice(index, 1);
      localStorage.setItem('employees', JSON.stringify(this.employeeList));
    }
  }
}
