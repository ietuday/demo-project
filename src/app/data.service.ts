import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Questions } from './question';

@Injectable()
export class DataService {
  url = "http://www.facebook.com";

  constructor(private http: Http) {
    console.log("Inside DataService : constructor");
   }


   //Getting data From http get method.
  //  getQuestions(){
  //    return this.http.get('https://api.github.com/users')
  //   .map(data => {
  //       data.json();
  //       // the console.log(...) line prevents your code from working
  //       // either remove it or add the line below (return ...)
  //       console.log("I CAN SEE DATA HERE: ", data.json());
  //       return data.json();
  //    });
  //  }


   getQuestions(): Observable<Questions[]> {
     return this.http.get("../assets/data.json")
    .map(data => {
        <Questions[]>data.json();
        // the console.log(...) line prevents your code from working
        // either remove it or add the line below (return ...)
        console.log("I CAN SEE DATA HERE: ", data.json());
        return <Questions[]>data.json();
     });
   }

//    load(): Observable<User[]> {
//   return this.http.get(`${this.githubApiUrl}/users`)
//     .map(res => <User[]>res.json());
// }

}
