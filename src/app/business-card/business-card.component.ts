import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule,ShowDateComponent,CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected:number=-1;
  originalInterest: string | null = null;


  constructor() { 
    this.name = 'Joanna';
    this.surname = 'Krupa';
    this.dateOfBirth = new Date('2000-03-18');
    this.interests = ['tennis', 'programming', 'photography'];
  
  }


  selectInterest(which:number):void{
      this.selected=which;
      this.originalInterest = this.interests[which];
  }
  cancelChange(x: number) {
    if (this.selected > -1 && this.originalInterest !== null) {
      this.interests[this.selected] = this.originalInterest;
    }
    this.selected = -1; 
    this.originalInterest = null;  
  }
  
    SaveChange(x: number) {
      this.selected = -1;  
      this.originalInterest = null; 
    }

    


}
