import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  // chandra:'https://jsonplaceholder.typicode.com/posts'

  public Base_Url=environment.baseUrl;
 
  constructor(private http:HttpClient) {
    debugger;
    // console.log(https://jsonplaceholder.typicode.com/posts);
   }

  

  getAll(data:any)
  {
return this.http.get(this.Base_Url);
  }

  deletebyId(data:any)
  {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts'+""+data)
  }


}
