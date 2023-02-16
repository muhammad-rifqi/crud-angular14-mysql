import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  
  title = 'newsportal';
  username: String = "";
  password: String = "";
  token: String = "";
  photo: any = "";
  ext: any = "";

  constructor(private http: HttpClient, private routes: Router) { }

  ngOnInit(): void {
    console.log('Oke')
  }

  
  onSubmit() {
    let body = {
      "username": this.username,
      "password": this.password,
      "token": this.token,
      "foto": this.photo,
      "ext": this.ext
    };
    this.http.post('http://localhost/testing-disini/angular/insert.php', JSON.stringify(body), { observe: 'response' }).subscribe(res => {
      if (res.status == 200) {
        //this.routes.navigateByUrl('/list');
        console.log(res);
      } else {
        console.log(res);
      }
    })
  }


  filetobase64(event: any) {
    const foto: File = event.target.files[0];
    this.ext = foto.type;
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      this.photo = reader.result;
    })
    reader.readAsDataURL(foto);

  }



}
