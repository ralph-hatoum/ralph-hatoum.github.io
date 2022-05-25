import { Component, OnInit } from '@angular/core';
import { Comment } from "../../models/comment.model";
import { ActivatedRoute } from "@angular/router";
import { UnivService } from 'src/app/services/univ.service';
import { Univ } from 'src/app/models/univ.model';
import { ObjectId } from 'mongoose';
import { CommunicationServiceService } from 'src/app/communication-service.service';

@Component({
  selector: 'app-univ-comments',
  templateUrl: './univ-comments.component.html',
  styleUrls: ['./univ-comments.component.scss']
})
export class UnivCommentsComponent implements OnInit {

  comments!: Array<Comment>;
  univ!: Univ;
  comment!: Comment;
  newCommentContent!: string;
  newCommentName!: string;
  newCommentMail_phone!: string;
  choix1!: string;
  choix2!: number;
  choix3!: number;
  notes!: number[];
  len!: number;
  univ_id!: ObjectId;

  constructor(private commentService: UnivService,
    private route: ActivatedRoute,
    private communication: CommunicationServiceService) { }
  public saveIdtoStorage() {
    const id = this.communication.univ_id_to_fetch;
    localStorage.setItem('page_id', id)
  }
  public ngOnInit(): void {
    const unnivId = +this.route.snapshot.params['id'];
    if (this.communication.univ_id_to_fetch) {
      this.commentService.getUniv(this.communication.univ_id_to_fetch).subscribe((uni) => {
        this.comments = uni.comments
        this.univ = uni
      });
      this.saveIdtoStorage()
    } else {
      const pageid = localStorage.getItem('page_id')
      if (pageid) {
        this.commentService.getUniv(pageid).subscribe((uni) => {
          this.comments = uni.comments
          this.univ = uni
        });
      }
    }
    this.newCommentContent = "";
  }

  // AJOUT DU COMMENTAIRE DANS LA BD
  // ce qu'on ecrit est récupéré dans newCommentContent
  // notes : 0 : Niveau vie, 1 : Vie asso, 2 : Qualite des cours
  addComment(): void {
    var notes = [this.communication.choix1, this.communication.choix2, this.communication.choix3];
    console.log(notes);
    var newComment = new Comment(this.newCommentName, this.newCommentMail_phone, new Date().toString(), this.newCommentContent, notes)
    this.notes = this.communication.notes;
    console.log(newComment)
    this.univ.comments.push(newComment);
    this.commentService.postComment(this.univ).subscribe((uni) => {
      console.log(uni)
    })
    console.log(this.univ.comments)
    this.newCommentContent = ""
    this.newCommentMail_phone = ""
    this.newCommentName = ""

  }

}