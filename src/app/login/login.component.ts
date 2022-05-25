import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email !: string|undefined;
  password !: string;
  totalAngularPackages: any;
  postId: any;
  postMess: any;
  postUserId: any;
  postToken: any;


  constructor(public http : HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.email = "inconnu";
    this.password = "mdp";
  }
  login(){
    console.log("On a cliquer sur connection")
    this.email = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("mdp")).value;
    this.http.post<any>('http://localhost:3000/api/auth/login', { email : this.email, password : this.password }).subscribe(data => {
      this.postUserId = data.userId;
      this.postToken = data.token;
      this.router.navigateByUrl('admin');
  })

}


  signUp() {

    this.email = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("mdp")).value;
    this.http.post<any>('http://localhost:3000/api/auth/signup', { email : this.email, password : this.password }).subscribe(data => {
      this.postId = data.id;
      this.postMess = data.message;
  })
  if(this.postId == ''){
    this.postId="Pas de post Id"
  }
  console.log(this.postId);
  console.log("Apres le postId");

  }

}
