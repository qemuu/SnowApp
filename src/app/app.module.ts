import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap/alert'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlopeListComponent } from './slope-list/slope-list.component';
import { SlopeCardComponent } from './slope-list/slope-card.component';
import { FavouriteSlopesComponent } from './slope-list/favourite-slopes.component';
import { NavBarComponent } from './slope-list/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SlopeListComponent,
    SlopeCardComponent,
    FavouriteSlopesComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
