import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';
import { RoutingModule } from 'angular-routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuardedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
