import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient,HttpResponse  } from '@angular/common/http';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  row: any;
  title = 'newsportal';
  username: String = "";
  password: String = "";
  token: String = "";
  photo: any = "";
  ext: any = "";

  constructor(private route : ActivatedRoute, private routes : Router, private http : HttpClient) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.http.get('https://kasir.brightnerd.site/Aplikasi-Kasir/api_detail_blog/' + id, { observe: 'response' }).subscribe(response => {
      console.log(response);
      this.row = response.body;
    });

  }

  onSubmit() {
    let body = {
      "username": this.username,
      "password": this.password,
      "token": this.token,
      "foto": this.photo,
      "ext": this.ext
    };
    this.http.post('http://localhost/testing-disini/angular/update.php', JSON.stringify(body), { observe: 'response' }).subscribe(res => {
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
