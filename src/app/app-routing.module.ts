import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteSlopesComponent } from './slope-list/favourite-slopes.component'
import { SlopeListComponent } from './slope-list/slope-list.component'

const routes: Routes = [
  { path: 'favourite', component: FavouriteSlopesComponent },
  { path: 'home', component: SlopeListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
