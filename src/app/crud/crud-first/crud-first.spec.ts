import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFirst } from './crud-first';

describe('CrudFirst', () => {
  let component: CrudFirst;
  let fixture: ComponentFixture<CrudFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudFirst],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudFirst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
