import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService implements OnInit {

  constructor() { }

  univ_id_to_fetch!: string;
  choix1!: number;
  choix2!: number;
  choix3!: number;
  notes!: number[];

  ngOnInit() {

  }
}
