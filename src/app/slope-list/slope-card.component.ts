import { Component, OnInit, Input,} from '@angular/core';
import {SlopeSearchService} from './slope-search.service'

import {map } from 'rxjs/operators'


@Component({
  selector: 'app-slope-card',
  template: `
    
  
    <img (click)='click()' class="card-img-top" src="{{slopes.photo}}" >
    <div class="card-body">
      <h5 class="card-image-overlay">Nazwa stoku: {{slopes.name}}</h5>
      <p class="card-text">Miasto: {{slopes.city}}</p>
      <p class="card-text"><small>Liczba tras: {{slopes.slope}} </small></p>
      <p class="card-text"><b>Temperatura: {{temp  }} °C   </b></p>
      <p class="card-text"><b>Niebo: {{sky }}  </b></p>
      <p class="card-text"><b>Wiatr: {{wind }} m/s </b></p>
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
    

    }

      
    }
    `
  ]
})
export class SlopeCardComponent implements OnInit {

  
  weatherTemp$
  temp
  sky
  wind
  
  
  
  @Input()
  slopes
  
 


  constructor(private searchService:SlopeSearchService) { 
    

 
  }
  


  
  ngOnInit() {
    this.searchService.getWeather(this.slopes.cords.lat,this.slopes.cords.lon)
    .pipe(map(res => {
      this.temp =( res.main.temp - 273.15).toFixed(1)
      this.sky = res.weather[0].main
      this.wind = res.wind.speed
    }))
    
    .subscribe(re => this.weatherTemp$ = re)
    
    
    
    
  }
  click(){
    console.log(this.slopes)
    
    
    
    
  }

}
