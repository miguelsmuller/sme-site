import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
})
export class DepartmentInfoComponent implements OnInit {
  departmentOwer = environment.departmentOwer;
  departmentAddres = environment.departmentAddres;
  departmentOpeningHours = environment.departmentOpeningHours;
  departmentPhone = environment.departmentPhone;
  departmentMail = environment.departmentMail;

  constructor() { }

  ngOnInit(): void {
  }
}
