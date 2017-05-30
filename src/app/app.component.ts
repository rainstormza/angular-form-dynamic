import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form Test!';
  testForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testForm = this.fb.group({
      pullDownForm1: this.fb.group({
        from: "1", //default
        to: "1" //default
      }),
      pullDownForm2: this.fb.group({
        from: "1", //default
        to: "2" //default
      }),
      pullDownForm3: this.fb.group({
        from: "1", //default
        to: "3" //default
      }),
      // checkBoxForm1: this.fb.group({
      //   checkBoxList: this.fb.array(this.countArray(this.checkBoxData1.checkbox))
      // }),
      // checkBoxForm2: this.fb.group({
      //   checkBoxList: this.fb.array(this.countArray(this.checkBoxData2.checkbox))
      // })
      checkBoxForm1: this.fb.group({
        checkBoxList: this.countArray2(this.checkBoxData1.checkbox)
      }),
      checkBoxForm2: this.fb.group({
        checkBoxList: this.countArray2(this.checkBoxData2.checkbox)
      })
    });

  }

  onSubmit(testForm) {
    // alert('test');
    console.log(testForm.value);
    let checkBoxChosen = testForm.value.checkBoxForm1.checkBoxList.filter(x => x.isChosen == true);
    console.log(checkBoxChosen)
    let checkBoxsendValue = checkBoxChosen.map(x => this.checkBoxData1.checkbox.find(y => y.value === x.value))
    console.log(checkBoxsendValue);

    // https://plnkr.co/edit/qVsRUMFilUgd6K7Y9bFZ?p=preview

  }

  countArray(checkboxs) {
    // console.log(checkboxs);
    let checkBoxArray = [];
    for (let checkbox of checkboxs) {
      // console.log(checkbox);
      checkBoxArray.push(this.fb.group({
        isChosen: false,
        key: checkbox.key,
        value: checkbox.value
      }));
    }
    console.log(checkBoxArray);
    return checkBoxArray;
  }

  countArray2(checkboxs) {
    const arr = checkboxs.map(checkbox => {
      return this.fb.group({
        isChosen: true,
        // key: checkbox.key,
        value: checkbox.value
      });
    });
    console.log(this.fb.array(arr));
    return this.fb.array(arr);
  }

  // submit(value): void {
  //       const mine: any[] = <any[]>value.skills.filter(x => x.selected == false);
  //       console.log(mine);
  //       this.user.skills = <IMockSkills[]>mine.map(x => this.mockSkills.find(y => y.id === x.id));
  //       console.log(this.user.skills);
  //
  // }
  // https://plnkr.co/edit/y9KFa3TRCv8yQWluqXUp?p=preview

  pullDownData1 = {
    name: "pullDown1",
    from: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }],
    to: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }]
  }

  pullDownData2 = {
    name: "pullDown2",
    from: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }],
    to: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }]
  }

  pullDownData3 = {
    name: "pullDown3",
    from: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }],
    to: [{ key: 'data1', value: 1 }, { key: 'data2', value: 2 }, { key: 'data3', value: 3 }]
  }

  checkBoxData1 = {
    name: "check1",
    link1: "seleactall",
    link2: "deselectall",
    checkbox: [
      { key: 'JS', isChosen: false, value: 1 },
      { key: 'CSS', isChosen: false, value: 2 }
    ]
  }

  checkBoxData2 = {
    name: "check2",
    link1: "seleactall",
    link2: "deselectall",
    // checkbox: [1,2,3,4,5]
    checkbox: [
      { key: 'JS', isChosen: false, value: 1 },
      { key: 'CSS', isChosen: false, value: 2 },
      { key: 'HTML', isChosen: false, value: 3 }
    ]
  }


}
