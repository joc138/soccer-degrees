import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Input() stateList = Array<any>();
  @Output() selectedEvent = new EventEmitter<any>();

  stateForm!: FormGroup;

  selectedVal: any= {abb:'',name:''};

  hasSelected: boolean = false;

  constructor(private fb:FormBuilder, ) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search:[null]
    })
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  selectValue(player: any){
    this.hasSelected = true;
    this.selectedVal.abb = player.abb;
    this.selectedVal.name = player.name;
    this.selectedEvent.emit(this.selectedVal);
  }
}
