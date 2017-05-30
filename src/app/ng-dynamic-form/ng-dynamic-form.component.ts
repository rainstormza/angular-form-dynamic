import { Component, OnInit } from '@angular/core';
import { MY_DYNAMIC_FORM_MODEL } from "./my-dynamic-form.model";
import { DynamicFormControlModel, DynamicFormService, DynamicFormArrayModel } from "@ng2-dynamic-forms/core";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ng-dynamic-form',
  templateUrl: './ng-dynamic-form.component.html',
  styleUrls: ['./ng-dynamic-form.component.css']
})
export class NgDynamicFormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = MY_DYNAMIC_FORM_MODEL;
    formGroup: FormGroup;
    arrayControl;
    arrayModel;

    constructor(private formService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.arrayControl = <FormArray> this.formGroup.get("myFormArray");
        this.arrayModel = <DynamicFormArrayModel> this.formService.findById("myFormArray", this.formModel);
    }

    onSubmit(form) {
      console.log(form.value);
    }

    addItem() {
        this.formService.addFormArrayGroup(this.arrayControl, this.arrayModel);
    }

    clear() {
        this.formService.clearFormArray(this.arrayControl, this.arrayModel);
    }

}


// https://github.com/udos86/ng2-dynamic-forms
