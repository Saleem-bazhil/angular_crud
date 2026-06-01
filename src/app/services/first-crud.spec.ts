import { TestBed } from '@angular/core/testing';

import { FirstCrud } from './first-crud';

describe('FirstCrud', () => {
  let service: FirstCrud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstCrud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
