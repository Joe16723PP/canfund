import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserModel} from '../../../shared/models/user.model';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  onCheckDuplicateUser(user: UserModel) {
    const url = environment.apiUrl + '/user/' + user.uid;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(map((value) => {
        console.log(value);
        resolve(true);
      }));
    });
  }
}
