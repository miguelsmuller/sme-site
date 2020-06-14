import { Component, OnInit } from '@angular/core';
import { Api } from '@app/api.service';
import { Noticia } from '@app/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
})
export class ListNewsComponent implements OnInit {
  dataSource$: Observable<Noticia[]>;

  constructor(public apiService: Api) { }

  ngOnInit(): void {
    this.dataSource$ = this.apiService.getNews();
  }
}
