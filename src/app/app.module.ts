import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {appRouting} from './app-routing';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { WorksComponent } from './content/works/works.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    NotFoundComponent,
    ServicesComponent,
    ContactsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    appRouting,
    MatIconModule,
    FormsModule,

  ],
  exports: [MatButtonModule, MatCheckboxModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

