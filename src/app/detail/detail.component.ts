import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  row: any;
  constructor(private route: ActivatedRoute, private routes: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.http.get('https://kasir.brightnerd.site/Aplikasi-Kasir/api_detail_blog/' + id, { observe: 'response' }).subscribe(response => {
      console.log(response);
      this.row = response.body;
    });

  }

}
