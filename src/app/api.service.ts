import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Noticia } from '@app/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  apiNewsOptions = {
    url: 'https://www.rioclaro.rj.gov.br/wp-json/wp/v2',
    count: '4',
    tag: '75'
  };
  apiEmailOptions = {
    url: '',
    key: '',
    emailFrom: ''
  };

  constructor(
    private serviceRequest: HttpClient
  ) { }

  getNews(): Observable<Noticia[]> {
    const httpUrl = `${this.apiNewsOptions.url}/posts`;

    let  httpParams = new HttpParams();
    httpParams = httpParams.append('tags', '75');
    httpParams = httpParams.append('per_page', '6');
    httpParams = httpParams.append('_fields', 'title, link, date');

    return this.serviceRequest.get<Noticia[]>(httpUrl, { params: httpParams }).pipe(
      retry(1),
      catchError(error => {
        return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
      })
    );
  }

  sendEmail(data): Observable<any> {
    const httpUrl = `${this.apiEmailOptions.url}/messages`;

    let apiHeaders = new HttpHeaders();
    apiHeaders = apiHeaders.append('Authorization', 'Basic ' + btoa(this.apiEmailOptions.key));

    const bodyFromName = data.nomeSolicitante;
    const bodyFromEmail = data.email;
    const bodyMessageType = data.tipoManifestacao;
    const bodyMessageDestiny = data.destinoMensagem;
    const bodyMessageDiscricty = data.distrito;
    const bodyMessagePhone = data.telefone;
    const bodyMessageOriginal = data.mensagem;

    const bodyMessage = `<strong>Solicitante</strong>: ${bodyFromName} <br/> <strong>Destino</strong>: ${bodyMessageDestiny} <br/> <strong>Distrito</strong>: ${bodyMessageDiscricty} <br/> <strong>Telefone</strong>: ${bodyMessagePhone} <br/> <strong>Mensagem</strong>: ${bodyMessageOriginal}`.replace(/\r?\n/g, '<br/>');

    const httpData = new FormData();
    httpData.set('from', this.apiEmailOptions.emailFrom);
    httpData.set('to', 'educa@rioclaro.rj.gov.br');
    httpData.set('subject', `${bodyMessageType} - ${bodyFromName} - ${bodyMessageDiscricty}` );
    httpData.set('h:Reply-To', `${bodyFromName} ${bodyFromEmail}`);
    httpData.set('html', bodyMessage);

    return this.serviceRequest.post<any>(httpUrl, httpData, { headers: apiHeaders }).pipe(
      retry(1),
      catchError(error => {
        return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
      })
    );
  }
}
