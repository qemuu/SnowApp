import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { SlopeSearchService } from './slope-search.service'

import { map } from 'rxjs/operators'
import { WeatherService } from '../services/weather.service';
import { Slope } from './Slope';
import { WeatherResult } from '../services/WeatherResult';


@Component({
  selector: 'app-slope-card',
  template: `
    
  
    <img  class="card-img-top" src="{{slopes.photo}}" >
    
    <div class="card-body">
      <button (click)='click()' type="button" class="btn btn-primary" *ngIf="!slopes.favorite">Add to favourites</button>
      <button (click)='click()' type="button" class="btn btn-primary"  *ngIf="slopes.favorite">Remove from favourites</button>

      <h5 class="card-image-overlay">Nazwa stoku: {{slopes.name}}</h5>
      <p class="card-text">Miasto: {{slopes.city}}</p>
      <p class="card-text"><small>Liczba tras: {{slopes.slope}} </small></p>

      <div *ngIf="weather">
        <p class="card-text"><b>Temperatura: {{weather && weather.temp  }} °C   </b></p>
        <p class="card-text"><b>Niebo: {{weather?.sky }}  </b></p>
        <p class="card-text"><b>Wiatr: {{weather?.wind }} m/s </b></p>
      </div>
    </div>

  `,
  styles: [
    `
    :host(){
      flex: 0 0 30% !important;
      margin-bottom: 0.625rem !important;
      overflow:hidden;
    }
    :host():hover .card-image-overlay{
      top:100%;
    }
    .card-image-top{
      position:relative;
      width: 50px;      
    }
    `
  ]
})
export class SlopeCardComponent implements OnInit {

  weather: WeatherResult

  @Input()
  slopes: Slope

  @Output()
  toggleFavourite = new EventEmitter()

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.slopes.cords).subscribe(result => {
      this.weather = result
    })
  }

  click() {
    this.toggleFavourite.emit(this.slopes)
  }
}
