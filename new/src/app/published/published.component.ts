import { Component, Input } from '@angular/core';
import { Iform } from "../form/form.interface";

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.less']
})


export class PublishedComponent
{
  @Input() form!: Partial<Iform>;
  tag = 'Hello';

  getPriority()
  {
    switch (this.form.priorityValue) {
      case 'Не определен':
        return 'neutral';
      case 'Низкий':
        return 'success';
      case 'Средний':
        return 'warning';
      case 'Высокий':
        return 'error';
      default: return 'neutral';
    }
  }
};


