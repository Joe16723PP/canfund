import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryModel} from '../../shared/models/category.model';
import {CATEGORY_LIST} from '../../shared/data/const/menus.data';
import {MatSelectChange} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {regex} from '../../shared/data/const/validator';
import {AuthService} from '../../core/services/authService/auth.service';
import {UserModel} from '../../shared/models/user.model';
import {IdeaManagementService} from '../../shared/services/idea-management/idea-management.service';

@Component({
  selector: 'app-mock-create-idea',
  templateUrl: './mock-create-idea.component.html',
  styleUrls: ['./mock-create-idea.component.scss']
})
export class MockCreateIdeaComponent implements OnInit {

  initProjectForm: FormGroup;
  categoryList: CategoryModel[] = CATEGORY_LIST.slice(1);
  userData: UserModel;

  constructor(private snackBar: MatSnackBar,
              private authService: AuthService,
              private ideaService: IdeaManagementService) {
    this.userData = this.authService.UserValue;
  }

  ngOnInit(): void {
    this.initProjectForm = new FormGroup({
      tags: new FormArray([], Validators.required),
      project_name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      photoURL: new FormControl(''),
      // owner_id: new FormControl(),
      funding_target: new FormControl(1000),
      location: new FormControl('mock location')
    });
  }


  get Category() {
    return (this.initProjectForm.get('tags') as FormArray).controls;
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
    (this.initProjectForm.get('tags') as FormArray).push(control);
  }

  onSubmit() {
    let uidCtrl;
    if (this.userData.uid) {
      uidCtrl = new FormControl(this.userData.uid);
      this.initProjectForm.addControl('owner_id' , uidCtrl);
      this.ideaService.onMockCreateNewIdea(this.initProjectForm.value).then(value => {
        console.log(value);
        this.snackBar.open('Create Mock Idea!', 'close');
        setTimeout(() => {
          window.location.replace('/dashboard');
        }, 1500);
      }).catch(reason => {
        console.log(reason);
        this.snackBar.open(`Error ${reason.message}`, 'close', {duration: 3000});
      });
    } else {
      this.snackBar.open('Please login first', '', {duration: 3000});
    }

  }

  onDeleteCategory(index: number) {
    (this.initProjectForm.get('tags') as FormArray).removeAt(index);
  }
}
