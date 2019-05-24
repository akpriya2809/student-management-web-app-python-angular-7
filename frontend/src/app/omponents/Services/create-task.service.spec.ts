import { TestBed } from '@angular/core/testing';

import { CreateTaskService } from './create-task.service';

describe('CreateTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTaskService = TestBed.get(CreateTaskService);
    expect(service).toBeTruthy();
  });
});
