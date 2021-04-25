import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udbhabona';
  constructor(public dialog : MatDialog) { };
  
  
  OpenDialog(){
    this.dialog.open(LoginComponent)
  }
}
