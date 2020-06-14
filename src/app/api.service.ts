import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Noticia } from '@app/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  apiNews = environment.apiNews;
  apiEmail = environment.apiEmail;

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<Noticia[]> {
    const apiHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get<Noticia[]>(this.apiNews.url, { headers: apiHeaders });
  }

  sendEmail(data): Observable<any> {
    const url = `${this.apiEmail.url}/messages`;

    const apiHeaders = new HttpHeaders({
      enctype: 'multipart/form-data',
      Authorization: `Basic ${this.apiEmail.key}`
    });

    const formData = new FormData();
    formData.append('from', this.apiEmail.emailFrom);
    formData.append('to', data.destinoMensagem);
    formData.append('subject', data.tipoManifestacao);
    formData.append('text', data.nomeSolicitante + ' - ' + data.distrito + ' - ' + data.telefone + ' - ' + data.mensagem);

    return this.http.post<any>(url, formData, { headers: apiHeaders });
  }
}
