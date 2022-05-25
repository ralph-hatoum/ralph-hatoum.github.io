import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../../models/comment.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  n!: number[];
  

  @Input() comment!: Comment;
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.n = this.comment.notes;

  }

}
