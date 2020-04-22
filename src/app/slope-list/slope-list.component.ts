import { Component, OnInit } from '@angular/core';
import { SlopeSearchService } from './slope-search.service'
import { Slope } from './Slope';

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
    this.slopeService.getSlopes().subscribe(res => {
      this.slopes = res as Slope[]
    })
  }

  toggle(slope: Slope) {
    const favOptionTrue = {
      ...slope,
      "favorite": slope.favorite === false ? true : false
    }

    this.slopeService.updateFavourite(slope.id, favOptionTrue).subscribe((resp) => {
      this.fetchAllSlopes()
    })
  }

}
