import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './content/home/home.component';
import {AboutComponent} from './content/about/about.component';
import {WorksComponent} from './content/works/works.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import {ServicesComponent} from './content/services/services.component';
import {ContactsComponent} from './content/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'works', component: WorksComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: NotFoundComponent}
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
