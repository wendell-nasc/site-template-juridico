import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { PracticeComponent } from './practice/practice.component';



import { RouterModule } from '@angular/router'; //Impota o router para trabalhar com <router-outlet></router-outlet>
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PracticeComponent,
    TeamComponent,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    //PagesModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PracticeComponent,
    TeamComponent,
    PagesComponent,
    PagesComponent,

    
  ],

})
export class PagesModule { }
