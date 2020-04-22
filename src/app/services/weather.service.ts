import { Injectable } from '@angular/core';
import { Cords } from '../slope-list/Cords';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from './WeatherResponse';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherResult } from './WeatherResult';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  timeout = 1000 * 60;
  apiKey = 'db99bc9a7ddcb4018f45351f868a2da1'

  cache: {
    [k: string]: WeatherResult
  } = {}

  constructor(private http: HttpClient) { }


  getWeather(coords: Cords): Observable<WeatherResult> {
    const { lat, lon } = coords
    const coordsHashKey = `${lat}_${lon}`
    const appid = this.apiKey


    if (this.cache[coordsHashKey]) {

      // check if not too old (stale) and skip cache
      const result = this.cache[coordsHashKey];
      if ((result.timestamp + (this.timeout)) > Date.now()) {
        return of(result)
      }
    }

    return this.http.get<WeatherResponse>(`http://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat: lat.toString(),
        lon: lon.toString(),
        appid
      }
    }).pipe(map(res => {
      const temp = (this.convertToCelcius(res.main.temp)).toFixed(1)
      const sky = res.weather[0].main
      const wind = res.wind.speed

      const result = { temp, sky, wind, timestamp: Date.now() }

      this.cache[coordsHashKey] = result

      return result
    }))
  }

  private convertToCelcius(temp: number) {
    return temp - 273.15;
  }
}
