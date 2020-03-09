import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SlopeSearchService {

  constructor(private http: HttpClient) {

  }
  slopes

  favouriteSlopes: Observable<any>





  getSlopes() {
    return this.http.get('http://localhost:3000/slopes')
  }

  getFavoriteSlopes() {
    this.favouriteSlopes = this.http.get('http://localhost:3000/slopes')
      .pipe(
        map(slope => {
          const favSlopes = slope.filter(fav => fav.favorite === true)
          return favSlopes
        })
      )
        
      return this.favouriteSlopes
  }

  getWeather(lat: Number, lon: Number): Observable<any> {
    const apiKey = 'db99bc9a7ddcb4018f45351f868a2da1'

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  }

}



//http://api.openweathermap.org/data/2.5/weather?q=London&appid=db99bc9a7ddcb4018f45351f868a2da1