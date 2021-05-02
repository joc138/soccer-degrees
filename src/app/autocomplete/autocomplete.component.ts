import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() stateList!:[];

  stateForm!: FormGroup;

  selectedVal: any= {abb:'',name:''};

  constructor(private fb:FormBuilder, ) {
    this.initForm();
   }

  showDropDown=false;

  ngOnInit(): void {
  }
  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search:[null]
    })
  }
  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }
  getSearchValue() {
    return this.stateForm.value.search;
  }
  selectValue(player: any){
    this.selectedVal.abb = player.abb;
    this.selectedVal.name = player.name;
  }
}
