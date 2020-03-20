import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CreateIdeaModel, IdeaDetailModel} from '../../models/idea.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaManagementService {
  apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  onMockCreateNewIdea(ideaData: CreateIdeaModel) {
    const url = this.apiUrl + '/project';
    return new Promise((resolve, reject) => {
      this.http.post(url, ideaData).subscribe(value => {
        resolve(value);
      }, error => {
        reject(error);
      });
    });
  }

  onGetAllIdea(): Observable<any> {
    const url = this.apiUrl + '/projects';
    return this.http.get(url);
    // return new Promise((resolve, reject) => {
    //   this.http.get(url).subscribe((value: {projects: IdeaDetailModel[]}) => {
    //     resolve(value.projects);
    //   }, error => {
    //     reject(error);
    //   });
    // });
  }

  onGetIdeaByTag(tagName: string): Observable<any> {
    const url = this.apiUrl + '/projects/tags/' + tagName;
    return this.http.get(url);
    // return new Observable(subscriber => {
    //   this.http.get(url).subscribe((value: {projects: IdeaDetailModel[]}) =>  {
    //     resolve(value.projects);
    //   }, error => {
    //     reject(error);
    //   });
    // });
  }
}
