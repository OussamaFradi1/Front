import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS} from '../config/api.url.config';
import { CrudfamilleService } from '../shared/crudfamille.service';
import data from './famille.json';
@Injectable({
  providedIn: 'root'
})
export class FamilleService implements CrudfamilleService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    return data;
   // return this.http.get(API_URLS.FAMILLES_URL);
  }

  add(famille): Observable<any>{
    return this.http.post(API_URLS.FAMILLES_URL, famille);
  }

  update(famille): Observable<any>{
    return this.http.put(API_URLS.FAMILLES_URL, famille);
  }

  delete(id): Observable<any>{
    return this.http.delete(API_URLS.FAMILLES_URL + `/${id}`);
  }

  addAll(list): Observable<any>{
    return this.http.post(API_URLS.FAMILLES_URL + '/all', list);
  }




}