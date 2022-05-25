import { Component, OnInit } from '@angular/core';

import { MouseEvent } from '@agm/core';
import { Coordonnée } from 'src/app/models/coordonées.models';
import { AgmCoreModule } from '@agm/core';
import { UnivService } from '../services/univ.service';
import { Univ } from '../models/univ.model';
import { homepage } from '../models/homepage.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})



export class CarteComponent implements OnInit{
  univ_list!: Univ[]
  homepage_!: homepage;
  constructor(public homepageservice: UnivService,
    private router: Router){};
  ubicacionCentral!: Coordonnée;
  ubicacionEnProceso!: Coordonnée;


  coordonnees : Coordonnée[] = [new Coordonnée(7, -77),new Coordonnée(7.0111, -77.1023),new Coordonnée(7, -76.9999)];
  title: any;

  ngOnInit(): void {
    this.ubicacionCentral = new Coordonnée(45.7591 ,4.8473);

    this.homepageservice.getHomePage().subscribe((hp) => this.homepage_ = hp);
    this.univ_list = this.homepage_.landing_page_array;
    this.homepage_.landing_page_array.forEach(element => { this.coordonnees.push(new Coordonnée(element.latitude, element.longitude))});
    
    
  }

  seeUniv(id: string): void {
    this.router.navigateByUrl('univ/' + id);
  }

  mapClicked($event: MouseEvent) {
    let coord = new Coordonnée($event.coords.lat, $event.coords.lng);
    this.coordonnees.push(coord);
  }
}
