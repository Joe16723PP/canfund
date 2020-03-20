import { TestBed } from '@angular/core/testing';

import { IdeaManagementService } from './idea-management.service';

describe('IdeaManagementService', () => {
  let service: IdeaManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
