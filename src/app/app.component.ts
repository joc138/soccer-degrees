import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
  name: string;
}
type StateObj = {
  abb: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'soccer-degrees';
  player1: string = "";
  player2: string = "";
  test: string = "";
  isVisible: boolean = false;
  players: string[] = ['pessi','penaldo','lingardinho','shawldini','barnes','antonio','kingArthur','salads','rashgod','mcsauce','awb','flappyhandski'];
  states:StateObj[]= [{'abb':'AL','name':'Alabama'}, {'abb':'AK','name':'Alaska'}, {'abb':'AZ','name':'Arizona'},{'abb':'AR','name':'Arkansas'},{'abb':'CA','name':'California'},{'abb':'CO','name':'Colorado'},
  {'abb':'CT','name':'Connecticut'},{'abb':'DE','name':'Delaware'},{'abb':'DC','name':'District of Columbia'}, {'abb':'FL','name':'Florida'}
  , {'abb':'GA','name':'Georgia'}, {'abb':'GM','name':'Guam'}, {'abb':'HI','name':'Hawaii'}, {'abb':'ID','name':'Idaho'},{'abb':'IL','name':'Illinois'}, {'abb':'ID','name':'Indiana'}, {'abb':'IO','name':'Iowa'},{'abb':'KS','name':'Kansas'}, {'abb':'KY','name':'Kentucky'}
  , {'abb':'LA','name':'Louisiana'}, {'abb':'ME','name':'Maine'},{'abb':'MI','name':'Marshall Islands'}, {'abb':'ML','name':'Maryland'}, {'abb':'MA','name':'Massachusetts'},{'abb':'MI','name':'Michigan'},{'abb':'MN','name':'Minnesota'}, {'abb':'MI','name':'Mississippi'},
  {'abb':'MS','name':'Missouri'},{'abb':'MO','name':'Montana'}, {'abb':'NB','name':'Nebraska'}, {'abb':'NE','name':'Nevada'}, {'abb':'NM','name':'New Hampshire'}, {'abb':'NJ','name':'New Jersey'}, {'abb':'NM','name':'New Mexico'},{'abb':'NY','name':'New York'}, {'abb':'NC','name':'North Carolina'},
  {'abb':'ND','name':'North Dakota'}, {'abb':'NM','name':'Northern Mariana Islands'}, {'abb':'OH','name':'Ohio'}, {'abb':'OK','name':'Oklahoma'}, {'abb':'OR','name':'Oregon'}, {'abb':'PA','name':'Palau'},{'abb':'PE','name':'Pennsylvania'}, {'abb':'PR','name':'Puerto Rico'},
  {'abb':'RI','name':'Rhode Island'}, {'abb':'SC','name':'South Carolina'}, {'abb':'SD','name':'South Dakota'},{'abb':'TN','name':'Tennessee'},{'abb':'TX','name':'Texas'},{'abb':'UT','name':'Utah'},{'abb':'VT','name':'Vermont'}, {'abb':'VI','name':'Virgin Island'}, {'abb':'VA','name':'Virginia'}, {'abb':'WA','name':'Washington'},
   {'abb':'WV','name':'West Virginia'}, {'abb':'WI','name':'Wisconsin'}, {'abb':'WY','name':'Wyoming'}];

  myControl = new FormControl();

 
  filteredOptions!: Observable<User[]>;

  showOutput(){
    this.isVisible = true;
  }
  ngOnInit() {
    /*
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );*/
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
}