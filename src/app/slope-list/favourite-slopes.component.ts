import { Component, OnInit } from '@angular/core';
import {SlopeSearchService} from './slope-search.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-favourite-slopes',
  template: `
   <div class="row">
  <div class="col">
    <div class="card-deck">
      <app-slope-card class="card" *ngFor="let slope of slopes" [slopes]="slope"></app-slope-card>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class FavouriteSlopesComponent implements OnInit {

  

  slopes
  
  constructor(private http:SlopeSearchService) { }

 


  ngOnInit() {
    this.http.getFavoriteSlopes().subscribe(res => {
      this.slopes = res
    })
    
  }

}
