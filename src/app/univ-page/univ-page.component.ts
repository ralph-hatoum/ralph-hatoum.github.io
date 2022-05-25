import { Component, OnInit } from '@angular/core';
import { Univ } from "../models/univ.model";
import { ActivatedRoute } from "@angular/router";
import { UnivService } from "../services/univ.service";

@Component({
  selector: 'app-univ-page',
  templateUrl: './univ-page.component.html',
  styleUrls: ['./univ-page.component.scss']
})
export class UnivPageComponent implements OnInit {

  univ!: Univ;
  constructor(private route: ActivatedRoute,
    private univService: UnivService) { }

  ngOnInit(): void {

  }
}
