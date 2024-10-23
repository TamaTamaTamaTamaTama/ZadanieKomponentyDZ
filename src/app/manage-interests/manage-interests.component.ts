import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusinessCardComponent } from '../business-card/business-card.component';

@Component({
  selector: 'app-manage-interests',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-interests.component.html',
  styleUrl: './manage-interests.component.css'
})
export class ManageInterestsComponent {
  @Input() interestList: string[] | undefined;
  @Output() selectInterestInParent: EventEmitter<number> = new EventEmitter();
  @Input() selected: number | undefined;
  

  selectInterestInChild(which:number):void{
    
    this.selectInterestInParent.emit(which);
  }
}
