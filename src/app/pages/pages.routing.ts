import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './practice/practice.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  { 
    path: '',  //Define o nome do path url que as rotas filhas abaixo estarão dentro
    component: PagesComponent,
   // component: HomeComponent,

    //canActivate: [AuthGuard], //Inserido Guard para proteger as rotas
    children: [
      { path: 'home', component: HomeComponent, data:{ titulo: 'Home'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação      
      //{ path: '', component: HomeComponent, data:{ titulo: 'Home'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação      
      { path: 'sobre', component: AboutComponent,  data:{ titulo: 'Sobre'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação
      { path: 'area', component: PracticeComponent,  data:{ titulo: 'Area'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação
      { path: 'time', component: TeamComponent,  data:{ titulo: 'Time'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação
      { path: 'contato', component: ContactComponent,  data:{ titulo: 'Contato'} },// O Parametro data é utilizado pelo breadcrumbs... pode mandar qualquer informação
      
    //
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
