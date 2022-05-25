import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommunicationServiceService} from "../../../communication-service.service";
import {Comment} from "../../../models/comment.model";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  choix1!: number;
  choix2!: number;
  choix3!: number;


  constructor(private communication: CommunicationServiceService) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("SALUT");
    console.log(this.communication.choix1);
    console.log(this.communication.choix2);
    console.log(this.communication.choix3);
  }

  radioHandlerEvent(event: any) {
    this.communication.choix1 = event.target.value;

  }

  radioHandlerEvent2(event: any) {
    this.communication.choix2 = event.target.value;
  }

  radioHandlerEvent3(event: any) {
    this.communication.choix3 = event.target.value;
  }
}
