import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { User } from '../../user';
import 'rxjs/Rx';

@Injectable()
export class AppSignupService {

  private users : User[];

  constructor(private http: Http) { }

  addUser(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-type': 'application/json'
    });

    console.log(body)

    return this.http.post('https://nameless-crag-44986.herokuapp.com/api/users/', body, {headers: headers})
      .map((response: Response) => response.json())
      .subscribe((data: any) => console.log(data));
  }

}
