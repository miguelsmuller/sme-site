import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-unit-listing',
  templateUrl: './modal-unit-listing.component.html'
})
export class ModalUnitListingComponent implements OnInit {
  units = environment.units;

  constructor(
    public dialogRef: MatDialogRef<ModalUnitListingComponent>
  ) { }

  ngOnInit(): void {
  }

}
