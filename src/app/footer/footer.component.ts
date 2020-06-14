import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  departmentName = environment.departmentName;
  departmentAddres = environment.departmentAddres;

  constructor() { }

  ngOnInit(): void {
  }

}
