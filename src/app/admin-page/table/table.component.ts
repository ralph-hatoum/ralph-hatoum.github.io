import { Component, OnInit } from '@angular/core';
import { Univ } from 'src/app/models/univ.model';
import { homepage } from 'src/app/models/homepage.model';
import { UnivService } from 'src/app/services/univ.service';
import { ObjectId } from 'mongoose';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  headElements !: string[];
  elements !: any[];
  uni_list!: homepage;
  uni!: Univ;
  comment_list_to_change!: Array<Comment>;

  constructor(private univ_service: UnivService) { }

  ngOnInit(): void {
    this.univ_service.getHomePage().subscribe((home) => this.uni_list = home)

  }
  uni_onclick(id: string) {
    this.univ_service.getUniv(id).subscribe((univ) => this.uni = univ)
  }

  deleteComm(comment_date: string) {
    this.uni.comments.forEach((item, index) => {
      if (item.date === comment_date) {
        this.uni.comments.splice(index, 1);
      }
    })
    this.univ_service.postComment(this.uni).subscribe((msg) => console.log(msg));

  }


}
