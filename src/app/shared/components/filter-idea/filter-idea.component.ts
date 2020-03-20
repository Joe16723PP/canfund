import { Component, OnInit } from '@angular/core';
import {SortFilterModel} from '../../models/sort-filter.model';
import {CATEGORY_LIST, LOCATION_LIST, SORT_FILTER_TYPE_LIST} from '../../data/const/menus.data';
import {FilterLocationModel} from '../../models/filter-location.model';
import {CategoryModel} from '../../models/category.model';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {FilterService} from '../../services/filter/filter.service';

@Component({
  selector: 'app-filter-idea',
  templateUrl: './filter-idea.component.html',
  styleUrls: ['./filter-idea.component.scss']
})
export class FilterIdeaComponent implements OnInit {

  filterFormGroup: FormGroup;
  locationCtrl = new FormControl();
  sortList: SortFilterModel[] = SORT_FILTER_TYPE_LIST;
  locationList: FilterLocationModel[] = LOCATION_LIST;
  categoryList: CategoryModel[] = CATEGORY_LIST;
  filteredLocation: Observable<FilterLocationModel[]>;

  constructor(public filterService: FilterService) {
    this.filteredLocation = this.locationCtrl.valueChanges
      .pipe(
        startWith(''),
        map(location => location ? this._filterLocation(location) : this.locationList.slice())
      );
  }

  private _filterLocation(value: string): FilterLocationModel[] {
    const filterValue = value.toLowerCase();
    return this.locationList.filter(state => state.location_name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    this.filterFormGroup = new FormGroup({
      category: new FormControl(0),
      sortType: new FormControl(0),
      ideaName: new FormControl(),
      location: this.locationCtrl
    });

    // this.filterFormGroup.addControl('location', this.locationCtrl);
  }

  onSubmit() {
    // console.log(this.filterFormGroup.value);
    this.filterService.filterChanged.next(this.filterFormGroup.value);
  }

}
