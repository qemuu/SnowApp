import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SlopeSearchService {

  constructor(private http:HttpClient) {

  }
  slopes
  
  

 

  getSlopes(){
    return this.http.get('http://localhost:3000/slopes')
  }

  getWeather(lat:Number , lon:Number):Observable<any>{
    const apiKey = 'db99bc9a7ddcb4018f45351f868a2da1'
    
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  }

}



//http://api.openweathermap.org/data/2.5/weather?q=London&appid=db99bc9a7ddcb4018f45351f868a2da1