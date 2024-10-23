import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-date',
  standalone: true,
  imports: [],
  templateUrl: './show-date.component.html',
  styleUrl: './show-date.component.css'
})
export class ShowDateComponent {
  @Input() dateToShow:Date | undefined;
  @Input() format: string |undefined;
  @Input() title: string |undefined;

  printDate(): string {
    const el: string[] = this.format!.split('-');
    let retDate = '';
    let tmp: number;
    el.forEach((element, index) => {
      if (index > 0) { retDate += '-'; }
      switch (element) {
        case 'dd': tmp = this.dateToShow!.getDate() + 1; break;
        case 'mm': tmp = this.dateToShow!.getMonth() + 1; break;
        default: retDate += this.dateToShow!.getFullYear();
      }
      if (element !== 'yyyy') {
        tmp < 10 ? retDate += '0' + tmp : retDate += tmp;
      }
    }
    );

    return retDate;
  }

}
