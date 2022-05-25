import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  myDataArray !: string[];
  columnsToDisplay = ['userName', 'age'];
  constructor() { }

  ngOnInit(): void {
    this.myDataArray = ['univ1', 'univ2', 'univ3'];
  }

}
