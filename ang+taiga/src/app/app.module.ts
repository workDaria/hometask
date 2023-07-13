import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import
{
  TuiRootModule, TuiDialogModule, TuiAlertModule,
  TUI_SANITIZER, TuiGroupModule, TuiDataListModule,
  TuiTextfieldControllerModule, TuiHintModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import
{
  TuiInputModule, TuiInputDateRangeModule, TuiTextAreaModule,
  TuiDataListWrapperModule, TuiSelectModule, TuiInputDateTimeModule,
  TuiTagModule, TuiRadioBlockModule, TuiBadgeModule, TuiInputSliderModule
} from '@taiga-ui/kit';

import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';

import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { PublishedComponent } from './published/published.component';

import { TuiBarModule } from '@taiga-ui/addon-charts';



@NgModule({
  declarations: [AppComponent, FormComponent, PublishedComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputDateRangeModule,
    FormsModule,
    TuiButtonModule,
    TuiTextAreaModule,
    TuiGroupModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiInputDateTimeModule,
    TuiTagModule,
    TuiRadioBlockModule,
    TuiBarModule,
    TuiSvgModule,
    TuiBadgeModule,
    TuiInputSliderModule,
    TuiHintModule,
    TuiTagModule

  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
