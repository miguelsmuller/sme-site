import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-unit-listing',
  templateUrl: './modal-unit-listing.component.html'
})
export class ModalUnitListingComponent implements OnInit {
  units = [{
    unitName: 'Creche Ernane do Amaral Peixoto',
    unitLocality: 'Rio Claro',
    unitType: 'Urbano',
    unitAddress: 'Avenida João Batista Portugal, n.º 230, Centro - CEP: 27460-000',
    unitEmail: 'crechemeap@gmail.com',
    unitPhone: 'Ramal: 230'
  }, {
    unitName: 'Creche Menino Menino Jesus de Praga',
    unitLocality: 'Lídice',
    unitType: 'Urbano',
    unitAddress: 'Rodovia Francisco Saturnino Braga, 715, Centro - CEP: 27475-000',
    unitEmail: 'crechemjpraga.educa16@gmail',
    unitPhone: 'Ramal: 450'
  }, {
    unitName: 'Creche Geraldo Magela Gonçalves',
    unitLocality: 'Passa Três',
    unitType: 'Rural',
    unitAddress: 'Estrada São João Marcos, nº 2970, Centro - CEP: 27470-000',
    unitEmail: 'crechegeraldomagela@hotmail.com',
    unitPhone: 'Ramal: 464'
  }, {
    unitName: 'Escola Municipal Sertão dos Hortelãs',
    unitLocality: 'Sertão Hortelãs',
    unitType: 'Rural',
    unitAddress: 'Sertão dos Hortelãs - CEP: 27460-000',
    unitEmail: 'bittencourtivanilda@gmail.com',
    unitPhone: 'S/T'
  }, {
    unitName: 'Escola Municipalizada de Pouso Seco',
    unitLocality: 'Pouso Seco',
    unitType: 'Rural',
    unitAddress: 'Rod. Washington Luiz - CEP: 27465-000',
    unitEmail: 'mariacandidoc@gmail.com',
    unitPhone: 'Ramal: 423'
  }, {
    unitName: 'Escola Municipalizada Getulândia',
    unitLocality: 'Getulândia',
    unitType: 'Rural',
    unitAddress: 'Estrada Washington Luiz , n.º 3000 –  CEP: 27465-000',
    unitEmail: 'emgetulandia@yahoo.com.br',
    unitPhone: 'Ramal: 429'
  }, {
    unitName: 'Pré Municipal Professora Laudelina da Silva Neto',
    unitLocality: 'Getulândia',
    unitType: 'Urbana',
    unitAddress: 'Rua Nossa Senhora de Fátima - CEP: 27465-000',
    unitEmail: 'emgetulandia@yahoo.com.br',
    unitPhone: 'Ramal: 429'
  }, {
    unitName: 'Escola Municipalizada Francisco Teixeira de Oliveira',
    unitLocality: 'Fazenda da Grama',
    unitType: 'Rural',
    unitAddress: 'Av. Severiano Campos de Oliveira , n.º 3000 - CEP: 27470-000',
    unitEmail: 'emftoliveira@gmail.com',
    unitPhone: '463'
  }, {
    unitName: 'Centro Municipal de Ensino Deputado Câmara Torres',
    unitLocality: 'Passa Três',
    unitType: 'Urbana',
    unitAddress: 'Rua Antônio Garcia Machado Filho Nº 99377 - Centro - CEP: 27470-000',
    unitEmail: 'cmed-camaratorres@hotmail.com',
    unitPhone: 'Ramal: 428'
  }, {
    unitName: 'Escola Municipal Dr. Luiz Ascendino Dantas',
    unitLocality: 'São João Marcos / Macundu',
    unitType: 'Rural',
    unitAddress: 'Sertão do Macundu –  CEP: 27472-000',
    unitEmail: 'ascendinodantas@rioclaro.rj.gov.br',
    unitPhone: 'Ramal: 433'
  }, {
    unitName: 'Centro Municipal de Ensino São José',
    unitLocality: 'Rio Claro',
    unitType: 'Urbana',
    unitAddress: 'Rua Presidente Vargas , Nº 395 - Centro - CEP: 27460-000',
    unitEmail: 'cmesaojose@rioclaro.rj.gov.br',
    unitPhone: 'Ramal: 414'
  }, {
    unitName: 'Núcleo Municipal  de Educação Infantil Domiciana Gavião Neves II',
    unitLocality: 'Rio Claro',
    unitType: 'Urbana',
    unitAddress: 'Rua Presidente Vargas, Nº 335, Vila Velha - CEP: 27460-000',
    unitEmail: 'educa123infantil@bol.com.br',
    unitPhone: 'Ramal: 420'
  }, {
    unitName: 'Escola Municipalizada de Lídice',
    unitLocality: 'Lídice',
    unitType: 'Urbana',
    unitAddress: 'Rua Padre Ezequiel S/Nº - Centro - CEP:27475-000',
    unitEmail: 'escoladelidice@rioclaro.rj.gov.br',
    unitPhone: 'Ramal: 438'
  }, {
    unitName: 'Escola Municipalizada Aureliano Portugal',
    unitLocality: 'Lídice',
    unitType: 'Rural',
    unitAddress: 'Rua Aureliano Portugal, nº253, Estação - CEP: 27475-000',
    unitEmail: 'aurelianoportugal@gmail.com',
    unitPhone: 'Ramal: 436'
  }, {
    unitName: 'Escola Municipalizada Rio das Pedras',
    unitLocality: 'Lídice',
    unitType: 'Rural',
    unitAddress: 'Estrada Rio das Pedras, Rio das Pedras - CEP: 27475-000',
    unitEmail: 'escolampriodaspedras@hotmail.com',
    unitPhone: 'S/T'
  }, {
    unitName: 'Núcleo Municipal de Educação Especial  Domiciana Gavião Neves I',
    unitLocality: 'Rio Claro',
    unitType: 'Urbana',
    unitAddress: 'Rua Presidente Vargas, Nº 335, Vila Velha - CEP: 27460-000',
    unitEmail: 'edespdomiciana@gmail.com',
    unitPhone: 'S/T'
  }];

  constructor(
    public dialogRef: MatDialogRef<ModalUnitListingComponent>
  ) { }

  ngOnInit(): void {
  }

}
