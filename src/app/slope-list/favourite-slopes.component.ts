import { Component, OnInit } from '@angular/core';
import { SlopeSearchService } from './slope-search.service'
import { map } from 'rxjs/operators';
import { Slope } from './Slope';


@Component({
  selector: 'app-favourite-slopes',
  template: `
   <div class="row">
  <div class="col">
    <div class="card-deck">
      <app-slope-card class="card" 
      *ngFor="let slope of slopes" 
      [slopes]="slope" 
      (toggleFavourite)="toggle($event)"></app-slope-card>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class FavouriteSlopesComponent implements OnInit {

  slopes: Slope[]

  constructor(private slopeService: SlopeSearchService) { }

  ngOnInit() {
    this.fetchAllSlopes()
  }

  fetchAllSlopes() {
    this.slopeService.getFavoriteSlopes().subscribe(res => {
      this.slopes = res as Slope[]
    })
  }

  toggle(slope: Slope) {
    if(slope['favorite'] == true){
     slope['favorite'] = false
    }else{
     slope['favorite'] = true
    }
     
     this.slopeService.updateFavourite(slope.id,slope).subscribe((resp) => {
       this.fetchAllSlopes()
     })
   }
 
}
