import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders  } from '@angular/common/http';
// import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  row: any;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
    // const headers = new HttpHeaders({'h1':'v1','h2':'v2'});

    this.http.get('https://kasir.brightnerd.site/Aplikasi-Kasir/api_list_blog',{ observe: 'response' }).subscribe(response=>{
        console.log(response);
        this.row = response.body;
  });
  }

  // onSave(id : number){
  //     alert(id)
  // }

}
