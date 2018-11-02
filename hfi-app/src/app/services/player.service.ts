import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlayer } from '../models/player';
import { HttpClientModule, HttpClient }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) {
    /*var obj;
    this.getJson("../data/players.json").subscribe(data => obj=data, error=> console.log(error));*/
   }

   public getJson(uri:string):Observable<any>{
     //return this.http.get(uri).pipe(map((res: Player[]) => res.json));
     var data =  this.http.get(uri);
     return data.pipe(map((res:IPlayer[]) => res))
     
     //return this.http.get(uri).pipe(map(response => response.json);
     //return this.http.get(uri).pipe()
   }

   /*
   get(url: string, options?): Observable<any> {
    options = options || {};
    options.withCredentials = true;
    return this.http.get(url, options)
      .catch((error: any) => Observable.throw(error))
  }
  */
}
