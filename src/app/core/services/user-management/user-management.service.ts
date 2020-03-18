import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserModel} from '../../../shared/models/user.model';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  getUserDetailFromDatabase(userId: string): Observable<any> {
    const url = environment.apiUrl + '/user/' + userId;
    return this.http.get(url);
  }
}
