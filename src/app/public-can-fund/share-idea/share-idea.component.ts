import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/authService/auth.service';
import {UserModel} from '../../shared/models/user.model';
import {CategoryModel} from '../../shared/models/category.model';
import {CATEGORY_LIST, LOCATION_LIST} from '../../shared/data/const/menus.data';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {FilterLocationModel} from '../../shared/models/filter-location.model';
import {map, startWith} from 'rxjs/operators';
import {IdeaManagementService} from '../../shared/services/idea-management/idea-management.service';

@Component({
  selector: 'app-share-idea',
  templateUrl: './share-idea.component.html',
  styleUrls: ['./share-idea.component.scss']
})
export class ShareIdeaComponent implements OnInit {

  public userData: UserModel;
  categoryList: CategoryModel[] = CATEGORY_LIST.slice(1);
  createIdeaForm: FormGroup;
  locationCtrl = new FormControl();
  locationList: FilterLocationModel[] = LOCATION_LIST;
  filteredLocation: Observable<FilterLocationModel[]>;
  ideaNameLength = 0;
  ideaDescriptionLength = 0;

  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private ideaService: IdeaManagementService) {
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
    this.createIdeaForm = new FormGroup({
      tags: new FormArray([], Validators.required),
      project_name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      photoURL: new FormControl(''),
      owner_id: new FormControl(),
      funding_target: new FormControl('', Validators.required),
      location: this.locationCtrl
    });
    this.userData = this.authService.UserValue;
    this.createIdeaForm.patchValue({
      owner_id: this.userData.uid
    });

    this.createIdeaForm.valueChanges.subscribe(value => {
      this.onCheckNameLength(value.project_name);
      this.onCheckDescriptionLength(value.description);
    });
  }

  get Category() {
    return (this.createIdeaForm.get('tags') as FormArray).controls;
  }

  onDeleteCategory(index: number) {
    (this.createIdeaForm.get('tags') as FormArray).removeAt(index);
  }

  onAddCategory(selectedType: MatSelectChange) {
    const index = selectedType.value;
    const type = this.categoryList[index - 1];
    const isDuplicate = (this.Category).filter((value) => {
      return value.value === type.category_name;
    });
    if (isDuplicate.length !== 0) {
      const msg = `${type.category_name} has been added`;
      this.snackBar.open(msg, 'close', {duration: 2000});
      return;
    }
    const control = new FormControl(type.category_name, Validators.required);
    (this.createIdeaForm.get('tags') as FormArray).push(control);
  }

  onSubmit() {
    if (this.createIdeaForm.invalid) {
      return;
    }
    // this.ideaService.onCreateNewIdea(this.createIdeaForm.value).then(value => {
    //   console.log(value);
    //   this.snackBar.open('Create Mock Idea!', 'close');
    //   setTimeout(() => {
    //     window.location.replace('/dashboard');
    //   }, 1500);
    // }).catch(reason => {
    //   console.log(reason);
    //   this.snackBar.open(`Error ${reason.message}`, 'close', {duration: 3000});
    // });
    console.log(this.createIdeaForm.value);
  }

  private onCheckNameLength(value: string) {
    this.ideaNameLength = value.length;
  }

  private onCheckDescriptionLength(value: string) {
    this.ideaDescriptionLength = value.length;
  }
}
