import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CreateIdeaModel, IdeaDetailModel} from '../../models/idea.model';

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

  onGetAllIdea() {
    const url = this.apiUrl + '/projects';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((value: {projects: IdeaDetailModel[]}) => {
        resolve(value.projects);
      }, error => {
        reject(error);
      });
    });
  }

  onGetIdeaByTag(tagName: string) {
    const url = this.apiUrl + '/projects/tags/' + tagName;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((value: {projects: IdeaDetailModel[]}) =>  {
        resolve(value.projects);
      }, error => {
        reject(error);
      });
    });
  }
}
