import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInterestsComponent } from './manage-interests.component';

describe('ManageInterestsComponent', () => {
  let component: ManageInterestsComponent;
  let fixture: ComponentFixture<ManageInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageInterestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
