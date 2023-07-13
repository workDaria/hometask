import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { Iform } from "./form.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
}
)

export class FormComponent
{
  items = [
    'Не определен',
    'Низкий',
    'Средний',
    'Высокий'
  ];

  readonly min = 0;
  readonly max = 100;
  readonly sliderStep = 1;
  readonly steps = (this.max - this.min) / this.sliderStep;
  readonly quantum = 0.01;
  readonly hint = `Укажите приблизительный процент выполнения задачи`;
  readonly control = new FormControl();

  priorityValue = new FormControl();

  readonly taskForm = new FormGroup({

    nameValue: new FormControl(''),

    infoValue: new FormControl(''),
    placeValue: new FormControl(''),
    urlValue: new FormControl(''),

    fromValue: new FormControl([new TuiDay(2023, 7, 10), null]),
    toValue: new FormControl([new TuiDay(2023, 7, 10), null]),

    statusValue: new FormControl(''),
    controlValue: new FormControl(''),
    priorityValue: new FormControl('')

  });

  readonly minm = new TuiDay(2000, 2, 20);
  readonly maxm = new TuiDay(2040, 2, 20);
  readonly status = ['в процессе', 'выполнена', 'отменена'];


  @Output() sendFormEvent = new EventEmitter<Partial<Iform>>();

  submitForm()
  {
    this.sendFormEvent.emit(this.taskForm.value);

  }

};
