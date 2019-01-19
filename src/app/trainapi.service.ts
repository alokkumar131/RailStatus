import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apikey={
    key:"1qq1qjxujn"
}
@Injectable({
  providedIn: 'root'
})
export class TrainapiService {

  constructor(private http:HttpClient) { }
  private _url: string;

  fetchRoute(value): Observable<any> {
    return this.http.get("https://api.railwayapi.com/v2/route/train/"+value.trainnumber+"/apikey/"+apikey.key).pipe(
    tap(response=>{
      })
    )
}

}
