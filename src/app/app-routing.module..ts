import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [




  // path: '/dashboard' PagesRouting ---> documentação para lembrar dos PagesRoutingModule importados abaixo
  // path: '/auth' AuthRouting ---> documentação para lembrar dos AuthRoutingModule importados abaixo
 

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Redirect página principal
  { path: '**', component: NopagefoundComponent }, //Redirect pagina não encontrada






];

@NgModule({
  declarations: [],
  
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
