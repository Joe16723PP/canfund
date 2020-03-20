import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {FilterValueModel} from '../../models/filter-value.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterChanged = new Subject<FilterValueModel>();
  constructor() { }
}
