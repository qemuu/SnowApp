import { Component, OnInit } from '@angular/core';
import { SlopeSearchService } from './slope-search.service'
import { Slope } from './Slope';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slope-list',
  templateUrl: './slope-list.component.html',
  styleUrls: ['./slope-list.component.css']
})
export class SlopeListComponent implements OnInit {

  slopes: Slope[] = []

  constructor(private slopeService: SlopeSearchService) { }

  ngOnInit() {
    this.fetchAllSlopes()
  }

  fetchAllSlopes() {
    this.slopeService.getOtherSlopes().subscribe(res => {
      this.slopes = res as Slope[]
      console.log(this.slopes)
    })
  }
 
 
  //do naprawy \/
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


