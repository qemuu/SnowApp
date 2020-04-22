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
    this.slopeService.getSlopes().subscribe(res => {
      this.slopes = res as Slope[]
    })
  }

  toggle(slope: Slope) {
    this.slopeService.toggleFavorite(slope).subscribe((resp) => {
      this.fetchAllSlopes()
    })
  }

}
