import { Injectable } from '@angular/core'
import { Univ } from "../models/univ.model";
import { HttpClient } from '@angular/common/http';
import { homepage } from '../models/homepage.model';

@Injectable({
  // Ce service doit etre enregistrer a la racine de l'application
  providedIn: 'root'
})

export class UnivService {
  constructor(private Http: HttpClient) { }
  URL_get = "https://server-extchange-insa.herokuapp.com/api/get/"
  URL_home_page = "https://server-extchange-insa.herokuapp.com/api/get/628636b760ecb13c77ad5de4"
  URL_put = "https://server-extchange-insa.herokuapp.com/api/update/"
  URL_delete_comment = "https://server-extchange-insa.herokuapp.com/api/delete"

  getUniv(id: String) {
    return this.Http.get<Univ>(this.URL_get + id)
  }

  getHomePage() {
    return this.Http.get<homepage>(this.URL_home_page)
  }

  postComment(uni: Univ) {
    console.log(uni._id)
    console.log('Calling backend')
    return this.Http.put<Univ>(this.URL_put + uni._id, uni)
  }

  deleteComment(uni: Univ) {
    return this.Http.put<any>(this.URL_delete_comment + uni._id, uni)
  }

}
