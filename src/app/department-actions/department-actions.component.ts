import { Component } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalContactComponent } from '@app/modal-contact/modal-contact.component';
import { ModalUnitListingComponent } from '@app/modal-unit-listing/modal-unit-listing.component';

@Component({
  selector: 'app-department-actions',
  templateUrl: './department-actions.component.html'
})
export class DepartmentActionsComponent {

  constructor(private dialog: MatDialog) { }

  showModal(modalComponente: any) {
    const formConfig = new MatDialogConfig();
    formConfig.disableClose = false;
    formConfig.autoFocus = false;

    const modal = this.dialog.open(modalComponente, formConfig);
  }

  openModalContact() { this.showModal(ModalContactComponent); }
  openModalUnitListing() { this.showModal(ModalUnitListingComponent); }
}
