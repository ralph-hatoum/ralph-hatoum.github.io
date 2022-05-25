import { Component, OnInit } from '@angular/core';
import { Univ } from "../../models/univ.model";
import { ActivatedRoute } from "@angular/router";
import { UnivService } from "../../services/univ.service";
import { Input } from '@angular/core';
import { CommunicationServiceService } from 'src/app/communication-service.service';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-univ-fiche',
  templateUrl: './univ-fiche.component.html',
  styleUrls: ['./univ-fiche.component.scss']
})
export class UnivFicheComponent implements OnInit {
  univ!: Univ;
  grade_vie_etudiante!: Number;
  grade_cours!: Number;
  Comments: Array<Comment> = [];
  constructor(private route: ActivatedRoute,
    private univService: UnivService,
    private communication: CommunicationServiceService) { }

  public saveIdtoStorage() {
    const id = this.communication.univ_id_to_fetch;
    localStorage.setItem('page_id', id)
  }
  public resetId() {
    localStorage.removeItem('page_id')
  }
  ngOnInit(): void {
    this.univ = new Univ();
    if (this.communication.univ_id_to_fetch) {
      this.univService.getUniv(this.communication.univ_id_to_fetch).subscribe((uni) => {
        this.univ = uni;
        this.Comments = uni.comments;
      })
      this.saveIdtoStorage()
    } else {
      const pageid = localStorage.getItem('page_id')
      if (pageid) {
        this.univService.getUniv(pageid).subscribe((uni) => {
          this.univ = uni;
          this.Comments = uni.comments;
        })
      }
    }
  }

}
