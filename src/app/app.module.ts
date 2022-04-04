import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module.';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,  
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
