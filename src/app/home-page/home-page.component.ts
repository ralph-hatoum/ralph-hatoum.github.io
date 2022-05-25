import { Component, OnInit } from '@angular/core';
import { homepage } from '../models/homepage.model';
import { UnivService } from '../services/univ.service';
import { Univ } from '../models/univ.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationServiceService } from '../communication-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  univ_list!: Univ[]
  pays_europe = ['Allemagne', 'Autriche', 'Espagne', 'Belgique', 'Danemark', 'Estonie', 'Finlande', 'Irlande', 'Islande', 'Italie', 'Lituanie', 'Norvege', 'Pays Bas', 'Pologne', 'Roumanie', 'Royaume-Uni', 'Suede', 'Turquie']
  constructor(public homepageservice: UnivService,
    private router: Router,
    private communication: CommunicationServiceService) { }
  homepage_!: homepage;

  ngOnInit(): void {
    this.homepageservice.getHomePage().subscribe((hp) => this.homepage_ = hp);
    this.univ_list = this.homepage_.landing_page_array
    console.log(this.homepage_)
  }

  seeUniv(id: string): void {
    this.router.navigateByUrl('univ/' + id);
    this.communication.univ_id_to_fetch = id;
    console.log(id)
  }

}

