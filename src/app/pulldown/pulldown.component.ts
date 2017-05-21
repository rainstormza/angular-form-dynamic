import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pulldown',
  templateUrl: './pulldown.component.html',
  styleUrls: ['./pulldown.component.css']
})
export class PulldownComponent implements OnInit {

  @Input() pullDownForm: FormGroup;
  @Input() pullDownData;

  constructor() { }

  ngOnInit() {
    // console.log(this.pullDownForm);
  }

}
