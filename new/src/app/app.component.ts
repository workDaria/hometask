import { Component } from '@angular/core';
import { Iform } from "./form/form.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent
{
  title = 'proj1';
  formData: Partial<Iform>[] = [];

  onAddForm(data: Partial<Iform>)
  {
    this.formData.push(data);
  };

}
