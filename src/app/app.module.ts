import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormsBootstrapUIModule } from "@ng2-dynamic-forms/ui-bootstrap";

import { AppComponent } from './app.component';
import { PulldownComponent } from './pulldown/pulldown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgDynamicFormComponent } from './ng-dynamic-form/ng-dynamic-form.component';
import { NgFormArrayComponent } from './ng-form-array/ng-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    PulldownComponent,
    CheckboxComponent,
    NgDynamicFormComponent,
    NgFormArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
