import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() checkBoxForm: FormGroup;
  @Input() checkBoxData;
  flag: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.checkBoxList = this.checkBoxForm.controls.checkBoxList;
    // console.log(this.checkBoxForm.controls.checkBoxList.value[0]);
    // console.log(this.checkBoxData.checkbox);
    // console.log(this.checkBoxData);

    // this.checkBoxForm = this.fb.group({
    //   checkBoxList: this.fb.array(this.checkBoxData.checkbox)
    // })

  }

  selectAll() {
    // console.log('selectAll');
    this.checkBoxForm.controls.checkBoxList.value.forEach((item) => {
      item.isChosen = true;
    });
    this.flag = true;
  }

  deselectAll() {
    // console.log('deselectAll');
    this.checkBoxForm.controls.checkBoxList.value.forEach((item) => {
      item.isChosen = false;
    });
    this.flag = false;
  }

}
