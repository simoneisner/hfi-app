import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientModule, HttpClient }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) {
    var obj;
    this.getJson("../data/players.json").subscribe(data => obj=data, error=> console.log(error));
   }

   public getJson(uri:string):Observable<any>{
     return this.http.get(uri).pipe(map((res:any) => res.json));
   }
}
