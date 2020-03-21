import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CreateIdeaModel, IdeaDetailModel} from '../../models/idea.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IdeaManagementService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

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

  onCreateNewIdea(ideaData: CreateIdeaModel) {
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
  }

  onGetIdeaByTag(tagName: string): Observable<any> {
    const url = this.apiUrl + '/projects/tags/' + tagName;
    return this.http.get(url);
  }

  onUserVoteIdea(ideaId: string, userId: string, option: string): Observable<any> {
    const url = this.apiUrl + `/project/${ideaId}/like`;
    const body = {
      action: option,
      uid: userId
    };
    console.log(body);
    return this.http.put(url, body);
  }
}
