import { Component, OnInit } from '@angular/core';
import { SlopeSearchService } from './slope-search.service'


@Component({
  selector: 'app-slope-list',
  templateUrl: './slope-list.component.html',
  styleUrls: ['./slope-list.component.css']
})
export class SlopeListComponent implements OnInit {


  slopes
  
  
  constructor(private slopeService: SlopeSearchService) { }
  
 
  ngOnInit() {
    this.slopeService.getSlopes().subscribe(res => {
      this.slopes = res
    }
    )
    
  }
  
  
}
