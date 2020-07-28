import { Component, OnInit } from '@angular/core';
import { Api } from '@app/api.service';
import { Observable } from 'rxjs';

import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from '@env/environment';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html'
})
export class ModalContactComponent implements OnInit {
  /* departmentSectors = environment.departmentSectors;
  cityLocations = environment.cityLocations;
  manifestationType = environment.manifestationType; */

  form = this.formBuilder.group({
    nomeSolicitante: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60)]],
    email: ['', [
      Validators.required,
      Validators.email]],
    telefone: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)]],
    distrito: ['', [
      Validators.required]],
    tipoManifestacao: ['', [
      Validators.required]],
    destinoMensagem: ['', [
      Validators.required]],
    mensagem: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    public apiService: Api,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalContactComponent>
  ) { }

  ngOnInit(): void {
  }

  sendEmail() {
    /* if (this.form.valid) {
      this.apiService.sendEmail(this.form.value).subscribe(
        (res) => {
          this.snackBar.open( 'Sua mensagem foi enviada com sucesso.', 'OK',
            {duration: 3000}
          );
          this.form.reset();
          this.dialogRef.close();
        },
        (err) => {
          this.snackBar.open( 'Não foi possível enviar sua mesangem. Tente mais tarde.', 'OK',
            {duration: 3000}
          );
          console.log('err : ', err);
        }
      );
    } */
  }
}
