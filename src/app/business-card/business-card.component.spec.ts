import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardComponent } from './business-card.component';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

describe('BusinessCardComponent', () => {
  let component: BusinessCardComponent;
  let fixture: ComponentFixture<BusinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessCardComponent, ManageInterestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
