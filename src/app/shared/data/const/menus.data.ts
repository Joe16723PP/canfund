import {CategoryModel} from '../../models/category.model';
import {SortFilterModel} from '../../models/sort-filter.model';
import {FilterLocationModel} from '../../models/filter-location.model';

export const CATEGORY_LIST: CategoryModel[] = [
  {category_id: 0, category_name: 'All Categories'},
  {category_id: 1, category_name: 'Game'},
  {category_id: 2, category_name: 'Food'},
  {category_id: 3, category_name: 'App'},
  {category_id: 4, category_name: 'Technology'},
  {category_id: 5, category_name: 'Iot'}
];

export const SORT_FILTER_TYPE_LIST: SortFilterModel[] = [
  {sort_filter_id: 0, sort_filter_name: 'Newest'},
  {sort_filter_id: 1, sort_filter_name: 'Popularity'},
  {sort_filter_id: 2, sort_filter_name: 'Most fund'},
  {sort_filter_id: 3, sort_filter_name: 'Near me'},
];
export const LOCATION_LIST: FilterLocationModel[] = [
  {location_id: 0, location_name: 'Khonkaen'},
  {location_id: 1, location_name: 'Bangkok'}
];
