import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterComponent } from './footer/footer.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentActionsComponent } from './department-actions/department-actions.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ModalUnitListingComponent } from './modal-unit-listing/modal-unit-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    FooterComponent,
    DepartmentInfoComponent,
    ListNewsComponent,
    DepartmentActionsComponent,
    ModalContactComponent,
    ModalUnitListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
